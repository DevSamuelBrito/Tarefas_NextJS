import styles from "../../styles/home.module.css";
import Head from "next/head";
import Image from "next/image";
import heroImg from "../../public/assets/hero.png";

export default function Home() {
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
          <h1 className={styles.title}>Sistema feiro para você se organizar <br></br>seus estudos e tarefas</h1>
        </div>
      </main>
    </div>
  );
}
