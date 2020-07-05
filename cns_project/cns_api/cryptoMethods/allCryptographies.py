from railFence import called_RF_InfromDjango
# from coltranscipher import
from aes_method import EncryptFunc, DecryptFunc

# task_name = encrypt || decrypt
#method_name = cipher-method
# value of the key = Key


def pickingCipher(text, task_name, method_name, key_value):
    # cipherDict = {
    #     'AES Cryptography': 'AES Cryptography',
    #     'Hill Cipher': 'Hill Cipher',
    #     'Rail Fence': 'Rail fence',
    #     'caesar Cipher': 'Ceasar Cipher',
    #     'Column Transpose Cipher': 'Column Transpose Cipher',
    # }
    # cipherList = ['AES Cryptography', 'RSA Cipher',
    #               'Rail Fence', 'caesar Cipher', 'Column Transpose Cipher']
    # for x in cipherList:
    #     if x == method_name:
    #         print("Calling that function")
    if method_name == 'Rail Fence':
        print('Rail Fence')
        return called_RF_InfromDjango(task_name, text, key_value)
    if method_name == 'AES Cryptography':
        print('AES Cryptography')
    if method_name == 'Hill Cipher':
        print('Hill Cipher')
    if method_name == 'caesar Cipher':
        print('caesar Cipher')
    if method_name == 'Column Transpose Cipher':
        print('Column Transpose Cipher')


# pickingCipher('Column Transpose Cipher')
