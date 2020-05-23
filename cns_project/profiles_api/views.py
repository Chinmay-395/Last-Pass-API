from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.


class HelloApiView(APIView):
    def get(self, request, format=None):
        an_apiview = [
            'USes HTTP method as function (get,push,patch,put,delete)',
            'is similar to a traditional django view',
            'Gives you the most control over your applciation logic'
        ]
        return Response({'message': 'hello!', 'an_apiview': an_apiview})
