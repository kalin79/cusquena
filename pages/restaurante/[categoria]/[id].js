import { useRouter } from 'next/router'

import Layout from '../../../components/layout'
import BannerPrincial from '../../../components/itinerario/banner'
import Cabecera from '../../../components/help/cabecerares'
import Plato from '../../../components/help/plato'

import styles from  '@/styles/sass/restaurantes.module.sass'


export default function Restaurante() {
    const router = useRouter()
    const {categoria, id} = router.query
    // console.log(router)
    return (
        <>
            <div className='overflowHidden'>
                <Layout
                    title={'#nombre# :: Cusqueña, Maestros del Sabor'}
                    description={'#nombre# :: Cusqueña, Maestros del Sabor'}
                >
                    <BannerPrincial data={ ['lista de <br>restaurantes','iconorestaurante.svg', '48', '42','','Descubre los sabores que nos acompañan.'] } />
                    <div className={styles.restauranteContendorDetalle}>
                        <div className='container'>
                            <div className={styles.detalleRestaurante}>
                                <Cabecera data={ ['primos.svg','/restaurante/primos','Carnes'] } />
                            </div>
                            <div className={styles.boxPlato}>
                                <h2>Clásico Fried <br />Chicken Sandwich</h2>
                                <Plato data={ ['custrigo.png','24.99','MARIDA BIEN <br>CON CUSQUEÑA <br>DE TRIGO'] } />
                            </div>
                            <div className={styles.boxPlato}>
                                <h2>pollo a la brasa<br /> primos</h2>
                                <Plato data={ ['cusroja.png','59.99','MARIDA BIEN <br>CON CUSQUEÑA <br>DE TRIGO'] } />
                            </div>
                        </div>
                    </div>
                </Layout> 
            </div>        
        </>
    )
}
