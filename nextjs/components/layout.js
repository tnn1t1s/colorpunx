import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import Link from 'next/link'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const name = "tnn1t1s"
export const siteTitle = "Colorpunx"

export default function Layout({children}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="ColorPunx are monochromatic NFT paintings sourced from the 222 unique colors used in the Larvalabs Cryptopunks."
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
		  <Navbar />
      <main>{children}</main>
		  <Footer />
    </div>
  )
}
