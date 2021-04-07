import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home(props) {
  const { title } = props;

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content="Arevo"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property='og:description' content={title}></meta>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1>nextjs</h1>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

Home.getInitialProps = async (ctx) => {
  const { query } = ctx;
  const { lang } = query;
  let meta = 'First to Market';
  // const res = await fetch('https://api.github.com/repos/vercel/next.js')
  // const json = await res.json()
  if (lang === 'jp') {
    meta = '革新的な製品を具現化';
  }

  return { title: meta };
};
