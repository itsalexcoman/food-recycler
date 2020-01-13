import sys
import json

ip = sys.argv[1]
print('REACT_APP_BASEURL="http://' + ip + ':8080"')
print('REACT_APP_API_BASEURL="http://' + ip + ':3001/api"')