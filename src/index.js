import React from 'react';
import ReactDOM from 'react-dom/client';
import {CoinPrice} from "./price";

const RenderCoinPage = () => {
    return(
        <React.StrictMode>
            <CoinPrice coinSymbol="ETHUSDT" />

            <CoinPrice coinSymbol="BTCUSDT" />

            <CoinPrice coinSymbol="LUNAUSDT" />

            <CoinPrice />

            <CoinPrice coinSymbol/>
        </React.StrictMode>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RenderCoinPage />);


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