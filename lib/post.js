import axios from "axios";

export const getPosts = async (limit) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getPostsId = async (limit) => {
  const response = await getPosts(limit);
  return response.map((post) => ({
    params: {
      id: `${post.id}`,
    },
  }));
};

export const getPostsById = async (id) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return response.data;
};
