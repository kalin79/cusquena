import { useRouter } from 'next/router'

import Image from 'next/image'
import styles from  '../../styles/sass/restaurantes.module.sass'

// import { gsap } from "gsap"
export default function BtnMenu2({data}){
    const router = useRouter()


    const handleClic = (slug) => {
        // console.log(slug)
        router.push(`/${slug}`)
    }
    return(
        <div className={`boxContenidoRombo ${styles.boxContenidoRombo}`} onClick={ () => handleClic(data[1])}>
            <div className='romboPrincipal flotante'>
            {/* <h3>CATEGORÍA<br />carnes</h3> */}
                <div className='boxInfo '>
                    <div className={`boxLogoRest ${styles.boxLogoRest}`}>
                        <Image src={`/assets/${data[0]}`} width='100' height='100' alt='primos'  />
                    </div>
                </div>
                <p className='botonRestaurante'>VER PLATOS</p>
            </div>
        </div>
    )
}