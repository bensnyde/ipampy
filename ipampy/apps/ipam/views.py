from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from .forms import *


@login_required
def segments(request):
    return render(request, 'ipam/index.html', {'segmentform': SegmentForm()})

@login_required
def networks_view(request):
    return render(request, 'ipam/index.html', {'networkaddressform': NetworkAddressForm()})

@login_required
def hosts_view(request, network_id):
    #network = get_object_or_404(NetworkAddress, pk=int(network_id))
    network = NetworkAddress.objects.get(pk=network_id)
    return render(request, 'ipam/index.html', {'network_id': network_id, 'network': str(network), 'networkaddressform': NetworkAddressForm(), 'hostform': IPAddressForm(), 'splitnetworkform': SplitNetworkForm(), 'resizenetworkform': ResizeNetworkForm()})

@login_required
def vlans_view(request):
    return render(request, 'ipam/index.html', {'vlanform': VlanForm()})

@login_required
def vrfs_view(request):
    return render(request, 'ipam/index.html', {'vrfform': VrfForm()})
