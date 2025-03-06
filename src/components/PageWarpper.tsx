import Head from "next/head";
import { FC, JSX } from "react";
import styles from "@/styles/common.module.scss";
import Script from "next/script";

type PropsType = {
  title: string;
  desc?: string;
  css?: string;
  js?: string;
  children: JSX.Element | JSX.Element[];
};

const PageWarpper: FC<PropsType> = ({
  title,
  desc = "",
  children,
  css = "",
  js = "",
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>{css}</style>
      </Head>
      <main className={styles.container}>{children}</main>
      <Script id="page-js">{js}</Script>
    </>
  );
};

export default PageWarpper;
