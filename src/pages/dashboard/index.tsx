import styles from "./styles.module.css";
import Head from "next/head";
export default function Dashboard() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Meu Painel de Tarefas</title>
      </Head>
      <h1>página painel</h1>
    </div>
  );
}
