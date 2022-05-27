import React, {useEffect,useState} from 'react';
import axios from 'axios';

export const CoinPrice = ({coinSymbol}) => {
    const [coinPrice, setCoinPrice] = useState(null);

    useEffect(() => {
        if (coinSymbol === undefined || typeof coinSymbol === 'boolean') {
            return;
        }

        setInterval(() => {
            axios.get(`https://api.binance.com/api/v3/ticker/24hr?symbol=${coinSymbol}`).then((res) => {
                setCoinPrice(res.data);
            }).catch(() => {
                setCoinPrice(null);
            })
        }, 1000);
    }, [coinSymbol]);

    if (typeof coinSymbol === "boolean" || coinSymbol === undefined) {
        return <h3>Cannot load this section..</h3>;
    }

    if (coinPrice === null) {
        return <h3>{coinSymbol} market data is loading.</h3>;
    }

    return (
        <div>
            <p>Symbol: {coinPrice.symbol}</p>
            <p>Price Change: {coinPrice.priceChange}</p>
            <p>Volume: {coinPrice.quoteVolume}</p>
            <p>High Price: {coinPrice.highPrice}</p>
            <p>Last Price: {coinPrice.lastPrice}</p>
        </div>
    )
}
