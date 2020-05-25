from rest_framework import serializers
from lastpass_api import models


class UserCryptSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.PasswordConverter
        fields = '__all__'  # ('ogUser', 'individualPassword')
        # extra_kwargs = {
        #     'individualPassword': {
        #         'write_only': True,
        #         'style': {'input_type': 'password'}
        #     }
        # }
