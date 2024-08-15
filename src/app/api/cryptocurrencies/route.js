const prices = [
  {
    name: "Bitcoin",
    price: "$60,695.70",
    marketCap: "$1,150,000,000,000",
  },
  {
    name: "Ethereum",
    price: "$2,700.98",
    marketCap: "$320,000,000,000",
  },
  {
    name: "Tether",
    price: "$1.00",
    marketCap: "$110,000,000,000",
  },
  {
    name: "BNB",
    price: "$576.31",
    marketCap: "$85,000,000,000",
  },
  {
    name: "Solana",
    price: "$141.48",
    marketCap: "$63,000,000,000",
  },
  {
    name: "USD Coin",
    price: "$1.00",
    marketCap: "$33,000,000,000",
  },
  {
    name: "Ripple",
    price: "$0.5256",
    marketCap: "$29,000,000,000",
  },
  {
    name: "Dogecoin",
    price: "$0.1385",
    marketCap: "$20,000,000,000",
  },
  {
    name: "Toncoin",
    price: "$5.49",
    marketCap: "$19,000,000,000",
  },
  {
    name: "Cardano",
    price: "$0.4651",
    marketCap: "$17,000,000,000",
  },
  {
    name: "Shiba Inu",
    price: "$0.00002391",
    marketCap: "$14,000,000,000",
  },
  {
    name: "Avalanche",
    price: "$35.02",
    marketCap: "$13,000,000,000",
  },
  {
    name: "Polkadot",
    price: "$8.00",
    marketCap: "$9,000,000,000",
  },
  {
    name: "Chainlink",
    price: "$25.00",
    marketCap: "$11,000,000,000",
  },
  {
    name: "Litecoin",
    price: "$180.00",
    marketCap: "$12,000,000,000",
  },
  {
    name: "Stellar",
    price: "$0.10",
    marketCap: "$2,000,000,000",
  },
  {
    name: "Uniswap",
    price: "$15.00",
    marketCap: "$10,000,000,000",
  },
  {
    name: "Cosmos",
    price: "$30.00",
    marketCap: "$8,000,000,000",
  },
  {
    name: "Algorand",
    price: "$0.80",
    marketCap: "$5,000,000,000",
  },
  {
    name: "VeChain",
    price: "$0.10",
    marketCap: "$6,000,000,000",
  },
  {
    name: "Aave",
    price: "$200.00",
    marketCap: "$2,500,000,000",
  },
  {
    name: "Filecoin",
    price: "$4.00",
    marketCap: "$3,000,000,000",
  },
  {
    name: "Maker",
    price: "$2,655.72",
    marketCap: "$2,470,000,000",
  },
  {
    name: "Fantom",
    price: "$0.40",
    marketCap: "$1,000,000,000",
  },
  {
    name: "Terra",
    price: "$0.50",
    marketCap: "$1,200,000,000",
  },
  {
    name: "Hedera",
    price: "$0.25",
    marketCap: "$1,500,000,000",
  },
  {
    name: "Decentraland",
    price: "$0.70",
    marketCap: "$1,800,000,000",
  },
  {
    name: "The Sandbox",
    price: "$0.30",
    marketCap: "$1,000,000,000",
  },
  {
    name: "Zilliqa",
    price: "$0.10",
    marketCap: "$1,000,000,000",
  },
  {
    name: "Enjin Coin",
    price: "$1.00",
    marketCap: "$1,200,000,000",
  },
];

export async function GET(request) {
  // Extract the page parameter from the URL query string
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page")) || 1; // Default to page 1 if not provided

  const tokensPerPage = 10; // Number of tokens per page
  const startIndex = (page - 1) * tokensPerPage; // Calculate the starting index
  const endIndex = startIndex + tokensPerPage; // Calculate the ending index

  const slicedPrices = prices.slice(startIndex, endIndex); // Get the tokens for the current page
  const hasMore = endIndex < prices.length; // Determine if there are more tokens

  return new Response(JSON.stringify({ hasMore, coins: slicedPrices }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
