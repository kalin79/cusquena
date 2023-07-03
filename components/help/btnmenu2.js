import { useRouter } from 'next/router'

import Image from 'next/image'

// import { gsap } from "gsap"
export default function BtnMenu2({data}){
    const router = useRouter()


    const handleClic = (slug) => {
        // console.log(slug)
        router.push(`/${slug}`)
    }
    return(
        <div className='boxContenidoRombo small' onClick={ () => handleClic(data[1])}>
            <div className='romboPrincipal flotante'>
            <h3>CATEGORÍA<br />carnes</h3>
                <div className='boxInfo '>
                    <div className='boxLogoRest'>
                        <Image src={`/assets/${data[0]}`} width='140' height='140' alt='primos'  />
                    </div>
                </div>
                <p className='small'>VER PLATOS</p>
            </div>
        </div>
    )
}