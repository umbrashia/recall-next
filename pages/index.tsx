import { log } from "console";
import type { NextPage } from "next";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";

const Home: NextPage<{ allPostsData: any[] }> = ({ allPostsData }) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>Iam the devloper from open source universe</p>
        <p>
          (This is a sample website - to run next js in open world but i realy
          feel good to expriment to next-js{"  "}
          <br />
          <a
            style={{ color: "blue", cursor: "pointer" }}
            href="https://nextjs.org/learn"
          >
            out Next.js tutorial
          </a>
        </p>
        .)
      </section>
      <section className={`${utilStyles.headingMd}`}>
        <h2 className={`${utilStyles.headingLg}`}></h2>
        <ul className={`${utilStyles.list}`}>
          {allPostsData.map((el, key) => (
            <li key={key}>
              {el.title}
              <br />
              {el.id}
              <br />
              {el.date}
              <br />
              <br />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export const getStaticProps = async (): Promise<any[]> => {
  const allPostsData = getSortedPostData();
  return {
    props: {
      allPostsData,
    },
  } as any;
};

export default Home;
