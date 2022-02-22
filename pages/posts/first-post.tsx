import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

const FirstPost: NextPage = () => {
    return <>
        <Head>
            <title>First Page...</title>
            <meta name="description" content="hello world First page" />
        </Head>
        <Script src={"https://connect.facebook.net/en_US/sdk.js"} strategy="lazyOnload" />

        <h1>First Post</h1>
        <Image src={"/images/profile.jpg"} width={100} height={100} alt="profle Info"></Image>
        <Link href={".."}><a>back to home</a></Link>
    </>;
}

export default FirstPost;