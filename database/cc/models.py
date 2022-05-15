from django.db import models

# Create your models here.
class User(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    username = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    photo_url = models.TextField()

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
    features = models.CharField(max_length=200, default='None')
    description = models.CharField(max_length=200, default='None')
    company = models.CharField(max_length=100, default='None')
    location = models.CharField(max_length=100, default='None')

    def __str__(self):
        return self.name
