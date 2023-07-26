import { log } from "console";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import { getNewActors, getSortedPostData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";

const Home: NextPage<{ allPostsData: any[]; actors: Array<any> }> = ({
  allPostsData,
  actors,
}) => {
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
              <a className={utilStyles.openLink}>
                <Link href={`posts/${el.id}`}>Open post...</Link>
              </a>
              <br />
              {el.date}
              <br />
              <br />
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>actors list</h2>
        <div>
          <ul>
            {actors.map((el, key) => (
              <li>
                {el.actor_id} : {el.first_name} --
                <Link href={`actor-films/${el.actor_id}`}>open data</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
};

// export const getStaticProps = async (): Promise<any[]> => {
//   const allPostsData = getSortedPostData();
//   const actors = await getNewActors();
//   return {
//     props: {
//       allPostsData,
//     },
//   } as any;
// };

export async function getServerSideProps(context: any) {
  const allPostsData = getSortedPostData();
  const actors = await getNewActors();
  return {
    props: {
      allPostsData,
      actors,
    },
  } as any;
}

export default Home;
