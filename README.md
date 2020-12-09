# Team IdeaaVailla - Ohjelmistoprojekti 2
[![Website](https://img.shields.io/badge/-spring-brightgreen)](https://spring.io/)
[![Website](https://img.shields.io/badge/-bluetooth-blue)](https://www.bluetooth.com/)

## Table of contents

- [Team IdeaaVailla](#team-ideaavailla)
  - [Table of contents](#table-of-contents)
  - [Dependencies](#dependencies)
  	- [Python dependencies](#python-dependencies)
  	- [Node dependencies](#node-dependencies)

## Dependencies

## About the Project

The main motive for this project was to create a solution to fulfill the need to keep track of people located in different areas in Helsinki. We got this idea from an outside source which was a sort of partner during this Ohjelmistoprojekti 2 -course. They presented us a few ideas and thoughts and among them was a thought of keeping track of the traveller flows in Helsinki. This need of getting data about people present in different locations seemed to be a good fit for this course and that's why we ended up sticking with it. 

We bounced around a couple of ideas on how to build the solution. Eventually we decided to go with Bluetooth technology because it seemed to be the best way to get data on how many people approximately are in some specific location. 

![](bt-scanner-app/images/Map.png)
&nbsp;&nbsp;&nbsp;&nbsp;
![](bt-scanner-app/images/Location_card.png)
&nbsp;&nbsp;&nbsp;&nbsp;
![](bt-scanner-app/images/List.png)

Tähän vielä jottain


## Built With

* Python
* Spring Boot
* React Native

## Getting Started
  

### Prerequisites

Fornt end/Mobile app

* npm
  ```bash
  npm install -g npm@latest
  ```
* expo
  ```bash
  npm install -g expo-cli
  ```
* node.js
  ```bash
  ```
  
  bäkki???

### Installation

1. Clone the repo
  ```bash
  git clone https://github.com/lennikorhonen/OhjelmistoProjekti2.git
  ```

2. Navigate to bt-scanner-app directory
  ```bash
  cd Ohjelmistoprojekti2/bt-scanner-app/
  ```

3. Install packages
  ```bash
  npm install
  ```
  
4. Start fake REST API
  ```bash
  npm run server
  ```

5. In another terminal, with Android emulator up and running, start Metro Bundler
  ```bash
  npm run android
  ```

### Python dependencies

    sudo apt install python-dev
    sudo apt install libbluetooth-dev
    pip3 install pybluez
    pip3 install schedule
    pip3 install ipinfo
    

### Node dependencies

## Usage
### Backend endpoints
```
raspberrybackend.herokuapp.com/raspberrylist
```
```
raspberrybackend.herokuapp.com/api
raspberrybackend.herokuapp.com/api/raspberries
raspberrybackend.herokuapp.com/api/timestamps
raspberrybackend.herokuapp.com/api/results
```
## Roadmap

## Contributing
* [@JoonasKulmala](https://github.com/JoonasKulmala)
* [@OttoKorhonen](https://github.com/OttoKorhonen)
* [@LenniKorhonen](https://github.com/lennikorhonen)
* [@AnnikaHaapalahti](https://github.com/rusinainen)
* [@RoopeLaakso](https://github.com/Rohelaa)
## Acknowledgements

## Licenses

Distributed under the [MIT](https://choosealicense.com/licenses/mit/) license.
