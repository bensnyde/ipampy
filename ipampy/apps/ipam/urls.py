from . import views
from django.conf.urls import patterns, url

urlpatterns = patterns('',
     url(r'segments/', views.segments, name='segments'),
     url(r'vlans/', views.vlans_view, name='vlans'),
     url(r'^vrfs/', views.vrfs_view, name='vrfs'),
     url(r'^network/(?P<network_id>[\d]+)/', views.hosts_view, name='hosts'),
     url(r'^networks/', views.networks_view, name="networks"),
)
