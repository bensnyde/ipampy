from django.conf.urls import patterns, include, url
from api import router

urlpatterns = patterns('',
    url(r'^api/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^settings/', include('apps.administration.urls', namespace="settings")),
    url(r'^ipam/', include('apps.ipam.urls', namespace="ipampy")),
    url(r'^logout/', 'django.contrib.auth.views.logout', {'next_page': '/login/'}, name='logout'),
    url(r'^$', 'django.contrib.auth.views.login',  name='login'),
)
