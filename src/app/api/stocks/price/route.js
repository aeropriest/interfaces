const price = [
  {
    symbol: "AAPL",
    price: 175.0,
    "52_week_high": 182.0,
    "52_week_low": 130.0,
  },
  {
    symbol: "MSFT",
    price: 350.0,
    "52_week_high": 365.0,
    "52_week_low": 280.0,
  },
  {
    symbol: "AMZN",
    price: 145.0,
    "52_week_high": 160.0,
    "52_week_low": 100.0,
  },
  {
    symbol: "GOOG",
    price: 125.0,
    "52_week_high": 135.0,
    "52_week_low": 90.0,
  },
  {
    symbol: "GOOGL",
    price: 130.0,
    "52_week_high": 140.0,
    "52_week_low": 95.0,
  },
  {
    symbol: "BRK.B",
    price: 350.0,
    "52_week_high": 370.0,
    "52_week_low": 300.0,
  },
  {
    symbol: "UNH",
    price: 490.0,
    "52_week_high": 510.0,
    "52_week_low": 400.0,
  },
  {
    symbol: "JNJ",
    price: 160.0,
    "52_week_high": 170.0,
    "52_week_low": 140.0,
  },
  {
    symbol: "JPM",
    price: 145.0,
    "52_week_high": 160.0,
    "52_week_low": 120.0,
  },
  {
    symbol: "V",
    price: 230.0,
    "52_week_high": 240.0,
    "52_week_low": 200.0,
  },
  {
    symbol: "PG",
    price: 150.0,
    "52_week_high": 160.0,
    "52_week_low": 130.0,
  },
  {
    symbol: "MA",
    price: 400.0,
    "52_week_high": 420.0,
    "52_week_low": 350.0,
  },
  {
    symbol: "HD",
    price: 320.0,
    "52_week_high": 340.0,
    "52_week_low": 280.0,
  },
  {
    symbol: "DIS",
    price: 95.0,
    "52_week_high": 110.0,
    "52_week_low": 85.0,
  },
  {
    symbol: "NVDA",
    price: 450.0,
    "52_week_high": 480.0,
    "52_week_low": 300.0,
  },
  {
    symbol: "PFE",
    price: 40.0,
    "52_week_high": 50.0,
    "52_week_low": 35.0,
  },
  {
    symbol: "VZ",
    price: 37.0,
    "52_week_high": 45.0,
    "52_week_low": 32.0,
  },
  {
    symbol: "BAC",
    price: 35.0,
    "52_week_high": 40.0,
    "52_week_low": 30.0,
  },
  {
    symbol: "CVX",
    price: 170.0,
    "52_week_high": 180.0,
    "52_week_low": 140.0,
  },
  {
    symbol: "T",
    price: 15.0,
    "52_week_high": 20.0,
    "52_week_low": 14.0,
  },
  {
    symbol: "KO",
    price: 60.0,
    "52_week_high": 65.0,
    "52_week_low": 55.0,
  },
  {
    symbol: "MRK",
    price: 90.0,
    "52_week_high": 100.0,
    "52_week_low": 80.0,
  },
  {
    symbol: "WMT",
    price: 150.0,
    "52_week_high": 160.0,
    "52_week_low": 140.0,
  },
  {
    symbol: "ABBV",
    price: 150.0,
    "52_week_high": 160.0,
    "52_week_low": 130.0,
  },
  {
    symbol: "XOM",
    price: 110.0,
    "52_week_high": 120.0,
    "52_week_low": 90.0,
  },
  {
    symbol: "LLY",
    price: 500.0,
    "52_week_high": 520.0,
    "52_week_low": 400.0,
  },
  {
    symbol: "UNP",
    price: 230.0,
    "52_week_high": 250.0,
    "52_week_low": 200.0,
  },
  {
    symbol: "AVGO",
    price: 800.0,
    "52_week_high": 850.0,
    "52_week_low": 700.0,
  },
];

export async function GET(request) {
  console.log("Get the prices for stocks");
  // Extract the page parameter from the URL query string
  const url = new URL(request.url);
  const symbols = url.searchParams.get("symbols");

  console.log(symbols);
  const prices = price.filter((stock) => {
    return symbols.includes(stock.symbol);
  });

  console.log(prices);

  return new Response(JSON.stringify(prices), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
