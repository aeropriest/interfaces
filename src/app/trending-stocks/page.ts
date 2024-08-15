// This function should access the APIs for stock symbols, use these symbols
// to query the price [price, 52-week-high, 52-week-low]
// to query the market cap

// return the array of objects with [name, symbol, price, 52-week-high, 52-week-low, market-cap]
// returned array should sorted on market cap


import React from 'react'

const SYMBOLS_API_BASE_URL = '/api/stocks/symbols';
const MARKET_CAPS_API_BASE_URL = '/api/stocks/caps';
const PRICES_API_BASE_URL = '/api/stocks/price';

export default function TrendingStocks() {
  return (
    <div>
      <p>SHOW PRICES</p>
    </div>
  )
}
