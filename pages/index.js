import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import SocialMedia from '../components/socialmediacomponent'
library.add(faCoffee);

export default function Home({ allPostsData }){
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        </Head>
          <div id="outerDiv">


          <section className={utilStyles.headingMd}>
          <p>Hello,
          I'm Ariane. A (hopefully first class) BSc Computer Science graduate from the University of St Andrews.</p>
            <p role="image" aria-label="hamburger"> This is my personal website, which was built using Next.js, to showcase my experience and skills - call it a modern CV! 👩🏻‍💻</p>
        </section>
          </div>
          {/*<section className={utilStyles.headingMd}>…</section>*/}
          {/*<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>*/}
          {/*    <h2 className={utilStyles.headingLg}>Blog</h2>*/}
          {/*    <ul className={utilStyles.list}>*/}
          {/*        {allPostsData.map(({ id, date, title }) => (*/}
          {/*            <li className={utilStyles.listItem} key={id}>*/}
          {/*                <Link href="/posts/[id]" as={`/posts/${id}`}>*/}
          {/*                    <a>{title}</a>*/}
          {/*                </Link>*/}
          {/*                <br />*/}
          {/*                <small className={utilStyles.lightText}>*/}
          {/*                    <Date dateString={date} />*/}
          {/*                </small>*/}
          {/*            </li>*/}
          {/*        ))}*/}
          {/*    </ul>*/}
          {/*</section>*/}
         <SocialMedia/>

          {/*<FontAwesomeIcon icon="coffee" />*/}
      </Layout>


  )

}
export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

