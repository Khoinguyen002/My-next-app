import React from "react";
import { getPostsId, getPostsById } from "../../lib/post";
import Layout from "../../components/Layout";
import { Card } from "react-bootstrap";

const Post = ({ post }) => {
  return (
    <Layout>
      <Card key={post.id}>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
        </Card.Body>
      </Card>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const paths = await getPostsId();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPostsById(params.id);
  console.log(post);
  return {
    props: {
      post,
    },
  };
};

export default Post;
