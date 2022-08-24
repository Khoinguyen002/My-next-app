import { Card } from "react-bootstrap";
import Layout from "../../components/Layout";
import { getPosts } from "../../lib/post";

const Posts = ({ posts }) => {
	return (
		<Layout>
			{posts.map((post, index) => (
				<Card key={index}>
					<Card.Body>
						<Card.Title>{post.title}</Card.Title>
						<Card.Text>{post.body}</Card.Text>
					</Card.Body>
				</Card>
			))}
		</Layout>
	);
};

export const getStaticProps = async () => {
	const posts = await getPosts();
	return {
		props: {
			posts,
		},
	};
};

export default Posts;
