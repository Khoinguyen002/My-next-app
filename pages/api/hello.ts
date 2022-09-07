// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  type obj = {
    first: number | undefined | null,
    2?: number | undefined
  }
  const myObj: obj = {first: 3};
  const myObj2: obj = {first: 3, 2: 3};
  const getFirst = (price: number, token = null) : void => {
    token = "a";
    console.log(token);
    
  }
  const obbj: [string, string, any] = ["string", "string", 0]
  

  console.log(obbj[0]);
  res.status(200).json({ name: "John Doe" });
}
