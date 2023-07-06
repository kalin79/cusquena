import Image from 'next/image'
import Link from 'next/link'

import styles from  '../styles/sass/footer.module.sass'

export default function Footer() {
     return (
          <>
               <div className={styles.footerLegalTop}>
                    <div className={styles.boxLegal2}>
                         <Image  src='/assets/tomar2.svg' width={360} height={18} alt='tomar es danino para la salud' />
                    </div>
               </div>
               <footer className={styles.footerMain}>
                    <div className={styles.gridFooter}>
                         <div className={styles.boxLogo}>
                              <Link href='/inicio'>
                                   <Image src='/assets/logocuzquena.svg' alt='logo' width={90} height={30} />
                              </Link>
                         </div>
                         <div className={styles.boxLogoCusquena}>
                              <Image src='/assets/logoIntro.svg' alt='logo' width={247} height={375} />
                         </div>
                         <div className={styles.navFooter}>
                              <h3>MAPA DEL SITIO</h3>
                              <nav>
                                   <Link href='/inicio'><span>Inicio</span></Link>
                                   <Link href='/itinerario'><span>ITINERARIO DEL EVENTO</span></Link>
                                   <Link href='/restaurantes'><span>LISTA DE RESTAURANTES</span></Link>
                                   <Link href='/mapa'><span>MAPA DEL EVENTO</span></Link>
                                   <Link href='/preguntas-frecuentes'><span>PREGUNTAS FRECUENTES</span></Link>
                              </nav>
                         </div>
                         
                    </div>
                    <div className={styles.patron}>
                         <div className={styles.bcg}></div>
                    </div>
                    <div className={styles.boxLegal}>
                         <Image  src='/assets/edad.svg' width={361} height={30} alt='No comparta este contenido con menores de edad' />
                    </div>
                    <div className={styles.boxBackus}>
                         <Image  src='/assets/backus.svg' width={70} height={33} alt='Backus' />
                    </div>
               </footer>
          </>
     )
}
