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
                                <Image src="/assets/mapafinal3.png"  width={1500} height={1160} alt='Parque de las Aguas'  />
                            </div>
                        </div>
                        <div className={styles.boxPing}>
                            <div className={styles.listPing}>
                                <div className={styles.circle}>1</div>
                                <p>Pórtico de Ingreso</p>
                            </div>
                            <div className={styles.listPing}>
                                <div className={styles.circle}>2</div>
                                <p>Zona de Recarga</p>
                            </div>
                            <div className={styles.listPing}>
                                <div className={styles.circle}>3</div>
                                <p>Masterclass</p>
                            </div>
                            <div className={styles.listPing}>
                                <div className={styles.circle}>4</div>
                                <p>Zona de descanso</p>
                            </div>
                            <div className={styles.listPing}>
                                <div className={styles.circle}>5</div>
                                <p>Zona de postres</p>
                            </div>
                            <div className={styles.listPing}>
                                <div className={styles.circle}>6</div>
                                <p>Zona de emprendedores</p>
                            </div>
                            <div className={styles.listPing}>
                                <div className={styles.circle}>7</div>
                                <p>Cata y Maridaje</p>
                            </div>
                            <div className={styles.listPing}>
                                <div className={styles.circle}>8</div>
                                <p>Zona Gastronómica</p>
                            </div>
                            <div className={styles.listPing}>
                                <div className={styles.circle}>9</div>
                                <p>Escenario</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
