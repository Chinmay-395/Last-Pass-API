""" 
    Here AES encryption and decryption happens wherein 'buffersize' and 'password' 
    are static inputs in the scripts

"""

# import pyAesCrypt
from pyAesCrypt import encryptStream, decryptStream
import io
#import inputScript
bufferSize = 64 * 1024
password = "foopassword"
# entry = input("Enter your value: ")
# print(inputScript.c)
# entry = inputScript.c  # input("The text:\t")

global fCiph, fDec
# initialize ciphertext binary stream
fCiph = io.BytesIO()

# initialize decrypted binary stream
fDec = io.BytesIO()

# encrypt stream


def EncryptFunc(entry):
    # convert the string into a byte stream
    pbdata = bytes(entry, encoding='utf-8')
    fIn = io.BytesIO(pbdata)
    encryptStream(fIn, fCiph, password, bufferSize)
    # print encrypted data
    print("This is the ciphertext:\n" + str(fCiph.getvalue()))
    return fCiph.getvalue()


# calling the encryption function do this inside tkinter button
# EncryptFunc(entry)


def DecryptFunc(input):
    # get ciphertext length
    ctlen = len(input)  # len(fCiph.getvalue())
    print(ctlen)
    # go back to the start of the ciphertext stream
    fCiph.seek(0)

    # decrypt stream
    decryptStream(fCiph, fDec, password, bufferSize, ctlen)

    # print decrypted data
    # output = ("Decrypted data:\n" + str(fDec.getvalue(), 'utf-8'))
    # print(output)
    output = ("Decrypted data:\n" + str(fDec.getvalue(), 'utf-8'))

    return output


# calling DecryptFunc
# DecryptFunc()

def main():
    entry = input("Enter your value: ")
    encrypted_text = EncryptFunc(entry)
    print("___________", encrypted_text)
    decrypted_text = DecryptFunc(encrypted_text)
    print("________", str(decrypted_text))


if __name__ == "__main__":
    main()
