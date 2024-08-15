const symbols = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corporation",
  },
  {
    symbol: "AMZN",
    name: "Amazon.com, Inc.",
  },
  {
    symbol: "GOOG",
    name: "Alphabet Inc. Class C",
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc. Class A",
  },
  {
    symbol: "BRK.B",
    name: "Berkshire Hathaway Inc. Class B",
  },
  {
    symbol: "UNH",
    name: "UnitedHealth Group Incorporated",
  },
  {
    symbol: "JNJ",
    name: "Johnson & Johnson",
  },
  {
    symbol: "JPM",
    name: "JPMorgan Chase & Co.",
  },
  {
    symbol: "V",
    name: "Visa Inc. Class A",
  },
  {
    symbol: "PG",
    name: "Procter & Gamble Company",
  },
  {
    symbol: "MA",
    name: "Mastercard Incorporated Class A",
  },
  {
    symbol: "HD",
    name: "Home Depot, Inc.",
  },
  {
    symbol: "DIS",
    name: "Walt Disney Company",
  },
  {
    symbol: "NVDA",
    name: "NVIDIA Corporation",
  },
  {
    symbol: "PFE",
    name: "Pfizer Inc.",
  },
  {
    symbol: "VZ",
    name: "Verizon Communications Inc.",
  },
  {
    symbol: "BAC",
    name: "Bank of America Corporation",
  },
  {
    symbol: "CVX",
    name: "Chevron Corporation",
  },
  {
    symbol: "T",
    name: "AT&T Inc.",
  },
  {
    symbol: "KO",
    name: "Coca-Cola Company",
  },
  {
    symbol: "MRK",
    name: "Merck & Co., Inc.",
  },
  {
    symbol: "WMT",
    name: "Walmart Inc.",
  },
  {
    symbol: "ABBV",
    name: "AbbVie Inc.",
  },
  {
    symbol: "XOM",
    name: "Exxon Mobil Corporation",
  },
  {
    symbol: "LLY",
    name: "Eli Lilly and Company",
  },
  {
    symbol: "UNP",
    name: "Union Pacific Corporation",
  },
  {
    symbol: "AVGO",
    name: "Broadcom Inc.",
  },
  {
    symbol: "JNJ",
    name: "Johnson & Johnson",
  },
  {
    symbol: "JPM",
    name: "JPMorgan Chase & Co.",
  },
  {
    symbol: "V",
    name: "Visa Inc. Class A",
  },
  {
    symbol: "PG",
    name: "Procter & Gamble Company",
  },
  {
    symbol: "MA",
    name: "Mastercard Incorporated Class A",
  },
  {
    symbol: "HD",
    name: "Home Depot, Inc.",
  },
  {
    symbol: "DIS",
    name: "Walt Disney Company",
  },
  {
    symbol: "NVDA",
    name: "NVIDIA Corporation",
  },
  {
    symbol: "PFE",
    name: "Pfizer Inc.",
  },
  {
    symbol: "VZ",
    name: "Verizon Communications Inc.",
  },
  {
    symbol: "BAC",
    name: "Bank of America Corporation",
  },
  {
    symbol: "CVX",
    name: "Chevron Corporation",
  },
  {
    symbol: "T",
    name: "AT&T Inc.",
  },
  {
    symbol: "KO",
    name: "Coca-Cola Company",
  },
  {
    symbol: "MRK",
    name: "Merck & Co., Inc.",
  },
  {
    symbol: "WMT",
    name: "Walmart Inc.",
  },
  {
    symbol: "ABBV",
    name: "AbbVie Inc.",
  },
  {
    symbol: "XOM",
    name: "Exxon Mobil Corporation",
  },
  {
    symbol: "LLY",
    name: "Eli Lilly and Company",
  },
  {
    symbol: "UNP",
    name: "Union Pacific Corporation",
  },
  {
    symbol: "AVGO",
    name: "Broadcom Inc.",
  },
];

export async function GET(request) {
  return new Response(JSON.stringify(symbols), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
