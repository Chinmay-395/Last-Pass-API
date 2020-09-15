import base64
import os
from cryptography.fernet import Fernet
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
from cryptography.hazmat.backends import default_backend
backend = default_backend()


def EncryptFunc(password, text):
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
    encrypted_text = f.encrypt(bytes(text, "utf8"))
    print("THE TOKEN ", encrypted_text)
    return {"key": key, "token": encrypted_text}


def DecryptFunc(token, key):
    f = Fernet(key)
    print("THE DECRYPTED DATA ", f.decrypt(token))
    return f.decrypt(token)


def main():
    text_value = input("Enter the text you want to encrypt \t ")
    password_value = input("Enter the password \t ")
    encrypted_dict = EncryptFunc(password_value, text_value)
    print("___________", encrypted_dict)
    print("The token \n", encrypted_dict["token"])
    decrypted_text = DecryptFunc(
        encrypted_dict["token"], encrypted_dict["key"])
    print("________", decrypted_text.decode("utf8"))


if __name__ == "__main__":
    main()
