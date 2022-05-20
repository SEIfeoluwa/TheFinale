from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('users/', views.User_list.as_view(), name='user_list'),
    path('devices/', views.Device_list.as_view(), name='device_list'),
    path('companies/', views.Company_list.as_view(), name='company_list'),
    path('users/<int:pk>', views.User_detail.as_view(), name='user_detail'),
    path('devices/<int:pk>', views.Device_detail.as_view(), name='device_detail'),
    path('companys/<int:pk>', views.Company_detail.as_view(), name='company_detail'),

    path('', views.user_list, name='user_list'),
    path('device/', views.device_list, name='device_list'),
    path('company/', views.company_list, name='company_list'),
    path('users/<int:pk>', views.user_detail, name='user_detail'),
    path('device/<int:pk>', views.device_detail, name='device_detail'),
    path('company/<int:pk>', views.company_detail, name='company_detail'),
    path('device/add', views.device_create, name='device_create'),
    path('device/<int:pk>/edit', views.device_edit, name='device_edit'),
    path('user/<int:pk>/delete', views.user_delete, name='user_delete'),
    path('device/<int:pk>/delete', views.device_delete, name='device_delete')
]