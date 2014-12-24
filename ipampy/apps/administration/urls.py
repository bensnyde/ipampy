from apps.administration import views
from django.conf.urls import patterns, url

urlpatterns = patterns('',
     url(r'^/$', views.admin_view, name='index'),
)
