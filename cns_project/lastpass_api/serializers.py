from rest_framework import serializers
from lastpass_api import models
from profiles_api.models import UserProfile
# from rest_framework.serializers import (ModelSerializer, SerializerMethodField)
from .aes_method import DecryptFunc


class LastPassSerializer(serializers.ModelSerializer):
    """ This is how you create nested serializers """
    username = serializers.SerializerMethodField()
    # password_for_website = serializers.SerializerMethodField()
    password = serializers.SerializerMethodField()
    """ This is for LastPass API 
    """
    class Meta:
        model = models.LastPassUserData
        fields = [
            'id',
            'ogUser',
            'name_of_website',
            'url_of_website',
            'username_for_website',
            'password_for_website',
            'notes',
            'username',
            'password',
        ]
        extra_kwargs = {'ogUser': {'read_only': True}, }

    def get_username(self, obj):
        # print(">>>>>>>>>>>>Hello", str(obj.ogUser))
        return str(obj.ogUser)

    def get_password(self, obj):
        password = obj.password_for_website
        # print("THE Password ++++++++++++++++++++++++ \n", password)
        # decrypted_pass = DecryptFunc(password)
        return str(password)
