from cryptography.fernet import Fernet
import base64
# key = b'zmq_zkAiE5QBXOayMQhbVygo44bwiao9EDPdlhlPfEs='
key = Fernet.generate_key()
"""[This code doesnt work]
# key = base64.b32encode(bytes("the_key", 'utf8'))  # bytes("the_key", 'utf8')
# test_string = "password"
# key = base64.urlsafe_b64encode(bytes(test_string, 'utf-8'))
"""

print("The key", key)
crypter = Fernet(key)
print("The crypter", crypter)
passData = input("Enter a string ")
# password converted to bytes
passData = bytes(passData, 'utf8')
#
pw = crypter.encrypt(passData)

decryptString = crypter.decrypt(pw)

print("The string is password \n", str(pw, 'utf8'))
print("\n")
print("The string is ", str(decryptString, 'utf8'))
# print("If the")
