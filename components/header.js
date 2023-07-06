import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

import { gsap } from "gsap"


import styles from  '../styles/sass/header.module.sass'
export default function Header() {
     const router = useRouter()
     const btnMenuNav = useRef(null)
     const inner = useRef(null)
     const boxLogo = useRef(null)
     const boxNav = useRef(null)
     const btnMenuBool = useRef(false)
     const HandleOpenNav = (e) => {
          console.log(e)
          e.preventDefault()
          console.log(boxNav.current.children)
          const tl = gsap.timeline()
          if (!btnMenuBool.current){
               btnMenuBool.current = true  

               tl.set(inner.current,{y: "-100%"})
               tl.set(boxLogo.current,{opacity: 0,scale: 0, display: 'flex'})
               tl.set(boxNav.current,{opacity: 0 , display: 'flex'})
               tl.set(boxNav.current.children[0].children,{opacity: 0,x:'-100%'})
               tl.set(boxNav.current.children[1].children,{opacity: 0,x:'-100%'})
               tl.set(boxNav.current.children[2].children,{opacity: 0,x:'-100%'})
               tl.to(inner.current,{y: "0%", duration: .15})
               tl.to(boxLogo.current,{opacity: 1,scale: 1, duration: .15})
               tl.to(boxNav.current,{opacity: 1, duration: .15})
               tl.to(boxNav.current.children[0].children,{opacity: 1,x: 0 ,duration: .15})
               tl.to(boxNav.current.children[1].children,{opacity: 1,x: 0 ,duration: .15})
               tl.to(boxNav.current.children[2].children,{opacity: 1,x: 0 ,duration: .15})
               tl.to(boxNav.current.children[3].children,{opacity: 1,x: 0 ,duration: .15})

               gsap.set(btnMenuNav.current,{rotation: 45})
               gsap.set(btnMenuNav.current.children[1],{width: 0})
               gsap.set(btnMenuNav.current.children[0],{y: 7, x: -2, width: "32px"})
               gsap.set(btnMenuNav.current.children[2],{y: -8, x: -2, width: "32px"})
               gsap.to(btnMenuNav.current.children[0],{rotation: 0})
               gsap.to(btnMenuNav.current.children[2],{rotation: 90})
          }else{
               btnMenuBool.current = false
               tl.to(boxLogo.current,{opacity: 0,scale: 0, duration: .15})
               tl.to(boxNav.current.children[0].children,{opacity: 0,x: '-100%' ,duration: .15})
               tl.to(boxNav.current.children[1].children,{opacity: 0,x: '-100%' ,duration: .15})
               tl.to(boxNav.current.children[2].children,{opacity: 0,x: '-100%' ,duration: .15})
               tl.to(boxNav.current.children[3].children,{opacity: 0,x: '-100%' ,duration: .15})
               tl.to(boxNav.current,{display: 'none'}, '-=.15')
               tl.to(boxLogo.current,{display: 'none'}, '-=.15')
               tl.to(boxNav.current,{opacity: 0, duration: .15})
               tl.to(inner.current,{y: "-100%", duration: .15})
               
               

               gsap.set(btnMenuNav.current,{rotation: 0})
               gsap.set(btnMenuNav.current.children[0],{y: 0, x: 0, width: "2rem"})
               gsap.set(btnMenuNav.current.children[2],{y: 0, x: 0, width: "2rem"})
               gsap.to(btnMenuNav.current.children[0],{rotation: 0})
               gsap.to(btnMenuNav.current.children[2],{rotation: 0})
               gsap.to(btnMenuNav.current.children[1],{width: "100%"})
          }
     }
     return (
          <>
               <header className={styles.headerMain}>
                    <div ref={inner} className={styles.inner}>
                         <div className={styles.boxLegal}>
                              <Image  src="/assets/tomar.svg" width="380" height="20" alt='Legal' />
                         </div>
                    </div>
                    <div className={`container ${styles.containerMovil}`}>
                         <div className={styles.gridMenu}>
                              <button 
                                   className={styles.hambergerMenu}
                                   onClick={ HandleOpenNav }
                                   ref={btnMenuNav}
                              > 
                                   <div className={styles.lineMenu}></div>
                                   <div className={styles.lineMenu}></div>
                                   <div className={styles.lineMenu}></div>
                              </button>
                              <div className={styles.boxLogo}>
                                   <Link href='/inicio'>
                                        <Image src='/assets/logoIntro.svg' alt='logo' width={110} height={62} />
                                   </Link>
                              </div>
                              <nav className={styles.boxNavMenu}>
                                   <div ref={boxLogo} className={styles.boxLogoNav}>
                                        <Image src='/assets/logoIntro.svg' alt='Maestros del Sabor :: El Festival' width={200} height={120}  />
                                   </div>
                                   <div ref={boxNav} className={styles.navMenu}>
                                        <Link href='/inicio' className={router.pathname == "/" ? "active" : ""}><span>INICIO</span></Link>
                                        <Link href='/itinerario' className={router.pathname == "/itinerario" ? "active" : ""}><span>ITINERARIO DEL EVENTO</span></Link>
                                        <Link href='/restaurantes' className={router.pathname == "/restaurantes" ? "active" : ""}><span>LISTA DE RESTAURANTES</span></Link>
                                        <Link href='/mapa' className={router.pathname == "/mapa" ? "active" : ""}><span>MAPA DEL EVENTO</span></Link>
                                   </div>
                              </nav>
                         </div>
                    </div>
               </header>
          </>
     )
}
