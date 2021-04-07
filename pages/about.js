import Head from 'next/head'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>nextjs</h1>
      </main>


    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  console.log(ctx)
  // const res = await fetch('https://api.github.com/repos/vercel/next.js')
  // const json = await res.json()
  return { title: '' }
}

// 革新的な製品を具現化
//First to Market