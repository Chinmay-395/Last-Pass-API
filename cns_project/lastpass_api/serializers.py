from rest_framework import serializers


class TestingCryptSerializer(serializers.Serializer):
    """ checks and convert the input from users """
    plainText = serializers.CharField(max_length=255)
