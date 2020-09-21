import urllib.request
import json

API_endpoint = 'https://raspberrybackend.herokuapp.com/results'

def main():
    fetch_data()

def fetch_data():
    try:
        with urllib.request.urlopen(
            'https://raspberrybackend.herokuapp.com/results'
        )as response:
            responseData = json.loads(response.read().decode())
            print(responseData)
            return responseData['data']
    except:
        print("Oops... fetch error")

def new_data():
    data = {''}




if __name__ == "__main__":
    main()