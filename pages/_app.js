import { useState, useEffect } from 'react'

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

    return <Component {...pageProps} 
        userActive = {userActive}
        ValidarUser = {ValidarUser}
    />
}