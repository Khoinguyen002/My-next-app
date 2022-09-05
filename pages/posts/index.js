import Link from "next/link";
import { Card, Carousel } from "react-bootstrap";
import Layout from "../../components/Layout";
import { getPosts } from "../../lib/post";
import { useRouter } from "next/router";

const Posts = ({ posts }) => {
  const router = useRouter();
  console.log(router.query);
  return (
    <Layout>
      {posts.map((post) => (
        <Card key={post.id} className="my-3 shadow">
          <Card.Body>
            <Card.Title>
              {post.id} --- {post.title}
            </Card.Title>
            <Card.Text>{post.body}</Card.Text>
            <Link href={`/posts/${post.id}`}>
              <Card.Link>See More</Card.Link>
            </Link>
          </Card.Body>
        </Card>
      ))}
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="/vercel.svg" alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const posts = await getPosts(10);
  return {
    props: {
      posts,
    },
  };
};

export default Posts;
