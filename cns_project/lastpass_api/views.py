from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from lastpass_api import serializers
from lastpass_api.cryptoMethods.aes_method import EncryptFunc, DecryptFunc


def helloWorld(request):
    context = {
        'object_list': 'quest',
    }
    return render(request, 'lastpass_api/index.html', context)


class IntroApiView(APIView):
    serializer_class = serializers.UserCryptSerializer

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
            serializer.save()
            ''' I am using a different serializer class
                Thereby it will give error to run these 
                following instructions
            '''
            text = serializer.validated_data.get('plainText')
            cryptoAction = serializer.validated_data.get('category')
            #username = serializer.validated_data.get('ogUser')
            print(serializer.validated_data.get("ogUser"))
            createdNewPassword = serializer.validated_data.get(
                'individualPassword')
            x = EncryptFunc(text)
            #y = DecryptFunc()
            #name = 'default'
            message = f'Hello {text}'
            message2 = f"{x}"
            message3 = f"{cryptoAction}"
            return Response({'plainText': message,
                             'encrypted Text': message2,
                             'cryptographic method': message3,
                             # 'user is': username,
                             'New password': createdNewPassword,
                             })
        else:
            return Response(
                serializer.errors,
                status=status.HTTP_400_BAD_REQUEST
            )

    def put(self, request, pk=None):
        return Response({'method': 'put'})

    def patch(self, request, pk=None):
        return Response({'method': 'PATCH'})

    def delete(self, request, pk=None):
        return Response({'method': 'DELETE'})
