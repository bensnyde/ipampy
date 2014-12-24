import django_filters
from rest_framework import serializers, status, viewsets, filters, routers
from rest_framework.authtoken.models import Token
from rest_framework.decorators import detail_route, list_route
from rest_framework.permissions import DjangoModelPermissions
from rest_framework.response import Response
from apps.ipam.models import Segment, NetworkAddress, IPAddress, Vlan, Vrf
from apps.ipam.helpers import get_network_subnetting_options, get_subnets, is_valid_networkaddress, is_ip_in_network
from django.contrib.auth.models import User, Group


class NetworkSerializer(serializers.ModelSerializer):
    segment_name = serializers.StringRelatedField(source='segment')
    vlan_name = serializers.StringRelatedField(source='vlan')
    vrf_name = serializers.StringRelatedField(source='vrf')

    class Meta:
        model = NetworkAddress
        fields = ('id', 'address', 'cidr', 'description', 'parent', 'vlan', 'vrf', 'owner', 'segment', 'segment_name', 'vrf_name', 'vlan_name')

class NetworkViewSet(viewsets.ModelViewSet):
    """ Network Resource """
    queryset = NetworkAddress.objects.all()
    serializer_class = NetworkSerializer
    permission_classes = (DjangoModelPermissions,)

    @detail_route(methods=['post'])
    def truncate(self, request, pk):
        """ Truncate Subnet """
        try:
            IPAddress.objects.filter(network__pk=pk).delete()

            return Response(status=status.HTTP_200_OK)
        except Exception as ex:
            return Response({"data": str(ex)}, status=status.HTTP_400_BAD_REQUEST)

    @detail_route(methods=['post'])
    def resize(self, request, pk):
        """ Resize Subnet """
        try:
            network = NetworkAddress.objects.get(pk=pk)

            # Validation
            if not is_valid_networkaddress(network.address, request.POST['new_cidr']):
                raise Exception('Specified Network has host bit set.')

            if network.cidr < request.POST['new_cidr']:
                # Check to see if any Network's IPAddresses exist outside new block
                for address in IPAddress.objects.filter(network=network):
                    if not is_ip_in_network(address, network.address, request.POST['new_cidr']):
                        raise Exception("There are IPAddress records under Network that exist outside of the new block.")
            elif network.cidr > request.POST['new_cidr']:
                # Check to see if new_cidr is less than network's parent cidr
                if network.parent and (network.parent.cidr < request.POST['new_cidr']):
                    raise Exception("Can't resize child network to be larger than parent network.")

                # Esnure new network isn't apart of existing supernet
                for supernet in NetworkAddress.objects.filter(parent=None).exclude(pk=pk):
                    if is_ip_in_network(supernet.address, supernet.cidr, network.address):
                        raise Exception("New network resides within existing Network.")
            else:
                raise Exception("New CIDR is the same as old CIDR.")

            # Update CIDR
            network.cidr = request.POST['new_cidr']
            network.save()

            return Response(status=status.HTTP_200_OK)
        except Exception as ex:
            return Response({"data": str(ex)}, status=status.HTTP_400_BAD_REQUEST)

    @detail_route(methods=['post'])
    def split(self, request, pk):
        """ Split Subnet """
        try:
            network = NetworkAddress.objects.get(pk=pk)

            IPAddress.objects.filter(network=network).delete()

            parent = None
            if request.POST.get('group_under'):
                parent = network

            for subnet in get_subnets(network.address, network.cidr, int(request.POST['new_cidr'])):
                NetworkAddress.objects.create(address=subnet, cidr=int(request.POST['new_cidr']), parent=parent)

            if not request.POST.get('group_under'):
                network.delete()

            return Response(status=status.HTTP_200_OK)
        except Exception as ex:
            return Response({"data": str(ex)}, status=status.HTTP_400_BAD_REQUEST)

    @detail_route(methods=['get'])
    def get_split_options(self, request, pk):
        """ Get Subnet Split Options """
        try:
            network = NetworkAddress.objects.get(pk=pk)
            options = []

            x = network.cidr + 1
            while x <= 32:
                options.append(get_network_subnetting_options(network.address, network.cidr, x))
                x += 1

            return Response(options, status=status.HTTP_200_OK)
        except Exception as ex:
            return Response({"data": str(ex)}, status=status.HTTP_400_BAD_REQUEST)

    @detail_route(methods=['get'])
    def describe(self, request, pk):
        """ Describe Subnet """
        try:
            network = NetworkAddress.objects.get(pk=pk)

            return Response(describe_subnet(network.address, network.cidr), status=status.HTTP_200_OK)
        except Exception as ex:
            return Response({"data": str(ex)}, status=status.HTTP_400_BAD_REQUEST)

    @detail_route(methods=['get'])
    def history(self, request, pk):
        """ Get Object Changelog """
        try:
            network = NetworkAddress.objects.get(pk=pk)

            history = []
            for x in network.history.all():
                history.append({
                    'id': x.id,
                    'description': x.description,
                    'action': x.get_history_type_display(),
                    'history_date': x.history_date,
                    'history_id': x.history_id,
                    #'history_object': x.history_object,
                    'history_type': x.history_type,
                    'address': x.address,
                    'cidr': x.cidr,
                    'owner': x.owner,
                    'parent_id': x.parent_id,
                    'segment_id': x.segment_id,
                    'vlan_id': x.vlan_id,
                    'vrf_id': x.vrf_id,
                    'instance': x.instance.pk,
                    #'instance_type': x.instance_type
                })

            return Response(history, status=status.HTTP_200_OK)
        except Exception as ex:
            return Response({"data": str(ex)}, status=status.HTTP_400_BAD_REQUEST)


class HostFilter(django_filters.FilterSet):
    class Meta:
        model = IPAddress
        fields = ['network']

class HostSerializer(serializers.ModelSerializer):
    network_address = serializers.StringRelatedField(source='network')

    class Meta:
        model = IPAddress
        fields = ('id', 'address', 'description', 'network', 'mac_address', 'notes', 'type', 'network_address')

class HostViewSet(viewsets.ModelViewSet):
    """ Host Resource """
    queryset = IPAddress.objects.all()
    serializer_class = HostSerializer
    permission_classes = (DjangoModelPermissions,)
    filter_backends = (filters.DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter)
    filter_class = HostFilter
    search_fields = ('address', 'description', 'mac_address', 'notes', 'network__address')
    ordering = ('id', 'address', 'network', 'type')

    @detail_route(methods=['get'])
    def history(self, request, pk):
        """ Get Object Changelog """
        try:
            host = IPAddress.objects.get(pk=pk)

            history = []
            for x in host.history.all():
                history.append({
                    'id': x.id,
                    'description': x.description,
                    'action': x.get_history_type_display(),
                    'history_date': x.history_date,
                    'history_id': x.history_id,
                    #'history_object': x.history_object,
                    'history_type': x.history_type,
                    'address': x.address,
                    'network': x.network,
                    'mac_address': x.mac_address,
                    'parent_id': x.parent_id,
                    'notes': x.notes,
                    'type': x.type,
                    'network_address': x.network_address,
                    'instance': x.instance.pk,
                    #'instance_type': x.instance_type
                })

            return Response(history, status=status.HTTP_200_OK)
        except Exception as ex:
            return Response({"data": str(ex)}, status=status.HTTP_400_BAD_REQUEST)


class VlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vlan
        fields = ('id', 'number', 'name', 'description')

class VlanViewSet(viewsets.ModelViewSet):
    """ VLAN Resource """
    queryset = Vlan.objects.all()
    serializer_class = VlanSerializer
    permission_classes = (DjangoModelPermissions,)

    @detail_route(methods=['get'])
    def history(self, request, pk):
        """ Get Object Changelog """
        try:
            vlan = Vlan.objects.get(pk=pk)

            history = []
            for x in vlan.history.all():
                history.append({
                    'id': x.id,
                    'action': x.get_history_type_display(),
                    'history_date': x.history_date,
                    'history_id': x.history_id,
                    #'history_object': x.history_object,
                    'history_type': x.history_type,
                    'number': x.number,
                    'name': x.name,
                    'description': x.description,
                    'instance': x.instance.pk,
                    #'instance_type': x.instance_type
                })

            return Response(history, status=status.HTTP_200_OK)
        except Exception as ex:
            return Response({"data": str(ex)}, status=status.HTTP_400_BAD_REQUEST)

class VrfSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vrf
        fields = ('id', 'distinguisher', 'name', 'description')

class VrfViewSet(viewsets.ModelViewSet):
    """ Vrf Resource """
    queryset = Vrf.objects.all()
    serializer_class = VrfSerializer
    permission_classes = (DjangoModelPermissions,)

    @detail_route(methods=['get'])
    def history(self, request, pk):
        """ Get Object Changelog """
        try:
            vrf = Vrf.objects.get(pk=pk)

            history = []
            for x in vrf.history.all():
                history.append({
                    'id': x.id,
                    'action': x.get_history_type_display(),
                    'history_date': x.history_date,
                    'history_id': x.history_id,
                    #'history_object': x.history_object,
                    'history_type': x.history_type,
                    'distinguisher': x.distinguisher,
                    'name': x.name,
                    'description': x.description,
                    'instance': x.instance.pk,
                    #'instance_type': x.instance_type
                })

            return Response(history, status=status.HTTP_200_OK)
        except Exception as ex:
            return Response({"data": str(ex)}, status=status.HTTP_400_BAD_REQUEST)


class SegmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Segment
        fields = ('id', 'name', 'description', 'parent')

class SegmentViewSet(viewsets.ModelViewSet):
    """ Segment Resource """
    queryset = Segment.objects.all()
    serializer_class = SegmentSerializer
    permission_classes = (DjangoModelPermissions,)

    @detail_route(methods=['get'])
    def history(self, request, pk):
        """ Get Object Changelog """
        try:
            segment = Segment.objects.get(pk=pk)

            history = []
            for x in segment.history.all():
                history.append({
                    'id': x.id,
                    'action': x.get_history_type_display(),
                    'history_date': x.history_date,
                    'history_id': x.history_id,
                    #'history_object': x.history_object,
                    'history_type': x.history_type,
                    'parent': x.parent,
                    'name': x.name,
                    'description': x.description,
                    'instance': x.instance.pk,
                    #'instance_type': x.instance_type
                })

            return Response(history, status=status.HTTP_200_OK)
        except Exception as ex:
            return Response({"data": str(ex)}, status=status.HTTP_400_BAD_REQUEST)


class TokenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Token
        fields = ('key',)


class UserSerializer(serializers.ModelSerializer):
    token = TokenSerializer(source="auth_token", read_only=True)

    class Meta:
        model = User
        exclude = ('password',)


class UserViewSet(viewsets.ModelViewSet):
    """ User Resource """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (DjangoModelPermissions,)

    @detail_route(methods=['get'])
    def history(self, request, pk):
        """ Get Object Changelog """
        try:
            user = User.objects.get(pk=pk)

            history = []
            for x in user.history.all():
                history.append({
                    'id': x.id,
                    'action': x.get_history_type_display(),
                    'history_date': x.history_date,
                    'history_id': x.history_id,
                    #'history_object': x.history_object,
                    'history_type': x.history_type,
                    'instance': x.instance.pk,
                    #'instance_type': x.instance_type
                })

            return Response(history, status=status.HTTP_200_OK)
        except Exception as ex:
            return Response({"data": str(ex)}, status=status.HTTP_400_BAD_REQUEST)


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ('id', 'name', 'permissions')

class GroupViewSet(viewsets.ModelViewSet):
    """ Group Resource """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = (DjangoModelPermissions,)

    @detail_route(methods=['get'])
    def history(self, request, pk):
        """ Get Object Changelog """
        try:
            group = Group.objects.get(pk=pk)

            history = []
            for x in group.history.all():
                history.append({
                    'id': x.id,
                    'action': x.get_history_type_display(),
                    'history_date': x.history_date,
                    'history_id': x.history_id,
                    #'history_object': x.history_object,
                    'history_type': x.history_type,
                    'name': x.name,
                    'permissions': x.permissions,
                    'instance': x.instance.pk,
                    #'instance_type': x.instance_type
                })

            return Response(history, status=status.HTTP_200_OK)
        except Exception as ex:
            return Response({"data": str(ex)}, status=status.HTTP_400_BAD_REQUEST)


router = routers.DefaultRouter()
router.register(r'vlans', VlanViewSet)
router.register(r'vrfs', VrfViewSet)
router.register(r'networks', NetworkViewSet)
router.register(r'hosts', HostViewSet)
router.register(r'segments', SegmentViewSet)
router.register(r'users', UserViewSet)
router.register(r'groups', GroupViewSet)
