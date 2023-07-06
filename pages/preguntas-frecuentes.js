import Layout from '../components/layout'
import BannerPrincial from '../components/itinerario/banner'
import Detalle from '../components/preguntas/detalle'

const PreguntasFrecuentes = () => {
    return (
        <div>
            <div className='overflowHidden'>
                <Layout
                    title={'Preguntas Frecuentes :: Cusqueña, Maestros del Sabor'}
                    description={'Preguntas Frecuentes :: Cusqueña, Maestros del Sabor'}
                >
                    <BannerPrincial data={ ['Preguntas <br>Frecuentes','ubicacion.svg', '40', '43','ppreguntas-frecuentes','Texto Faltante',''] } />
                    <Detalle />
                </Layout>
            </div>
        </div>
    )
}

export default PreguntasFrecuentes
