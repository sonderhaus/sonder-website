import Head from 'next/head';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sonder</title>
        <meta
          name='description'
          content='Briefly, "the realization that each random passerby is living a
          life as vivid and complex as your own."'
        />
      </Head>

      <main className={styles.main}>
        <div className={styles.logo}>
          <img
            src='/images/sonder-app-icon.svg'
            width={150}
            height={150}
          />
        </div>

        <h1 className={styles.title}>Sonder</h1>

        <p className={styles.description}>
          Briefly, <br /> "the realization that each random passerby <br />{' '}
          is living a life as vivid and complex as your own."
        </p>

        <p className={styles.quote}>Urban Dictionary</p>
      </main>
    </div>
  );
}
