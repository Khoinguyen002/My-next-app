import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout title="Home">
      <h1 className={styles.title}>Hello</h1>
      <img src="/vercel.svg" />
    </Layout>
  );
}
