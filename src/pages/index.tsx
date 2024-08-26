import { GetStaticProps } from "next";
import styles from "../../styles/home.module.css";
import Head from "next/head";
import Image from "next/image";
import heroImg from "../../public/assets/hero.png";
import { db } from "../services/firebaseConnections";
import { collection, getDocs } from "firebase/firestore";

interface HomeProps {
  posts: number;
  comments: number;
}

export default function Home({ posts, comments }: HomeProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tarefas+ | Organize a sua tarefas de forma fácil</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.logoContent}>
          <Image
            className={styles.hero}
            alt="Logo Tarefas+"
            src={heroImg}
            priority={true}
          />
          <h1 className={styles.title}>
            Sistema feiro para você se organizar <br></br>seus estudos e tarefas
          </h1>
          <div className={styles.infoContent}>
            <section className={styles.box}>
              <span>+ {comments} comentários</span>
            </section>
            <section className={styles.box}>
              <span>+ {posts} posts</span>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const commentsRef = collection(db, "comments");
  const postRef = collection(db, "tarefas");
  const postsSnapshot = await getDocs(postRef);
  const commentsSnapshot = await getDocs(commentsRef);

  return {
    props: {
      posts: postsSnapshot.size || 0,
      comments: commentsSnapshot.size || 0,
    },
    revalidate: 60, // vai ser reavaliado a cada 60 segundos
  };
};
