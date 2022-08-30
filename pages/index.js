import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <Layout title="Home">
      <h1 className={styles.title}>Hello</h1>
      <Image
        src="/vercel.svg"
        width={144}
        height={20}
        alt="Your Name"
        layout="fixed"
      />
      <img src="/vercel.svg" />
    </Layout>
  );
}
