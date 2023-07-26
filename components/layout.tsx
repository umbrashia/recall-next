import Head from "next/head";
import Image from "next/image";
import { PropsWithChildren, ReactChildren, ReactPropTypes } from "react";
import layoutStyle from "./layout.module.css";
import utilStyle from "../styles/utils.module.css";
import Link from "next/link";

export type typeLayoutExtraProps = { home?: any; siteTitle?: string };

const name = "Shantanu Sharma";
export const siteTitle = "Next.js Sample Website";

export default function Layout({
  children,
  home,
}: Partial<
  PropsWithChildren<ReactPropTypes & typeLayoutExtraProps>
>): JSX.Element {
  return (
    <div className={layoutStyle.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="discription"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={layoutStyle.header}>
        {home ? (
          <>
            <Image
              src={"/images/yoda.jpeg"}
              className={utilStyle.borderCircle}
              width={100}
              height={100}
            />
            <h1 className={utilStyle.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href={"/"}>
              <a>
                <Image
                  src={"/images/profile.jpg"}
                  height={100}
                  width={100}
                  className={utilStyle.borderCircle}
                  alt={"hello my profile"}
                />
              </a>
            </Link>
            <h2 className={utilStyle.headingLg}>
              <Link href={"/"}>
                <a className={utilStyle.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
        <section style={{ alignSelf: "stretch" }}>
          <ul className={layoutStyle.navstyle}>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/posts/first-post"}>First Post</Link>
            </li>
            <li>
              <Link href={"/authors/me"}>Authors My</Link>
            </li>
          </ul>
        </section>
      </header>
      <main>{children}</main>
      {!home && (
        <div className={layoutStyle.backToHome}>
          <Link href={"/"}>
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
