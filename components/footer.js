import Image from 'next/image'
import Link from 'next/link'

import styles from  '../styles/sass/footer.module.sass'

export default function Footer() {
     return (
          <footer className={styles.footerMain}>
               <div className={styles.boxLogoCusquena}>
                    <Image src='/assets/logoIntro.svg' alt='logo' width={247} height={375} />
               </div>
               <nav>
                    <Link href='/itinerario'><span>ITINERARIO DEL EVENTO</span></Link>
                    <Link href='/restaurantes'><span>LISTA DE RESTAURANTES</span></Link>
                    <Link href='/mapa'><span>MAPA DEL EVENTO</span></Link>
               </nav>
               <div className={styles.patron}>
                    <div className={styles.bcg}></div>
               </div>
               <div className={styles.boxLegal}>
                    <Image  src='/assets/tomar.svg' width={380} height={20} alt='Legal' />
               </div>
          </footer>
     )
}
