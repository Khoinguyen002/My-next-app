import axios from "axios";

export default async function handler(req, res) {
  const respond = await axios(`https://jsonplaceholder.typicode.com/posts`);
  res.end(JSON.stringify(respond.data));
}
