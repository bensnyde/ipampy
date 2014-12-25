from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from simple_history.models import HistoricalRecords
from .helpers import is_ip_in_network


class Segment(models.Model):
    """ Segment Model """
    name = models.CharField(unique=True, max_length=32, blank=False, null=False)
    description = models.CharField(max_length=128, blank=True, null=True)
    parent = models.ForeignKey('self', null=True, blank=True)
    history = HistoricalRecords()
    changed_by = models.ForeignKey(User, null=True, blank=True)

    def __unicode__(self):
        return "%s" % self.name

    def get_absolute_url(self):
        return "/api/segments/%i/" % self.id

    @property
    def _history_user(self):
        return self.changed_by


class Vlan(models.Model):
    """ VLAN Model """
    number = models.PositiveIntegerField(unique=True, validators = [MinValueValidator(0), MaxValueValidator(4094)], blank=False, null=False)
    name = models.CharField(max_length=32, blank=False, null=False)
    description = models.CharField(max_length=128, blank=True, null=True)
    history = HistoricalRecords()
    changed_by = models.ForeignKey(User, null=True, blank=True)

    def __unicode__(self):
        return "%s (%d)" % (self.name, self.number)

    def get_absolute_url(self):
        return "/api/vlans/%i/" % self.id

    @property
    def _history_user(self):
        return self.changed_by


class Vrf(models.Model):
    """ Vrf Model """
    distinguisher = models.CharField(unique=True, max_length=11, blank=False, null=False, verbose_name="Route Distinguisher")
    name = models.CharField(max_length=32, blank=False, null=False)
    description = models.CharField(max_length=128, blank=True, null=True)
    history = HistoricalRecords()
    changed_by = models.ForeignKey(User, blank=True, null=True)

    def __unicode__(self):
        return "(%s) %s" % (self.distinguisher, self.name)

    def get_absolute_url(self):
        return "/api/vrfs/%i/" % self.id

    @property
    def _history_user(self):
        return self.changed_by


class NetworkAddress(models.Model):
    """ Network Model """
    address = models.GenericIPAddressField(blank=False, null=False)
    cidr = models.PositiveIntegerField(validators=[MinValueValidator(1), MaxValueValidator(32)], blank=False, null=False)
    segment = models.ForeignKey(Segment, null=True, blank=True)
    parent = models.ForeignKey('self', null=True, blank=True)
    vlan = models.ForeignKey(Vlan, null=True, blank=True)
    vrf = models.ForeignKey(Vrf, null=True, blank=True)
    description = models.CharField(max_length=128, null=True, blank=True)
    owner = models.CharField(max_length=32, null=True, blank=True)
    history = HistoricalRecords()
    changed_by = models.ForeignKey(User, null=True, blank=True)

    class Meta:
        unique_together = ['segment', 'address', 'cidr']

    def save(self, *args, **kwargs):
        if self.parent:
            if self.parent == self.id:
                raise Exception("Network cannot be a parent to itself.")

        super(NetworkAddress, self).save(*args, **kwargs)

    def __unicode__(self):
        return "%s/%d" % (self.address, self.cidr)

    def get_absolute_url(self):
        return "/api/networks/%i/" % self.id

    @property
    def _history_user(self):
        return self.changed_by


class IPAddress(models.Model):
    """ Host Model """
    TYPE_CHOICES = (
        ('STATIC', 'Static'),
        ('DYNAMIC', 'Dynamic'),
        ('RESERVED', 'Reserved'),
        ('OFFLINE', 'Offline'),
    )

    address = models.GenericIPAddressField(blank=False, null=False)
    description = models.CharField(max_length=64, blank=True, null=True)
    network = models.ForeignKey(NetworkAddress, blank=False, null=False)
    mac_address = models.CharField(max_length=18, blank=True, null=True)
    notes = models.CharField(max_length=128, blank=True, null=True)
    type = models.CharField(choices=TYPE_CHOICES, max_length=8, default='STATIC')
    history = HistoricalRecords()
    changed_by = models.ForeignKey(User, null=True, blank=True)

    class Meta:
        unique_together = ['address', 'network']

    def save(self, *args, **kwargs):
        if not is_ip_in_network(self.network.address, self.network.cidr, self.address):
            raise Exception("Specified Host does not reside within the specified Network.")
        super(IPAddress, self).save(*args, **kwargs)

    def __unicode__(self):
        return "%s" % (self.address)

    def get_absolute_url(self):
        return "/api/hosts/%i/" % self.id

    @property
    def _history_user(self):
        return self.changed_by


