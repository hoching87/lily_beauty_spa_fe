import Navbar from './Navbar'
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Lily Spa</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  )
}