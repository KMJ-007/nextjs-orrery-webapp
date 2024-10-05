import dynamic from 'next/dynamic'
import Head from 'next/head'

const OrreryApp = dynamic(() => import('@/components/OrreryApp'), { ssr: false })

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Orrery Web App</title>
        <meta name="description" content="An interactive orrery web app built with Next.js and Three.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <OrreryApp />
      </main>
    </>
  )
}