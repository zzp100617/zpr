import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ZPR - Modern Web Application</title>
        <meta name='description' content='ZPR - A modern web application built with Next.js' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>ZPR!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>src/pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href='https://nextjs.org/docs' className={styles.card}>
            <h3>Documentation</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href='https://nextjs.org/learn' className={styles.card}>
            <h3>Learn</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a href='https://github.com/vercel/next.js/tree/canary/examples' className={styles.card}>
            <h3>Examples</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a href='https://vercel.com/new' className={styles.card}>
            <h3>Deploy</h3>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href='https://github.com/zzp100617/zpr' target='_blank' rel='noopener noreferrer'>
          Powered by ZPR
        </a>
      </footer>
    </div>
  )
}