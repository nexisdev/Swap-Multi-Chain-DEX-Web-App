# ExzoSwap-Multi-Chain-DEX-Web-App
ExzoSwap by Exzo Network Multi-Chain Decentralized Exchange (DEX) web application integrating the 1inch API and Moralis.io API. Supported chains includes Ethereum (ETH), Binance Smart Chain (BSC), and Polygon (POLY). Avalanche (AVAX) is in testing still.

Step 1) Clone or fork `ExzoSwap-Multi-Chain-DEX-Web-App`:

```sh
git clone https://github.com/Exzo-Network/ExzoSwap-Multi-Chain-DEX-Web-App.git
```

Step 2) Install all dependencies:

```sh
cd ExzoSwap-Multi-Chain-DEX-Web-App
yarn install
```

Step 3) Get your server credentials from Moralis.io and replace them in .env.example and rename .env.example to .env:

```sh
# Mandatory info for starting the app

REACT_APP_MORALIS_APPLICATION_ID = xxxxxxxxxxxxxxxxxxxxxxxxxx
REACT_APP_MORALIS_SERVER_URL = https://xxxxx.usemoralis.com:2053/server

# Optional info for connecting your localChain and Moralis Database

moralisApiKey = xxxxxxxxxxx
moralisApiSecret = xxxxxxxxxxxxxxxx
frpcPath = F:\frpc\frpc.exe
chain = ganache
moralisSubdomain = xxxxxxxxxx.usemoralis.com
abiPath = "F:\ethereum-boilerplate\Truffle\build\contracts\Contract.json"
```

Step 4) Run your App:

```sh
yarn start
```


Step 5) Run a production version of your App:

```sh
yarn build
```


Step 6) Upload the build folder to your github repository or server and then you can host it online such as netlify.com:

```sh
CI= yarn build
```
