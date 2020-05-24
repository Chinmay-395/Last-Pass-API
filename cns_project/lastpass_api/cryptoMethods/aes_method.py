""" 
    Here AES encryption and decryption happens wherein 'buffersize' and 'password' 
    are static inputs in the scripts

"""

import pyAesCrypt
import io
#import inputScript
bufferSize = 64 * 1024
password = "foopassword"

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
    pyAesCrypt.encryptStream(fIn, fCiph, password, bufferSize)
    # print encrypted data
    #print("This is the ciphertext:\n" + str(fCiph.getvalue()))
    return str(fCiph.getvalue())


# calling the encryption function do this inside tkinter button
# EncryptFunc(entry)


def DecryptFunc():
    # get ciphertext length
    ctlen = len(fCiph.getvalue())
    print(ctlen)
    # go back to the start of the ciphertext stream
    fCiph.seek(0)

    # decrypt stream
    pyAesCrypt.decryptStream(fCiph, fDec, password, bufferSize, ctlen)

    # print decrypted data
    output = ("Decrypted data:\n" + str(fDec.getvalue(), 'utf-8'))
    print(output)
    return output


# calling DecryptFunc
# DecryptFunc()
