import { useEffect, useState, useRef} from 'react'

import Layout from '../components/layout'
import BannerPrincial from '../components/itinerario/banner'
import Detalle from '../components/itinerario/detalle'

export default function Itinerario(){

    const [data, setData] = useState([])
    let boolInit = useRef(null)
    
    useEffect( () => {
        if (!boolInit.current){
            boolInit.current = true
            fetchData()   
        }
    },[])

    const fetchData = async() => {
        const respuesta = await fetch(`https://back.mds-cusquena.com/api/v1/eventos`)
        const data = await respuesta.json()
        const resultado = await data.data.eventos
        console.log(resultado)
        setData([{id: 2}])
    }

    return (
        <div>
            <div className='overflowHidden'>
                <Layout
                    title={'Itinerario :: Cusqueña, Maestros del Sabor'}
                    description={'Itinerario :: Cusqueña, Maestros del Sabor'}
                >
                    <BannerPrincial data={ ['Itinerario <br />del evento','ubicacion.svg', '40', '43','itinerario','Descubre los horarios de cada experiencia gastronómica, nuestras clases maestras y las mejores bandas nacionales e internacionales del festival.',''] } />
                    {/* {itinerarios?.map((items,index) => ( */}
                        <Detalle
                            dataitinerarios={data}
                        />
                    {/* ))} */}
                </Layout>
            </div>
        </div>
    )
}


// export async function getStaticProps(){
//     const respuesta = await fetch(`${process.env.API_URL}/v1/eventos`)
//     const {data: itinerarios } = await respuesta.json()
//     return {
//         props: {
//             itinerarios
//         }
//     }
// }

export async function getServerSideProps(){
   
    console.log(`${process.env.API_URL}/v1/eventos`)
    const respuesta = await fetch(`${process.env.API_URL}/v1/eventos`)
    const {data: itinerarios } = await respuesta.json()
    return {
        props: {
            itinerarios
        }
    }
}