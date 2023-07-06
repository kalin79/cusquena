import Layout from '../components/layout'
import BannerPrincial from '../components/itinerario/banner'
import Detalle from '../components/restaurantes/detalle'


export default function Restaurantes() {
    return (
        <>
            <div className='overflowHidden'>
                <Layout
                    title={'Restaurantes :: Cusqueña, Maestros del Sabor'}
                    description={'Restaurantes :: Cusqueña, Maestros del Sabor'}
                >
                    <BannerPrincial data={ ['Restaurantes <br />del evento','iconorestaurante.svg', '48', '42','itinerario','Descubre los diferentes restaurantes que conquistarán tu paladar en nuestro festival.','iconRestaurante'] } />
                    <Detalle />
                </Layout> 
            </div>
        </>
    )
}
