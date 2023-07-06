import Layout from '../components/layout'
import BannerPrincial from '../components/itinerario/banner'
import Detalle from '../components/mapa/detalle'

export default function Mapa() {
    return (
        <>
            <div className='overflowHidden'>
                <Layout
                    title={'Mapa :: Cusqueña, Maestros del Sabor'}
                    description={'Mapa :: Cusqueña, Maestros del Sabor'}
                >
                    <BannerPrincial data={ ['mapa <br/>del evento','iconmapa2.svg', '48', '40','itinerario','Encuentra la ruta hacia la experiencia que buscas.','iconMapa'] } />
                    <Detalle />
                </Layout> 
            </div>   
        </>
    )
}
