import { useState, useEffect } from 'react'
import Script from 'next/script'
import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/sass/globals.sass'

export default function App({ Component, pageProps }) {

    const userActiveLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('userActive')) ?? false : null

    const [userActive, setUserActive] = useState(userActiveLS)

    useEffect(() => {
        localStorage.setItem('userActive', JSON.stringify(userActive))
    },[userActive])

    const ValidarUser = (bool) => {
        setUserActive(bool)
        // console.log('activando', bool)
    }

    return (
        <>
            <Script 
                strategy="afterInteractive"  
                src="https://www.googletagmanager.com/gtag/js?id=G-5GKH7RMMM5" 
            />
            <Script id="google-analytics" strategy="afterInteractive"  >
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-5GKH7RMMM5');
                `}
            </Script>
            <Component {...pageProps} 
            userActive = {userActive}
            ValidarUser = {ValidarUser}
            />
        </>
    )
}