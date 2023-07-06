import { useRouter } from 'next/router'

import Layout from '../../../components/layout'
import BannerPrincial from '../../../components/restaurantes/bannerrestaurante'
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
                    <BannerPrincial data={ ['primos.svg', 'Primos'] } />
                    <div className={styles.restauranteContendorDetalle}>
                        <div className='container'>
                            <div className={styles.gridRestaurante}>
                                <div className={styles.boxPlato}>
                                    <h2>Clásico Fried <br />Chicken Sandwich</h2>
                                    <Plato data={ ['custrigo2.png','24.99','MARIDA BIEN <br>CON CUSQUEÑA <br>DE TRIGO'] } />
                                </div>
                                <div className={styles.boxPlato}>
                                    <h2>pollo a la brasa<br /> primos</h2>
                                    <Plato data={ ['cusmalta.png','59.99','MARIDA BIEN <br>CON CUSQUEÑA <br>DE TRIGO'] } />
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout> 
            </div>        
        </>
    )
}
