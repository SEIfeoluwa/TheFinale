from django import forms
from .models import Device, User

class DeviceForm(forms.ModelForm):

    class Meta:
        model = Device
        fields = ('user', 'company', 'name', 'label', 'features', 'description', 'company', 'location',)