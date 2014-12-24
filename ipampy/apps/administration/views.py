from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render
from .forms import GroupForm, UserChangeForm


@login_required
def admin_view(request):
    return render(request, 'administration/index.html', {'groupform': GroupForm(), 'userchangeform': UserChangeForm(), 'usercreationform': UserCreationForm()})