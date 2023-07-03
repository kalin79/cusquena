import Image from 'next/image'
import styles from  '@/styles/sass/restaurantes.module.sass'
// import { gsap } from "gsap"
export default function Plato({data}){
    const createMarkup =  () => {
        return {__html: data[2]}
    }
    return(
        <div className='contentPlato' >
            <div className='boxPrecio'>
                <p>S/ {data[1]}</p>
            </div>
            <div className='boxBotella'>
                <div className={`iconRombo claro pos1`}></div>
                <div className={`iconRombo small claro pos2`}></div>
                <Image src={`/assets/${data[0]}`} width='158' height='176' alt={`${data[2]}`}  />
                <h3 dangerouslySetInnerHTML={ createMarkup() }></h3>
                <div className='linesSeparateRes'>
                    <Image src="/assets/separate.png" width="300" height="12" alt='Bienvenidos al Festival Gastronómico'  />
                </div>
            </div>
        </div>
    )
}