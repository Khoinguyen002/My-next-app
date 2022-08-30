import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next/types";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;
  const respond = await axios(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  
  res.end(JSON.stringify(respond.data));
}
