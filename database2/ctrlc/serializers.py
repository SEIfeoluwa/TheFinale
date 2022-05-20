from rest_framework import serializers
from .models import User, Device, Company

class UserSerializer(serializers.HyperlinkedModelSerializer):
    devices = serializers.HyperlinkedRelatedField(
        view_name='device_details',
        many=True,
        read_only=True
    )

    class Meta:
        model = User
        fields = ('id', 'start_date', 'photo_url', 'address', 'email', 'user_name', 'last_name', 'first_name', 'devices')

class DeviceSerializer(serializers.HyperlinkedModelSerializer):
    user = serializers.HyperlinkedRelatedField(
        view_name='user_detail',
        read_only=True
    )

    class Meta:
        model = Device
        fields = ('id', 'user', 'company', 'name', 'label', 'features', 'description', 'company', 'location',)

class CompanySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Company
        fields = ('id', 'name', 'field', 'logo')