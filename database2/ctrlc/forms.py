from django import forms
from .models import Device, User

class DeviceForm(forms.ModelForm):

    class Meta:
        model = Device
        fields = ('user', 'company', 'name', 'label', 'features', 'description', 'company', 'location',)

class UserForm(forms.ModelForm):

    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'user_name', 'email', 'address', 'photo_url')