import Layout from '../components/layout'
import BannerPrincial from '../components/itinerario/banner'
import Detalle from '../components/itinerario/detalle'

const Itinerario = () => {
    return (
        <div>
            <div className='overflowHidden'>
                <Layout
                    title={'Itinerario :: Cusqueña, Maestros del Sabor'}
                    description={'Itinerario :: Cusqueña, Maestros del Sabor'}
                >
                    <BannerPrincial data={ ['Itinerario <br />del evento','ubicacion.svg', '40', '43','itinerario','Descubre los horarios de cada experiencia gastronómica, nuestras clases maestras y las mejores bandas nacionales e internacionales del festival.',''] } />
                    <Detalle />
                </Layout>
            </div>
        </div>
    )
}

export default Itinerario
