import React from "react";
import { getPostsId, getPostsById } from "../../lib/post";
import Layout from "../../components/Layout";
import { Card, Spinner } from "react-bootstrap";
import { useRouter } from "next/router";
import style from "./post.module.scss";

const Post = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Spinner animation="grow" role={"banner"}></Spinner>;
  }
  return (
    <Layout>
      <Card key={post?.id}>
        <Card.Body>
          <Card.Title className={style["card-title"]}>{post?.title}</Card.Title>
          <Card.Text>{post?.body}</Card.Text>
        </Card.Body>
      </Card>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const paths = await getPostsId(5);
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPostsById(params.id);
  return {
    props: {
      post,
    },
  };
};

export default Post;
