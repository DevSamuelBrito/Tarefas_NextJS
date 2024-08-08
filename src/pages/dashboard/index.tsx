import { GetServerSideProps } from "next";
import styles from "./styles.module.css";
import Head from "next/head";
import { Textarea } from "@/components/textarea";
import { getSession } from "next-auth/react";
import { FiShare2 } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";
import { ChangeEvent, FormEvent, useState } from "react";

export default function Dashboard() {
  const [input, setInput] = useState("");
  const [publicTask, setPublicTask] = useState(false);

  function handleChangePublic(event: ChangeEvent<HTMLInputElement>) {
    setPublicTask(event.target.checked);
  }
  function handleRegisterTask(event: FormEvent){
    event.preventDefault();
    if(input ===''){
      
    }

  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Meu Painel de Tarefas</title>
      </Head>
      <main className={styles.main}>
        <section className={styles.content}>
          <div className={styles.contentForm}>
            <h1 className={styles.title}>Qual sua tarefa?</h1>
            <form onSubmit={handleRegisterTask}>
              <Textarea
                placeholder="Digite sua tarefa..."
                value={input}
                onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
                  event.target.value;
                }}
              />
              <div className={styles.checkboxArea}>
                <input
                  type="checkbox"
                  checked={publicTask}
                  onChange={handleChangePublic}
                  className={styles.checkbox}
                />
                <label>Deixar tarefa publica?</label>
              </div>
              <button type="submit" className={styles.button}>
                Registrar
              </button>
            </form>
          </div>
        </section>
        <section className={styles.taskContainer}>
          <h1>Minhas Tarefas</h1>
          <article className={styles.task}>
            <div className={styles.tagContainer}>
              <label className={styles.tag}>Pública</label>
              <button className={styles.shareButton}>
                <FiShare2 size={20} color="#3183ff" />
              </button>
            </div>
            <div className={styles.taskContent}>
              <p>MInha primeira Tarefa</p>
              <button className={styles.trashButton}>
                <FaTrash size={20} color="#ea3140" />
              </button>
            </div>
          </article>
          <article className={styles.task}>
            <div className={styles.tagContainer}>
              <label className={styles.tag}>Pública</label>
              <button className={styles.shareButton}>
                <FiShare2 size={20} color="#3183ff" />
              </button>
            </div>
            <div className={styles.taskContent}>
              <p>MInha primeira Tarefa</p>
              <button className={styles.trashButton}>
                <FaTrash size={20} color="#ea3140" />
              </button>
            </div>
          </article>
          <article className={styles.task}>
            <div className={styles.tagContainer}>
              <label className={styles.tag}>Pública</label>
              <button className={styles.shareButton}>
                <FiShare2 size={20} color="#3183ff" />
              </button>
            </div>
            <div className={styles.taskContent}>
              <p>MInha primeira Tarefa</p>
              <button className={styles.trashButton}>
                <FaTrash size={20} color="#ea3140" />
              </button>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  if (!session?.user) {
    //se não tem nenhum usuário logado
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
