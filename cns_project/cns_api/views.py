from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from cns_api import serializers
# Create your views here.


""" THE FOLLOWING CODE IS FOR SIMPLE ENCRYPT DECRYPT API """


class SimpleApiEncryptDecrypt(APIView):
    serializer_class = serializers.SimpleEncyptDecryptSerializer

    def get(self, request, format=None):
        an_apiview = [
            "This is a simple ENCRYPT DECRYPT API",
            "Symmetric Key takes 2 inputs plaintext and a 'secret-key'",
            "Asymmetric key takes 3 inputs plaintext, 'public-key' & 'private-key'",
            "hash function cryptography takes on one input ie plaintext"
        ]
        return Response({'message': 'hello!', 'an_apiview': an_apiview})

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            text = serializer.validated_data.get('text')
            task_name = serializer.validated_data.get(
                'encrypt_or_decrypt')
            method_name = serializer.validated_data.get(
                'method_choose')
            key_value = serializer.validated_data.get(
                'key')

            return Response({'message': 'message is informal'})
        else:
            return Response(serializer.errors,
                            status=status.HTTP_400_BAD_REQUEST)
