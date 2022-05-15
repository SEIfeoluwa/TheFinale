# from rest_framework import serializers 
# from .models import User

# class UserSerializer(serializers.HyperlinkedModelSerializer):
#     devices = serializers.HyperlinkedRelatedField(
#         view_name='device_detail',
#         many=True,
#         read_only=True
#     )
#     class Meta:
#         model = User
#         fields = ('id', 'photo_url', 'address', 'email', 'username', 'last_name', 'first_name')