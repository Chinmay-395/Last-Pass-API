from rest_framework import serializers


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
    CRYPTOGRAPHIC_TYPE = (
        ("SYMMETRIC KEY", "SYMMETRIC KEY"),
        ("ASYMMETRIC KEY", "ASYMMETRIC KEY"),
        ("HASH FUNCTION", "HASH FUNCTION"),
    )
    crypt_type = serializers.ChoiceField(choices=CRYPTOGRAPHIC_TYPE)
    METHOD_CHOICE = (
        ('AES Cryptography', 'AES Cryptography'),
        #('RSA Cipher', 'RSA Cipher'),
        ('Rail Fence', 'Rail Fence'),
        ('Hill Cipher', 'Hill Cipher'),
        ('Rail Fence', 'Rail fence'),
        ('caesar Cipher', 'Ceasar Cipher'),
        ('Column Transpose Cipher', 'Column Transpose Cipher'),
    )
    method_choose = serializers.ChoiceField(choices=METHOD_CHOICE)
    key = serializers.IntegerField()
