from rest_framework import serializers
from lastpass_api import models

# """ temporary quick fix for the get and post view
# """


# class CommentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = models.LP_DummyData
#         fields = '__all__'


class LastPassSerializer(serializers.ModelSerializer):
    """ This is for LastPass API 
    """
    class Meta:
        model = models.LastPassUserData
        fields = ('id', 'ogUser', 'name_of_website', 'url_of_website',
                  'username_for_website', 'password_for_website',
                  'notes')
        extra_kwargs = {'ogUser': {'read_only': True}}
