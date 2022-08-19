import React, { ReactNode } from "react";
import Head from "next/head";
import { NavBar } from "./NavBar";
import Footer from "./Footer";
import { Grid } from "@mui/material";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <Grid>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
    </Head>
    <header>
      <NavBar />
    </header>
    {children}
    <Footer />
  </Grid>
);

export default Layout;
