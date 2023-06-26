import Layout from '../components/layout'
import BannerPrincial from '../components/itinerario/banner'

const Itinerario = () => {
    return (
        <div>
            <div className='overflowHidden'>
                <Layout
                    title={'Itinerario :: Cusqueña, Maestros del Sabor'}
                    description={'Itinerario :: Cusqueña, Maestros del Sabor'}
                >
                    <BannerPrincial data={ ['Itinerario <br />del evento','ubicacion.svg', '40', '43','itinerario','Master clases, catas de maridaje, listado de artistas y los horarios de presentación.'] } />
                </Layout>
            </div>
        </div>
    )
}

export default Itinerario
