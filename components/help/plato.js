// import Image from 'next/image'
import styles from  '@/styles/sass/restaurantes.module.sass'
// import { gsap } from "gsap"
export default function Plato({data}){
    console.log(data)
    const createMarkup =  () => {
        return {__html: `MARIDA BIEN CON CUSQUEÑA<br> ${data.marinaje} `}
    }
    const createMarkupTitulo =  () => {
        return {__html: data.descripcion}
    }
    return(
        <>
            <div className={styles.boxPlato}>
                <h2 dangerouslySetInnerHTML={ createMarkupTitulo() }></h2>
                <div className='contentPlato' >
                    <div className='boxPrecio'>
                        <p>{data.precio}</p>
                    </div>
                    <div className='boxBotella'>
                        <div className={`iconRombo claro pos1`}></div>
                        <div className={`iconRombo small claro pos2`}></div>
                        <div className={styles.boxBotella}>
                            <img src={data.imagemobile} width='158' height='176' alt={data.titulo}  />
                        </div>
                        <h3 dangerouslySetInnerHTML={ createMarkup() }></h3>
                        <div className={`linesSeparateRes ${styles.linesSeparateRes}`}>
                            <img src="/assets/separate.png" width="300" height="12" alt='Bienvenidos al Festival Gastronómico'  />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}