
import Layout from '../components/layout'
import Banner from '../components/home/banner'
import Detalle from '../components/home/detalle'

export default function Inicio() {
    return (
        <div className='overflowHidden'>
            <Layout
                title={'Cusqueña :: Maestros del Sabor'}
                description={'Cusqueña :: Maestros del Sabor'}
            >
                <Banner />
                <Detalle />
                
            </Layout>
        </div>
    )
}
