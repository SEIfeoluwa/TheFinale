from django.contrib import admin
from .models import User, Company, Device

# Register your models here.
admin.site.register(User)
admin.site.register(Company)
admin.site.register(Device)