from django.shortcuts import render, redirect
from .serializers import UserSerializer
from rest_framework import generics

from .models import Company, User, Device
from .forms import DeviceForm, UserForm

# Create Api routes
class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# Create your views here.
def user_list(request):
    users = User.objects.all()
    return render(request, 'ctrlc/user_list.html', {'users': users})

def device_list(request):
    devices = Device.objects.all()
    return render(request, 'ctrlc/device_list.html', {'devices': devices})

def company_list(request):
    companies = Company.objects.all()
    return render(request, 'ctrlc/company_list.html', {'companies': companies})


def user_detail(request, pk):
    user = User.objects.get(id=pk)
    return render(request, 'ctrlc/user_detail.html', {'user': user})

def device_detail(request, pk):
    device = Device.objects.get(id=pk)
    return render(request, 'ctrlc/device_detail.html', {'device': device})

def company_detail(request, pk):
    company = Company.objects.get(id=pk)
    return render(request, 'ctrlc/company_detail.html', {'company': company})

def user_create(request):
    if request.method == 'POST':
        form = UserForm(request.POST)
        if form.is_valid():
            user = form.save()
            return redirect('artist_detail', pk=user.pk)
    else:
        form = UserForm()
    return render(request, 'ctrlc/user_form.html', {'form': form})

def device_create(request):
    if request.method == 'POST':
        form = DeviceForm(request.POST)
        if form.is_valid():
            device = form.save()
            return redirect('device_detail', pk=device.pk)
    else:
        form = DeviceForm()
    return render(request, 'ctrlc/device_form.html', {'form': form})


def device_edit(request, pk):
    device = Device.objects.get(pk=pk)
    if request.method == 'POST':
        form = DeviceForm(request.POST, instance=device)
        if form.is_valid():
            device = form.save()
            return redirect('device_detail', pk=device.pk)
    else:
        form = DeviceForm(instance=device)
    return render(request, 'ctrlc/device_form.html', {'form': form})

def user_delete(request, pk):
    User.objects.get(id=pk).delete()
    return redirect('user_list')

def device_delete(request, pk):
    Device.objects.get(id=pk).delete()
    return redirect('device_list')
