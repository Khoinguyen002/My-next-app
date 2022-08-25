import { getRandomJoke } from "../../lib/jokes";
import Layout from "../../components/Layout";
import { Button, Card } from "react-bootstrap";
import Link from "next/link";

export default function Random({ joke }) {
  console.log(joke);
  return (
    <Layout>
      <Card className="my-3 shadow">
        <Card.Body>
          <Card.Title>{joke.value}</Card.Title>
          <Card.Link>
            <Link href={"/"}>
              <Button variant="dark">Back</Button>
            </Link>
          </Card.Link>
        </Card.Body>
      </Card>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const joke = await getRandomJoke();
  return {
    props: {
      joke,
    },
  };
};
