from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from lastpass_api import serializers
from lastpass_api.cryptoMethods.aes_method import EncryptFunc, DecryptFunc
# Create your views here.


def helloWorld(request):
    context = {
        'object_list': 'quest',
    }
    return render(request, 'lastpass_api/index.html', context)


class IntroApiView(APIView):
    serializer_class = serializers.TestingCryptSerializer

    def get(self, request, format=None):
        an_apiview = [
            'Here we will create different intakes of the passwords',
            'We will also intake the type of cryptographic method the user wants to apply on the password',
            'is similar to a traditional django view',
            'Gives you the most control over your applciation logic'
        ]
        return Response({'message': 'hello!', 'an_apiview': an_apiview})

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            name = serializer.validated_data.get('plainText')
            x = EncryptFunc(name)
            #y = DecryptFunc()
            message = f'Hello {name}'
            message2 = f"{x}"
            #message3 = f"{y}"
            return Response({'message': message,
                             'encryption': message2,
                             })
        else:
            return Response(
                serializer.errors,
                status=status.HTTP_400_BAD_REQUEST
            )
