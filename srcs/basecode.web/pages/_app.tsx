import { AppProps, } from "next/app";
import React, { Component, } from "react";
import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider, } from "@mui/material/styles";
import "./styles.css";

const theme = createTheme ({

    breakpoints: {

        values: {

            xs: 0,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200,

            mobile: 768,
            tablet: 992,
            laptop: 1200,
            desktop: 1400,
        },
    },
});

export default ({ Component, pageProps, }: AppProps) => (<>
<Head>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
</Head>
<ThemeProvider theme={theme}>
    <CssBaseline />
    <Component {...pageProps} />
</ThemeProvider>
</>);
