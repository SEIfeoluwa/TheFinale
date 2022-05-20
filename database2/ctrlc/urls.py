from django.urls import path
from . import views

urlpatterns = [
    path('', views.user_list, name='user_list'),
    path('device/', views.device_list, name='device_list'),
    path('company/', views.company_list, name='company_list'),
    path('users/<int:pk>', views.user_detail, name='user_detail'),
    path('', views.device_detail, name='device_detail'),
    path('', views.company_detail, name=''),
    path('', views.device_create, )
]