import { GetServerSideProps } from "next";
import styles from "./styles.module.css";
import Head from "next/head";
import { getSession } from "next-auth/react";
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

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({req});
  if(!session?.user){
    //se não tem nenhum usuário logado
    return{
      redirect:{
        destination: '/',
        permanent: false,
      }
    }
  }
  return {
    props: {},
  };
};
