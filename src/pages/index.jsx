import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          In 2015, I started the Information Systems course, after graduation, at the age of 22, 
          I started my career in the world of programming as a web developer. In the following year, 
          I completed the Postgraduate course in Web and Mobile Development, 
          since then focus is the constant search for learning and specialization.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}