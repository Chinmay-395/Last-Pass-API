from rest_framework import serializers
from lastpass_api import models
from profiles_api.models import UserProfile
# from rest_framework.serializers import (ModelSerializer, SerializerMethodField)


class LastPassSerializer(serializers.ModelSerializer):
    # user = SerializerMethodField()
    """ This is for LastPass API 
    """
    class Meta:
        model = models.LastPassUserData
        fields = ('id', 'ogUser', 'name_of_website', 'url_of_website',
                  'username_for_website', 'password_for_website',
                  'notes')
        extra_kwargs = {'ogUser': {'read_only': True}}


class UserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = [
            'name',
            'email',

        ]
