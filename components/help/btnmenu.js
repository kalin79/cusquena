import { useRouter } from 'next/router'

import Image from 'next/image'

// import { gsap } from "gsap"
export default function BtnMenu({data}){
    const router = useRouter()

    const createMarkup =  () => {
        return {__html: data[0]}
    }
    const handleClic = (slug) => {
        // console.log(slug)
        router.push(`/${slug}`)
    }
    return(
        <div className='boxContenidoRombo' onClick={ () => handleClic(data[4])}>
            <div className='romboSecundario'></div>
            <div className='romboPrincipal'>
                <div className='boxInfo'>
                    <div className={'boxIcon'}>
                        <Image src={`/assets/${data[1]}`} width={data[2]} height={data[3]} alt={data[0]}  />
                    </div>
                    <h2 dangerouslySetInnerHTML={ createMarkup() }></h2>
                    <p>MÁS <br />INFORMACIÓN</p>
                </div>
            </div>
        </div>
    )
}