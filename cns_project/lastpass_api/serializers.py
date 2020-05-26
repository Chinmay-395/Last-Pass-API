from rest_framework import serializers
from lastpass_api import models


class SimpleEncyptDecryptSerializer(serializers.Serializer):
    """ This is simply for enryption and decryption of text
        without storing the data inside the DB  
    """
    ''' `text` [variable]: It could be plaintext or ciphertext '''
    text = serializers.CharField(max_length=225)
    ''' `encrypt_or_decrypt` [variable]: choose what exactly to do '''
    TASK_CHOICE = (
        ("ENCRYPTION", "ENCRYPTION"),
        ("DECRYPTION", "DECRYPTION"),
    )
    encrypt_or_decrypt = serializers.ChoiceField(choices=TASK_CHOICE)
    METHOD_CHOICE = (
        ('AES Cryptography', 'AES Cryptography'),
        ('RSA Cipher', 'RSA Cipher'),
        ('Rail Fence', 'Rail Fence'),
    )
    method_choose = serializers.ChoiceField(choices=METHOD_CHOICE)


class UserCryptSerializer(serializers.ModelSerializer):
    """ This is for LastPass API 
    """
    class Meta:
        model = models.PasswordConverter
        fields = '__all__'  # ('ogUser', 'individualPassword')
        # extra_kwargs = {
        #     'individualPassword': {
        #         'write_only': True,
        #         'style': {'input_type': 'password'}
        #     }
        # }
