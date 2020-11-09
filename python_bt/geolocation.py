# pip install ipinfo
import ipinfo

# Personal access token from ipinfo.io
access_token = '1a9c774186e4d2'
handler = ipinfo.getHandler(access_token)
ip_address = ''
details = handler.getDetails(ip_address)

# Prints all available details
print(details.all)
