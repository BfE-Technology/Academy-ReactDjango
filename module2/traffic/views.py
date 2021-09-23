from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.core import serializers

from .models import TrafficLight

def index(request):
    latest_traffic_light_list = TrafficLight.objects.all()
    output = serializers.serialize('json', latest_traffic_light_list)
    return HttpResponse(output, content_type='application/json')
    

def detail(request, traffic_light_id):
    return HttpResponse("You're looking at traffic light %s." % traffic_light_id)