import type { NextPage } from "next";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

const Home: NextPage = () => {
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
    </Layout>
  );
};

export const getStaticProps = async () => {};

export default Home;
