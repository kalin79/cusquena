import Head from "next/head"
import Header from './header'
import Footer from './footer'
export default function Layout({children,title='',description=''}) {
     return (
          <>
               <Head>
                    <title>{title}</title>
                    <meta name="title" content={title} />
                    <meta name="description" content={description} />
                    {/* <meta property="og:image" content="<generated>" />
                    <meta property="og:image:type" content="<generated>" />
                    <meta property="og:image:width" content="<generated>" />
                    <meta property="og:image:height" content="<generated>" /> */}
                    
                    {/* <meta name="twitter:image" content="<generated>" />
                    <meta name="twitter:image:type" content="<generated>" />
                    <meta name="twitter:image:width" content="<generated>" />
                    <meta name="twitter:image:height" content="<generated>" /> */}

                    <meta property="og:image:alt" content="Cusqueña, Maestros del Sabor" />

                    <meta name="robots" content="index,follow"/>
                    {/* <meta
                         http-equiv="Content-Security-Policy"
                         content="default-src 'self'; img-src https://*; child-src 'none';" 
                    /> */}
               </Head>
               <Header />
               {children}
               <Footer />
          </>
     )
}