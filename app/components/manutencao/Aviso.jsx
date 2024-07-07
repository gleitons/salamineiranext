// pages/maintenance.js
import Head from 'next/head';
import styles from './Maintenance.module.css';

export default function Maintenance() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Site em Manutenção</title>
        <meta name="description" content="Nosso site está em manutenção para melhor atendê-lo." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <h1 className={styles.title}>Estamos em Manutenção</h1>
        <p className={styles.description}>
          Para melhor atendê-lo, nosso site está passando por uma manutenção programada.
        </p>
        <p className={styles.description}>
          Estamos trabalhando em algo incrível para você. Por favor, volte em breve para conferir as novidades!
        </p>
        <p className={styles.description}>
          Agradecemos a sua compreensão.
        </p>
      </main>
    </div>
  );
}
