import React from 'react';
import ReactDOM from 'react-dom/client';
import {CoinPrice} from "./price";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <CoinPrice coinSymbol="ETHUSDT" />

      <CoinPrice coinSymbol="BTCUSDT" />

      <CoinPrice coinSymbol="LUNAUSDT" />

      <CoinPrice />
  </React.StrictMode>
);
