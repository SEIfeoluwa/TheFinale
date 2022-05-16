from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager


class CustomAccountManager(BaseUserManager):

    def create_superuser(self, email, username, first_name, password, **other_fields):
   
        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)       

        if other_fields.get('is_staff') is not True:
            raise ValueError(
                'Superuser must be assigned to is_staff=True.')
        if other_fields.get('is_superuser') is not True:
            raise ValueError(
                'Superuser must be assigned to is_superuser=True.')

    def create_user(self, email, username, first_name, password, **other_fields):

        if not email:
            raise ValueError('You must provide an email address')
        
        email = self.normalize_email(email)
        user = self.model(email=email, username=username,
                           first_name=first_name, **other_fields)
        user.set_password(password)
        user.save()
        return user


# Create your models here.
class User(AbstractBaseUser, PermissionsMixin):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    username = models.CharField(max_length=100, unique=True)
    email = models.EmailField(('email address'), unique=True)
    address = models.CharField(max_length=100)
    photo_url = models.TextField()
    start_date = models.DateTimeField(default=timezone.now)

    objects = CustomAccountManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email', 'first_name']

    def __str__(self):
        return self.username

class Company(models.Model):
    name = models.CharField(max_length=100, default='Not Specified')
    field = models.CharField(max_length=100, default='Not specified')
    logo = models.CharField(max_length=200, null=True)

    def __str__(self):
        return self.name


class Device(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='devices')
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='devices', default='Not a partner company')
    name = models.CharField(max_length=100, default='None')
    label = models.CharField(max_length=100, default='None')
    features = models.TextField(max_length=200, default='None')
    description = models.CharField(max_length=200, default='None')
    company = models.CharField(max_length=100, default='None')
    location = models.CharField(max_length=100, default='None')

    def __str__(self):
        return self.name
