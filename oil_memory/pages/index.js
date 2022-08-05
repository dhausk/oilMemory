import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Oil Memory" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Oil Memory
        </h1>

        <p className={styles.description}>
          Get started by adding a vehicle and creating a memory
        </p>
        <h2 className="title">
           Read{' '}
           <Link href="/first-post">
            <a>this page!</a>
           </Link>
        </h2>


        
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
