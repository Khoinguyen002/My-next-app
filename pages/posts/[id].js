import React, { useState } from "react";
import { getPostsId, getPostsById } from "../../lib/post";
import Layout from "../../components/Layout";
import { Card, Carousel, Spinner } from "react-bootstrap";
import { useRouter } from "next/router";
import style from "./post.module.scss";
import fsPromises from "fs/promises";
import path from "path";

const Post = ({ post, objectData }) => {
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
          <div
            dangerouslySetInnerHTML={{
              __html: `<strong>${objectData.name}</strong>`,
            }}
          ></div>
        </Card.Body>
      </Card>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="/vercel.svg" alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/vercel.svg" alt="First slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
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

export const getStaticProps = async (context) => {
  const { params } = context;
  console.log(context);
  const post = await getPostsById(params.id);
  const filePath = path.join(process.cwd(), "/data/book.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: {
      post,
      objectData,
    },
  };
};

export default Post;
