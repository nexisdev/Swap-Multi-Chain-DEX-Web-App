# ExzoSwap-Multi-Chain-DEX-Web-App
ExzoSwap by Exzo Network Multi-Chain Decentralized Exchange (DEX) web application integrating the 1inch API and Moralis.io API. Supported chains includes Ethereum (ETH), Binance Smart Chain (BSC), and Polygon (POLY). Avalanche (AVAX) is in testing still.

If you have any questions join our discord: https://discord.gg/FcU5y8hZ3m

💎 Prerequisits 💎

✅ 1) Install NPM or Yarn on your Windows, Linux, or Mac.
```sh
npm install --global yarn
```

✅ 2) Have a Moralis.io account.

✅ 3) Create a server on Moralis for the following networks Ethereum (Mainnet), Binance Smart Chain (Mainnet), Avalanche (Mainnet), Polygon (Mainnet).

✅ 4) In your Moralis server instance go to "Plugins" and add the 1inch plugin, OnRamper plugin, and the OpenSea plugin to your server instance.


💎 Steps to run the dApp on your local machine 💎

✅ Step 1) Clone or fork `ExzoSwap-Multi-Chain-DEX-Web-App`:

```sh
git clone https://github.com/Exzo-Network/ExzoSwap-Multi-Chain-DEX-Web-App.git
```

✅ Step 2) Install all dependencies:

```sh
cd ExzoSwap-Multi-Chain-DEX-Web-App
yarn install
```

✅ Step 3) Get your server credentials from Moralis.io and replace them in .env.example and rename .env.example to .env:

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

✅ Step 4) Run your App:

```sh
yarn start
```


✅ Step 5) Run a production version of your App:

```sh
yarn build
```


✅ Step 6) Upload the build folder to your github repository or server and then you can host it online such as netlify.com:

```sh
CI= yarn build
```

🚀 Step 7) Go to your local host url to view your dApp at http://localhost:3001/



How to customize the dApp to your own branding:

✅ Chainging the logo: Go to the components file "src/components/" and change the logo.png file to your logo.

✅ Then to resize the logo to ensure it has the right dimensions go to the App.jsx file "src/App.jsx" scroll down to the bottom to lines 361-371 and change the "width" and the "size" on lines 366 and 367.

```sh
export const Logo = () => (
  <div style={{ display: "flex" }}>
    <img
      src={LogoName}
      alt="Exzo Network Logo"
      width="250px"            <---- Change this to whatever width your logo needs.
      size="55px"              <---- Change this to whatever size your logo needs.
      margin-left="50px"
      padding-left="50px"
    />
  </div>
);
```

✅ To change the color of the dApp go to the style.css file located at "src/style.css" and there you can change the background, along with changing the background color in the app.jsx file on line 40 where it says "background: "rgb(12, 14, 27)","

style.css lines 83-90 to change the color of the swapping card background:
```sh
.ant-card-body {
  color: rgb(18, 20, 38) !important;
  padding: 16px 24px !important;
  border: 1px solid rgb(22, 23, 46) !important;
  border-radius: 16px !important;
  box-shadow: rgba(0, 0, 0, 0.5) 10px 10px 20px 0px !important;
  position: relative !important;
}
```

app.jsx:
```sh
const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "#041836",
    marginTop: "130px",
    padding: "10px",
    backgroundImage: "url(${background})",
    background: "rgb(12, 14, 27)",             <----- Change this to change part of the background color of the dApp.
    backgroundSize: "fill",
  },
```


✅ To Add Custom Tokens go to the app.jsx file and scroll down to line find the network of the token you want to add (ETH, BSC, AVAX, POLY) and then add this structure to it below the other ones already added. You can get the logo uri by going on coinmarketcap, coingecko, bscscan, etherscan, or polyscan and going to the token of your choice page and right clicking the logo and selecting copy logo url then paste it where the url of the logoURI is below.

```sh
"0x56501B0B12Ee9518c2991451Bbc8d7F9267949d2": {
   address: "0x56501B0B12Ee9518c2991451Bbc8d7F9267949d2",                <---- Token Smart Contract Address.
   decimals: 9,                                                          <---- Token decimals.
   logoURI: "https://bscscan.com/token/images/exzocoin2_32.png",         <---- Token logo URL.
   name: "ExzoCoin 2.0",                                                 <---- Token Name.
   symbol: "EXZO",                                                       <---- Token Symbol.
   },
```
