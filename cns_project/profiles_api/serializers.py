from rest_framework import serializers

class HelloSerializer(serializers.Serializer):
    """ checks and convert the input from users """
    name = serializers.CharField(max_length=10)
    