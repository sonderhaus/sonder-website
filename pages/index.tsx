import Head from 'next/head';

export default function Home(): JSX.Element {
  return (
    <div className='Home container'>
      <Head>
        <title>Sonder</title>
        <meta
          name='description'
          content='Briefly, "the realization that each random passerby is living a
          life as vivid and complex as your own."'
        />
      </Head>

      <main className='Home__main'>
        <div className='Home__logo'>
          <img
            src='/images/sonder-app-icon.svg'
            width={150}
            height={150}
          />
        </div>

        <h1 className='Home__title'>Sonder</h1>

        <div className='Home__quote'>
          <p className='quote__text'>
            <strong>Sonder</strong> is the realization that everybody
            around you is living a life just as complex as yours.
            <br />
            <br />
            Sometimes you are hurting so bad, and you feel like you're the
            only one. But after all your hardships you start to realize
            that everybody is so unique, and you aren't the only one.
            Everybody lives are so indescribably different and there is no
            way you will ever understand their lives.
            <br />
            <br />
            You are realizing that you are not the only one living with
            such chaos and complexity. All people lives are unique,
            strange, chaotic, and complex, just like yours.
            <br />
            <br />
            <strong>You're not alone.</strong>
          </p>

          <p className='quote__quotee'>
            Paraphrased from the{' '}
            <a
              href='https://www.urbandictionary.com/define.php?term=sonder'
              target='_blank'
            >
              Urban Dictionary
            </a>
          </p>

          <p className='quote__quotee'>
            Originally from the{' '}
            <a
              href='https://www.dictionaryofobscuresorrows.com/'
              target='_blank'
            >
              Dictionary of Obscure Sorrows
            </a>
          </p>
        </div>

        <h2 className='Home__subtitle'>
          Discover Your Real Social Environment
        </h2>

        <ul className='Home__list'>
          <li>No ads.</li>
          <li>No influencers.</li>
          <li>No fighting for your attention.</li>
          <li>Open Source.</li>
        </ul>

        <p className='Home__development'>
          This project is in early development by{' '}
          <a href='https://github.com/sonderhaus' target='_blank'>
            <strong>Sonderhaus</strong>.
          </a>
        </p>
      </main>
    </div>
  );
}
