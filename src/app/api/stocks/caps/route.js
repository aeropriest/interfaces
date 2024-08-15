const marketCap = [
  {
    symbol: "AAPL",
    marketCap: 2500000000000,
  },
  {
    symbol: "MSFT",
    marketCap: 2300000000000,
  },
  {
    symbol: "AMZN",
    marketCap: 1600000000000,
  },
  {
    symbol: "GOOG",
    marketCap: 1500000000000,
  },
  {
    symbol: "GOOGL",
    marketCap: 1500000000000,
  },
  {
    symbol: "BRK.B",
    marketCap: 750000000000,
  },
  {
    symbol: "UNH",
    marketCap: 500000000000,
  },
  {
    symbol: "JNJ",
    marketCap: 450000000000,
  },
  {
    symbol: "JPM",
    marketCap: 400000000000,
  },
  {
    symbol: "V",
    marketCap: 500000000000,
  },
  {
    symbol: "PG",
    marketCap: 350000000000,
  },
  {
    symbol: "MA",
    marketCap: 350000000000,
  },
  {
    symbol: "HD",
    marketCap: 300000000000,
  },
  {
    symbol: "DIS",
    marketCap: 200000000000,
  },
  {
    symbol: "NVDA",
    marketCap: 900000000000,
  },
  {
    symbol: "PFE",
    marketCap: 250000000000,
  },
  {
    symbol: "VZ",
    marketCap: 200000000000,
  },
  {
    symbol: "BAC",
    marketCap: 300000000000,
  },
  {
    symbol: "CVX",
    marketCap: 200000000000,
  },
  {
    symbol: "T",
    marketCap: 150000000000,
  },
  {
    symbol: "KO",
    marketCap: 250000000000,
  },
  {
    symbol: "MRK",
    marketCap: 200000000000,
  },
  {
    symbol: "WMT",
    marketCap: 400000000000,
  },
  {
    symbol: "ABBV",
    marketCap: 200000000000,
  },
  {
    symbol: "XOM",
    marketCap: 400000000000,
  },
  {
    symbol: "LLY",
    marketCap: 300000000000,
  },
  {
    symbol: "UNP",
    marketCap: 200000000000,
  },
  {
    symbol: "AVGO",
    marketCap: 200000000000,
  },
];

export async function GET(request) {
  return new Response(JSON.stringify(marketCap), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
