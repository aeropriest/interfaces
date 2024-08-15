import Moralis from "moralis";

import { NextRequest, NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = request.nextUrl;

  try {
    const contract = searchParams.get("contract");
    console.log(contract);
    if (contract === null) {
      return NextResponse.json(
        { error: "Invalid contract address!!" },
        { status: 400 }
      );
    }
    await Moralis.start({
      apiKey: process.env.MORALIS_API_KEY,
    });

    const response = await Moralis.EvmApi.nft.getContractNFTs({
      chain: "0x1",
      format: "decimal",
      limit: 10,
      address: contract,
    });

    console.log(response.raw);
    return NextResponse.json({ message: response.raw });
  } catch (error) {
    console.error("Error occurred:", error);

    // Return a 400 Bad Request error for missing contract address
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json({ message: `No contract found` });
}
