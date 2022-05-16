from django.shortcuts import render
from .models import User, Device

# Create your views here.
def user_list(request):
    users = User.objects.all()
    return render(request, 'ctrlc/user_list.html', {'users': users})

def device_list(request):
    devices = Device.objects.all()
    return render(request, 'ctrlc/device_list.html', {'devices': devices})