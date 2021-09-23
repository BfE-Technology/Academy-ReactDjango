from django.contrib import admin

# Register your models here.

from .models import TrafficLight

admin.site.register(TrafficLight)