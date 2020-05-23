from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.


def helloWorld(request):
    context = {
        'object_list': 'quest',
    }
    return render(request, 'lastpass_api/index.html', context)


class IntroApiView(APIView):
    def get(self, request, format=None):
        an_apiview = [
            'Here we will create different intakes of the passwords',
            'We will also intake the type of cryptographic method the user wants to apply on the password',
            'is similar to a traditional django view',
            'Gives you the most control over your applciation logic'
        ]
        return Response({'message': 'hello!', 'an_apiview': an_apiview})
