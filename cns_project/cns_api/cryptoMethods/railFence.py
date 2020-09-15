import base64
import os
from cryptography.fernet import Fernet
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
from cryptography.hazmat.backends import default_backend
backend = default_backend()
password = input("Enter your password ")  # b"password"
email = input("Enter your email ")
password = bytes(password, "utf8")
salt = os.urandom(16)
kdf = PBKDF2HMAC(
    algorithm=hashes.SHA256(),
    length=32,
    salt=salt,
    iterations=100000,
    backend=backend
)
key = base64.urlsafe_b64encode(kdf.derive(password))
print("The KEY ", key)
f = Fernet(key)
token = f.encrypt(b"Secret message!")
print("THE TOKEN ", token)

print("THE DECRYPTED DATA ", f.decrypt(token))
# b'Secret message!'
