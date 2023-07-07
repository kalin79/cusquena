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
                    <BannerPrincial data={ ['Preguntas <br>Frecuentes','iconpreguntas.svg', '90', '71','ppreguntas-frecuentes','Descubre los sabores que nos acompañarán en este Festival.',''] } />
                    <Detalle />
                </Layout>
            </div>
        </div>
    )
}

export default PreguntasFrecuentes
