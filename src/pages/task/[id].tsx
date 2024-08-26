import Head from "next/head";
import { ChangeEvent, FormEvent, useState } from "react";
import { useSession } from "next-auth/react";
import styles from "./styles.module.css";
import { GetServerSideProps } from "next";
import { db } from "../../services/firebaseConnections";

import {
  doc,
  collection,
  where,
  query,
  getDoc,
  getDocs,
  addDoc,
} from "firebase/firestore";
import { Textarea } from "@/components/textarea";

interface TaskProps {
  item: {
    tarefa: string;
    public: boolean;
    created: string;
    user: string;
    taskId: string;
  };
  allComments: CommentsProps[];
}
interface CommentsProps {
  id: string;
  comment: string;
  user: string;
  name: string;
  taskId: string;
}
export default function Task({ item, allComments }: TaskProps) {
  const { data: session } = useSession();
  const [input, setInput] = useState("");
  const [comments, setComments] = useState<CommentsProps[]>(allComments || []);

  async function handleComment(event: FormEvent) {
    event.preventDefault();
    if (input === "") {
      return;
    }
    if (!session?.user?.email || !session?.user?.name) return;

    try {
      const docRef = await addDoc(collection(db, "comments"), {
        comment: input,
        user: session?.user?.email,
        name: session?.user?.name,
        taskId: item?.taskId,
      });

      setInput("");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Detalhes da Tarefas</title>
      </Head>

      <main className={styles.main}>
        <h1>Tarefa</h1>
        <article className={styles.task}>
          <p>{item.tarefa}</p>
        </article>
      </main>

      <section className={styles.commentsContainer}>
        <h2>Deixe seu comentario</h2>

        <form onSubmit={handleComment}>
          <Textarea
            value={input}
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
              setInput(event.target.value)
            }
            placeholder="Digite seu comentário"
          />
          <button disabled={!session?.user} className={styles.button}>
            Enviar comentário
          </button>
        </form>
      </section>

      <section className={styles.commentsContainer}>
        <h2> Todos os comentários</h2>
        {comments.length === 0 && <p>Nenhum comentário encontrado</p>}
        {comments.map((item) => (
          <article key={item.id} className={styles.comment}>
            <p>{item.comment}</p>
            <p>{item.name}</p>
          </article>
        ))}
      </section>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.id as string;

  const docRef = doc(db, "tarefas", id);
  const q = query(collection(db, "comments"), where("taskId", "==", id));
  const snapshotComments = await getDocs(q);
  let allComments: CommentsProps[] = [];
  snapshotComments.forEach((doc) => {
    allComments.push({
      id: doc.id,
      comment: doc.data().comment,
      user: doc.data().user,
      name: doc.data().name,
      taskId: doc.data().taskId,
    });
  });
  const snapshot = await getDoc(docRef);

  if (snapshot.data() === undefined) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  if (!snapshot.data()?.public) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const miliseconds = snapshot.data()?.created?.seconds * 1000;
  const task = {
    tarefa: snapshot.data()?.tarefa,
    public: snapshot.data()?.public,
    created: new Date(miliseconds).toLocaleDateString(),
    user: snapshot.data()?.user,
    taskId: snapshot.id,
  };

  return {
    props: {
      item: task,
      allComments: allComments,
    },
  };
};
