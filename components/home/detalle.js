import {useRef, useEffect} from 'react'
import BtnMenu from '../../components/help/btnmenu'

import Image from 'next/image'
import styles from  '../../styles/sass/home.module.sass'

import { gsap } from "gsap"
export default function Detalle(){
    return(
        <div className={styles.boxDetalle}>
            <div className='container'>
                <div className={styles.boxTitleCenter}>
                    <div className={styles.boxTitle}>
                        <div className={`iconRombo claro ${styles.posRombo}`}></div>
                        <div className={`iconRombo claro ${styles.posRombo2}`}></div>
                        <h1>
                            Bienvenidos al Festival<br />Gastronómico <br />
                            que te <span>conquistará</span> <br />
                            con sus sabores
                        </h1>
                    </div>
                </div>
                <div className={styles.linesSeparate}>
                    <Image src="/assets/separate.png" width="300" height="12" alt='Bienvenidos al Festival Gastronómico'  />
                </div>
                <div className={styles.boxFecha}>
                    <Image src="/assets/fecha.svg" width="247" height="32" alt='Parque de la Reserva'  />
                </div>
                <div className={styles.boxIconInca}>
                    <Image  src="/assets/inca.svg" width="90" height="25" alt='Simbolo Inca' />
                </div>
                <div className={styles.boxMas}>
                    <div>
                        <p>DESCUBRE<br />MÁS</p>
                        <Image  src="/assets/arrow.svg" width="22" height="15" alt='Descubre mas!' />
                    </div>
                </div>
                <div className={styles.boxContenedorRombo}>
                    <div className={styles.boxAdornosRombo}>
                        <div className={`iconRombo big ${styles.pos1}`}></div>
                        <div className={`iconRombo ${styles.pos2}`}></div>
                        <div className={styles.imageAmigos}>
                            <Image  src="/assets/hombre2.png" width="373" height="400" alt='Itinerario del Evento' />
                        </div>
                        <BtnMenu data={ ['Itinerario <br />del evento','ubicacion.svg', '40', '43','itinerario'] } />
                    </div>
                    <div className={styles.boxAdornosRombo}>
                        <div className={`iconRombo ${styles.pos3}`}></div>
                        <div className={`iconRombo small ${styles.pos4}`}></div>
                        
                        <BtnMenu data={ ['lista de <br />restaurantes','iconorestaurante.svg', '48', '43','restaurantes'] } />
                    </div>
                    <div className={styles.boxAdornosRombo}>
                        <div className={`iconRombo big ${styles.pos5}`}></div>
                        <div className={`iconRombo  small ${styles.pos6}`}></div>
                        <div className={styles.imageCerveza}>
                            <Image  src="/assets/cervezas2.png" width="495" height="520" alt='Itinerario del Evento' />
                        </div>
                        <div className={styles.imageMujer}>
                            <Image  src="/assets/mujer2.png" width="397" height="400" alt='Itinerario del Evento' />
                        </div>
                        <BtnMenu data={ ['mapa del <br /> evento','iconmapa.svg', '48', '40','mapa'] } />{/* <BtnMenu /> */}
                    </div>
                </div>


            </div>
        </div>
    )
}