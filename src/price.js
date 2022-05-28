import React, {useEffect,useState} from 'react';
import axios from 'axios';

const styles = {
    divStyleForPrices: {
        margin: '10px',
        border: "1px solid black",
    },
    spanStyleForPrices: {
        fontSize: "20px"
    }
}

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
        return (
            <div id="error" style={styles.divStyleForPrices}>
                <h3>Cannot load this section.</h3>
            </div>
        );
    }

    if (coinPrice === null) {
        return (
            <div id="error" style={styles.divStyleForPrices}>
                <h3>{coinSymbol} market data is loading.</h3>
            </div>
        );
    }

    return (
        <div id={coinSymbol} style={styles.divStyleForPrices}>
            <h3>Coin Symbol: {coinSymbol}</h3>
            <span style={styles.spanStyleForPrices}>Price Change: </span><span>{coinPrice.priceChange}</span><br/>
            <span style={styles.spanStyleForPrices}>Volume: </span><span>{coinPrice.quoteVolume}</span><br/>
            <span style={styles.spanStyleForPrices}>High Price: </span><span>{coinPrice.highPrice}</span><br/>
            <span style={styles.spanStyleForPrices}>Last Price: </span><span>{coinPrice.lastPrice}</span><br/>
        </div>
    )
}