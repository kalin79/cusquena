import { useEffect, useRef } from 'react'

import Image from 'next/image'

import { gsap } from "gsap/dist/gsap"
import { Draggable } from "gsap/dist/Draggable"

gsap.registerPlugin(Draggable)

import styles from  '../../styles/sass/mapa.module.sass'
export default function Detalle() {
    
    let boolInit = useRef(null)
    useEffect( () => {
        if (!boolInit.current){
            initDragMap()
        }
    },[])

    const initDragMap = () => {
        let mapaDrag = document.getElementById('mapaDrag')
        let bgMapa = document.getElementById('bgMapa')
        let navDrag = Draggable.create(mapaDrag, {
            edgeResistance:0.5,
            bounds: bgMapa,
            type: "x,y", 
            inertia: true
        })
    }
   
    return (
        <>
            <div className={styles.boxContent}>
                <div className={styles.containerInfo}>
                    <div className='container'>
                        <div className={styles.boxTitle}>
                            <h1>parque de las aguas</h1>
                            <div className={styles.rombito}></div>
                            <div className={`${styles.rombito} ${styles.pos2}`}></div>
                        </div>
                        <div className={styles.subBoxTitle}>
                            <Image src="/assets/mano.png"  width={32} height={48} alt='Arrastre el mapa para ver más lugares'  />
                            <h2>Arrastre el mapa para ver más lugares</h2>
                        </div>
                        <div className={styles.bgMapa} id="bgMapa">
                            <div className={styles.mapaDrag} id="mapaDrag">
                                <Image src="/assets/mapafinal.png"  width={1800} height={1013} alt='Parque de las Aguas'  />
                            </div>
                        </div>
                        <div className={styles.boxPing}>
                            <div className={styles.listPing}>
                                <div className={styles.circle}>1</div>
                                <p>Portico</p>
                            </div>
                            <div className={styles.listPing}>
                                <div className={styles.circle}>2</div>
                                <p>Caja Recarga</p>
                            </div>
                            <div className={styles.listPing}>
                                <div className={styles.circle}>3</div>
                                <p>Volumétrico Maestros</p>
                            </div>
                            <div className={styles.listPing}>
                                <div className={styles.circle}>4</div>
                                <p>Zona Picnic (cojines)</p>
                            </div>
                            <div className={styles.listPing}>
                                <div className={styles.circle}>5</div>
                                <p>Torre Informativa</p>
                            </div>
                            <div className={styles.listPing}>
                                <div className={styles.circle}>6</div>
                                <p>Zona Clase Maestra/Cata</p>
                            </div>
                            <div className={styles.listPing}>
                                <div className={styles.circle}>7</div>
                                <p>Zona Niños</p>
                            </div>
                            <div className={styles.listPing}>
                                <div className={styles.circle}>8</div>
                                <p>Kioskos Postres</p>
                            </div>
                            <div className={styles.listPing}>
                                <div className={styles.circle}>9</div>
                                <p>VIP Cusqueña</p>
                            </div>
                            <div className={styles.listPing}>
                                <div className={styles.circle}>10</div>
                                <p>Zona Emprendedores</p>
                            </div>
                            <div className={styles.listPing}>
                                <div className={styles.circle}>11</div>
                                <p>Bancas Picnic</p>
                            </div>
                            <div className={styles.listPing}>
                                <div className={styles.circle}>12</div>
                                <p>Toldo Comida</p>
                            </div>
                            <div className={styles.listPing}>
                                <div className={styles.circle}>13</div>
                                <p>Kioskos Comida</p>
                            </div>
                            <div className={styles.listPing}>
                                <div className={styles.circle}>14</div>
                                <p>Escenario</p>
                            </div>
                            <div className={styles.listPing}>
                                <div className={styles.circle}>15</div>
                                <p>Zona VIP</p>
                            </div>
                            <div className={styles.listPing}>
                                <div className={styles.circle}>16</div>
                                <p>Zona Licores</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
