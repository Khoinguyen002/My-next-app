import Link from "next/link";
import { Card } from "react-bootstrap";
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
