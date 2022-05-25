import Head from 'next/head';

import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>Wassim Serhan Photography</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keywords" content="street photography" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </>
  );
}
