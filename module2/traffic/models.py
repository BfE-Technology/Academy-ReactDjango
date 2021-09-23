from django.db import models

# Create your models here.
class TrafficLight(models.Model):
    location = models.CharField(max_length=200)
    top_light_color = models.CharField(max_length=200)
    middle_light_color = models.CharField(max_length=200)
    bottom_light_color = models.CharField(max_length=200)
    top_light_duration = models.IntegerField(default=3)
    middle_light_duration = models.IntegerField(default=3)
    bottom_light_duration = models.IntegerField(default=3)
    container_color = models.CharField(max_length=200)