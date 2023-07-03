import Head from "next/head"
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import Banner from '../components/home/bannervalid'


import styles from  '@/styles/sass/intro.module.sass'

export default function Home({userActive,ValidarUser}) {

    const fechaNac1 = useRef(null)
    const fechaNac2 = useRef(null)
    const fechaNac3 = useRef(null)
    const fechaNac4 = useRef(null)
    const errorMsn = useRef(null)
    let boolInit = useRef(false)
    const router = useRouter()

    const SetValor = (event,indice) => {
        errorMsn.current.style.display = "none"
        if (indice === 1){
            fechaNac1.current.value = event.target.value 
            if (event.keyCode === 8){
                fechaNac1.current.focus()
            }else{
                fechaNac2.current.focus()
            }
        }
        if (indice === 2){
            fechaNac2.current.value = event.target.value
            if (event.keyCode === 8){
                fechaNac2.current.focus()
            }else{
                fechaNac3.current.focus()
            }
        }
        if (indice === 3){
            fechaNac3.current.value = event.target.value
            if (event.keyCode === 8){
                fechaNac3.current.focus()
            }else{
                fechaNac4.current.focus()
            }
        }
        if (indice === 4){
            fechaNac4.current.value = event.target.value
            if (event.keyCode === 8){
                fechaNac4.current.focus()
            }else{
                fechaNac4.current.focus()
            }
        }
    }
    const AnalizamosFecha = (event,indice) => {
        // console.log(event)
        // console.log(event.target)
        // console.log(event.target.value)
        // console.log(event.target.value.length)
        // console.log(event.keyCode)
        // console.log(indice)
        // event.target.value = ''
        if (event.target.value.length >= 1){
            if (event.keyCode != 8){
                event.preventDefault()
            }
        }
        
    }
    
    const HandleSubmit = (e) => {
        let today = new Date();
        let year = today.getFullYear();
        let fechaNacimiento = fechaNac1.current.value + fechaNac2.current.value + fechaNac3.current.value + fechaNac4.current.value
        fechaNacimiento = parseInt(fechaNacimiento)
        e.preventDefault()
        if (typeof fechaNacimiento === 'number') { 
            // console.log(fechaNacimiento)
            // console.log(year)
            if ((year - fechaNacimiento) >= 18){
                ValidarUser(true)
                router.push("/inicio")
            }else{
                errorMsn.current.style.display = "block"
                ValidarUser(false)
            }
        }else{
            alert('error')
            return false
        }
    }

    useEffect( () => {
        if (!boolInit.current ){
            boolInit.current = true
            fechaNac1.current.focus()
            let a = window.innerWidth
            alert(a)
        }
        // console.log(userActive)
        // en el caso del html colocamos "?" seria asi * userActive? * 
   }, [])
    
    return (
        <>
            <Head>
                <title>Cusqueña :: Maestros del Sabor</title>
                <meta name="title" content='Cusqueña :: Maestros del Sabor' />
                <meta name="description" content='Cusqueña :: Maestros del Sabor' />
            </Head>
            <div className={styles.intro}>
                <Banner />
                <div className={`container ${styles.boxContent}`}>
                    
                    <div className={styles.boxFechaReserva}>
                        <Image  src="/assets/fecha.svg" width="247" height="3" alt='Parque de la Reserva' />
                    </div>
                    <div className={styles.boxValidacion}>
                        <form
                            onSubmit={HandleSubmit}
                            name="ValidacionUsuario"
                        >
                            <p>INGRESA TU AÑO DE NACIMIENTO</p>
                            <div className={styles.boxInputs}>
                                <input type="text" ref={fechaNac1} name="fecha1" maxLength="1" onKeyDown = { e => AnalizamosFecha(e,1) } onKeyUp= { e => SetValor(e,1) } />
                                <input type="text" ref={fechaNac2} name="fecha2" maxLength="1" onKeyDown = { e => AnalizamosFecha(e,2) } onKeyUp= { e => SetValor(e,2) } />
                                <input type="text" ref={fechaNac3} name="fecha3" maxLength="1" onKeyDown = { e => AnalizamosFecha(e,3) } onKeyUp= { e => SetValor(e,3) } />
                                <input type="text" ref={fechaNac4} name="fecha4" maxLength="1" onKeyDown = { e => AnalizamosFecha(e,4) } onKeyUp= { e => SetValor(e,4) } />
                                
                            </div>
                            <div className={styles.boxError} ref={errorMsn} >
                                <p>El año que ingreso no es válido!</p>
                            </div>
                            <div className={styles.boxButton}>
                                <button type="submit" className='buttonStyle'>INGRESAR</button>
                            </div>
                            <div className={styles.boxIconInca}>
                                <Image  src="/assets/inca.svg" width="90" height="25" alt='Simbolo Inca' />
                            </div>
                        </form>

                    </div>
                </div>
                <div className={styles.boxLegal}>
                    <Image  src="/assets/tomar.svg" width="380" height="20" alt='Legal' />
                </div>
            </div>
        </>
    )
}
