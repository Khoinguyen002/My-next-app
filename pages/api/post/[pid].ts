import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next/types";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { pid } = req.query;
  const respond = await axios(`https://jsonplaceholder.typicode.com/posts/${pid}`);
  
  res.end(JSON.stringify(respond.data));
}
