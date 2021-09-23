from django.urls import path

from . import views

urlpatterns = [
    path('<int:traffic_light_id>/', views.detail, name='detail'),
    path('', views.index, name='index'),
]