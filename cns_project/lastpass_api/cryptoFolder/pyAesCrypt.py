import pyAesCrypt
import io

bufferSize = 64 * 1024
password = "foopassword"

# binary data to be encrypted
pbdata = b"This is binary plaintext \x00\x01"

# input plaintext binary stream
fIn = io.BytesIO(pbdata)

# initialize ciphertext binary stream
fCiph = io.BytesIO()

# initialize decrypted binary stream
fDec = io.BytesIO()

# encrypt stream
pyAesCrypt.encryptStream(fIn, fCiph, password, bufferSize)

# print encrypted data
print("This is the ciphertext:\n" + str(fCiph.getvalue()))

# get ciphertext length
ctlen = len(fCiph.getvalue())

# go back to the start of the ciphertext stream
fCiph.seek(0)

# decrypt stream
pyAesCrypt.decryptStream(fCiph, fDec, password, bufferSize, ctlen)

# print decrypted data
print("Decrypted data:\n" + str(fDec.getvalue()))
