// pages/_app.js
import { Style } from '../styles/globals.scss';
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Layout from '../app/layout';





function MyApp({ Component, pageProps }) {


    return (
        <NextUIProvider>
            <NextThemesProvider attribute="class" defaultTheme="light">
                <Layout>   <Component {...pageProps} /></Layout>
             
            </NextThemesProvider>
        </NextUIProvider>
    )
}


export default MyApp;