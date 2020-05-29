from rest_framework import serializers
from lastpass_api import models


class LastPassSerializer(serializers.ModelSerializer):
    """ This is for LastPass API 
    """
    class Meta:
        model = models.LastPassUserData
        fields = ('id', 'ogUser', 'name_of_website', 'url_of_website',
                  'username_for_website', 'password_for_website',
                  'notes')
        extra_kwargs = {'ogUser': {'read_only': True}}
