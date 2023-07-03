import Image from 'next/image'
import styles from  '@/styles/sass/restaurantes.module.sass'
// import { gsap } from "gsap"
export default function BtnMenu2({data}){
    return(
        <div className={`boxContenidoRombo small ${styles.cabeceraRestaurante}`} >
            <div className='romboPrincipal flotante'>
            <div className={`iconRombo claro ${styles.pos1}`}></div>
            <h3>CATEGORÍA<br />{data[2]}</h3>
                <div className={`boxInfo ${styles.centerBottom}`}>
                    <div className='boxLogoRest'>
                        <Image src={`/assets/${data[0]}`} width='140' height='140' alt='primos'  />
                    </div>
                </div>
            </div>
        </div>
    )
}