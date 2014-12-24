# encoding: utf8
from __future__ import unicode_literals
from django.db import models, migrations
from django.contrib.auth.models import User, Group, Permission

def create_default_user(apps, schema_editor):
#    Group = apps.get_model(app_label='auth', model_name='Group')
#    User = apps.get_model(app_label='auth', model_name='User')
#    Permission = apps.get_model(app_label='auth', model_name='Permission')

    # Create Default Group
    group = Group.objects.create(name="Administrators")
    # Assign Permissions
    group.permissions = Permission.objects.all()
    group.save()

    # Create User
    admin = User.objects.create_user(username="admin", email="admin@example.com", password="ipampy")
    admin.is_superuser = True
    admin.is_staff = True
    admin.group = group
    admin.save()

class Migration(migrations.Migration):

    dependencies = [
        ('auth', '__first__'),
        ('contenttypes', '__first__'),
	('authtoken', '__first__'),
    ]

    operations = [
    	migrations.RunPython(create_default_user),
    ]
