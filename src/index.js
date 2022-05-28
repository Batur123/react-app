import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import {CoinPrice} from "./price";

const root = ReactDOM.createRoot(document.getElementById('root'));

/*
0 -> Main Menu
1 -> Coin Prices
2 -> Empty Page
 */
const App = ({pageNumberParam}) => {
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {

    },[pageNumberParam]);

    if(pageNumber === 0) {
        return (
          <div id="main-menu">
              <p> Welcome to the example react application.</p> <br />
              <Link to=
              <button type="button">
                  href:
              </button>
          </div>
        );
    }
}


root.render(
    <App />
);

/*
root.render(
  <React.StrictMode>
      <CoinPrice coinSymbol="ETHUSDT" />

      <CoinPrice coinSymbol="BTCUSDT" />

      <CoinPrice coinSymbol="LUNAUSDT" />

      <CoinPrice />
  </React.StrictMode>
);
 */