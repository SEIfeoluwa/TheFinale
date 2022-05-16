from django.contrib import admin
from ctrlc.models import Company, Device, User

# Register your models here.
admin.site.register(User)
admin.site.register(Company)
admin.site.register(Device)
