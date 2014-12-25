from django.forms import ModelForm
from django.contrib.auth.models import User, Group


class GroupForm(ModelForm):
    class Meta:
        model = Group
	fields = '__all__'
