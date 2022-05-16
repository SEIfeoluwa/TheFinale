from django.shortcuts import render, redirect
from .models import Company, User, Device

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
    return render(request, 'ctrl/user_detail.html', {'user': user})

def device_detail(request, pk):
    device = Device.objects.get(id=pk)
    return render(request, 'ctrl/device_detail.html', {'device': device})

def company_detail(request, pk):
    company = Company.objects.all(id=pk)
    return render(request, 'ctrlc/company_detail.html', {'company': company})

def user_delete(request, pk):
    User.objects.get(id=pk).delete()
    return redirect('user_list')

def device_delete(request, pk):
    Device.objects.get(id=pk).delete()
    return redirect('device_list')
