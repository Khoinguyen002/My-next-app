import axios from "axios";

export const getPosts = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getPostsId = async () => {
  const response = await getPosts();
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
