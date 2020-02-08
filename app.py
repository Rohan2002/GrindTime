import pickle
import sys
import numpy as np
noise_level = float(open('noise.txt','r').read())
model = pickle.load(open('finalized_model.sav', 'rb'))
try:
    temp = float(sys.argv[1])
except BaseException as e:
    print("Arg missing: Temperature")
    sys.exit(0)
try:
    humidity = float(sys.argv[2])
except BaseException as e:
    print("Arg missing: Humidity")
    sys.exit(0)

    
try:
    lat = float(sys.argv[3])
except BaseException as e:
    print("Arg missing : Latitude ")
    sys.exit(0)
try:
    lng = float(sys.argv[4])
except BaseException as e:
    print("Arg missing: Longtitude")
if noise_level > 600:
    print(0)
    sys.exit(0)
nh = [temp,humidity,noise_level,lat,lng]
print(model.predict(np.array(nh).reshape(-1, 5))[0])
    