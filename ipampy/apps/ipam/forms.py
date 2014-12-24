from django import forms
from django.forms import ModelForm
from .models import Segment, NetworkAddress, IPAddress, Vrf, Vlan

class SegmentForm(ModelForm):
    class Meta:
        model = Segment
        exclude = ('changed_by',)

class VlanForm(ModelForm):
    class Meta:
        model = Vlan
        exclude = ('changed_by',)

class VrfForm(ModelForm):
    class Meta:
        model = Vrf
        exclude = ('changed_by',)

class IPAddressForm(ModelForm):
        class Meta:
                model = IPAddress
                exclude = ('changed_by',)

class NetworkAddressForm(ModelForm):
    class Meta:
        model = NetworkAddress
        exclude = ('changed_by',)

class ResizeNetworkForm(forms.Form):
    new_cidr = forms.IntegerField(min_value=0, max_value=32, initial=24, label="New CIDR")

class SplitNetworkForm(forms.Form):
    new_cidr = forms.IntegerField(min_value=0, max_value=32, widget=forms.Select())
    group_under = forms.BooleanField(required=False)
