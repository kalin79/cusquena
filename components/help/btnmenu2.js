import { useRouter } from 'next/router'

// import Image from 'next/image'
import styles from  '../../styles/sass/restaurantes.module.sass'

// import { gsap } from "gsap"
export default function BtnMenu2({data,url}){
    // console.log(2,url)
    const router = useRouter()
    
    const handleClic = (slug) => {
        // console.log(slug)
        router.push(`/restaurante/platos/${slug}`)
    }
    return(
        <>
            <div className={styles.cardRestaurante}>
                <div className={`boxContenidoRombo ${styles.boxContenidoRombo}`} onClick={ () => handleClic(url)}>
                    <div className='romboPrincipal2 flotante'>
                    {/* <h3>CATEGORÍA<br />carnes</h3> */}
                        <div className='boxInfo '>
                            <div className={`boxLogoRest ${styles.boxLogoRest}`}>
                                <img src={data} width='100' height='100' alt='primos'  />
                            </div>
                        </div>
                        <p className='botonRestaurante'>VER PLATOS</p>
                    </div>
                </div>
            </div>
        </>
        
    )
}