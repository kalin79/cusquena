import { useEffect, useRef } from 'react'

import Image from 'next/image'


import { gsap } from "gsap/dist/gsap"
import { Draggable } from "gsap/dist/Draggable"



gsap.registerPlugin(Draggable)

import styles from  '../../styles/sass/itinerario.module.sass'
export default function Detalle() {
    let boolInit = useRef(null)
    useEffect( () => {
        if (!boolInit.current){

            boolInit.current = true
            initAccordion()
            
        }
    },[])
    
    const initAccordion = () => {
        let elementAccordion = document.querySelectorAll('#preguntasAccordion .panel.closed')
        elementAccordion.forEach( (element)=> {
            //assign as variable
            let panelContent = element.querySelector('.panel-content')
            let headerArrow = element.querySelector('.header-arrow')
            let tl = gsap.timeline({ paused: true })
            tl
                .to(headerArrow, {duration: .25, rotation: 180})
                .to(panelContent, { duration: .25, autoAlpha: 1, height: 'auto' })
            
            //start timeline resting in reversed state
            tl.reverse()
            // console.log(panelContent)
            element.addEventListener("click", () => {
                //toggle reversed property of my timeline
                tl.reversed(!tl.reversed())
            })
        })
        // console.log(elementAccordion)
    }

    return (
        <>
            <div className={styles.boxContent}>
                
                <div className={styles.containerInfo}>
                   
                    <div className={styles.boxEventosItinerario}>
                        <div className='container'>
                            <div className={styles.boxExperiencia}>
                                <div className={styles.boxTitle}>
                                    <h2>Preguntas Frecuentes</h2>
                                    <div className={styles.rombito}></div>
                                    <div className={`${styles.rombito} ${styles.pos2}`}></div>
                                </div>
                                <div className={styles.boxAccordion} id="preguntasAccordion">

                                    <div className={`iconRombo claro ${styles.pos1}`}></div>
                                    <div className={`iconRombo claro small ${styles.pos2}`}></div>


                                    <div className="accordion">

                                        <div className="panel closed">
                                            <div className="panel-header">
                                                <h3>Pregunta 1</h3>
                                                <div className='header-arrow'>
                                                    <Image src="/assets/arrow2.svg" width="16" height="8" alt='1 PM - CATA MARIDAJE CEVICHE'/>
                                                </div>
                                            </div>
                                            <div className="panel-content">
                                                <p>
                                                    La frescura y acidez del ceviche, hecho con 
                                                    pescado blanco marinado en limón, se equilibra 
                                                    bien con la suavidad y el sabor refrescante 
                                                    de la Cerveza Cusqueña. La cerveza también 
                                                    ayuda a resaltar los sabores cítricos y 
                                                    marinos del ceviche.
                                                </p>
                                                <p>Horario: 13 pm - 13:45 pm</p>
                                                <p>Zona: Zona Cusquena de Trigo</p>
                                                <p>Capacidad: 30 personas</p>
                                            </div>
                                        </div>

                                        <div className="panel closed">
                                            <div className="panel-header">
                                                <h3>Pregunta 2</h3>
                                                <div className='header-arrow'>
                                                    <Image src="/assets/arrow2.svg" width="16" height="8" alt='1 PM - CATA MARIDAJE CEVICHE'/>
                                                </div>
                                            </div>
                                            <div className="panel-content">
                                                <p>
                                                Los anticuchos son brochetas de carne 
                                                marinadas y asadas, y son otro clásico de la 
                                                cocina peruana. La Cerveza Cusqueña se 
                                                complementa muy bien con los anticuchos, 
                                                ya que su carácter ligeramente malteado y 
                                                suave amargor ayudan a realzar los sabores 
                                                de la carne a la parrilla.
                                                </p>
                                                <p>Chef 1: Virgilio Martínez</p>
                                                <p>Horario: 14:00 pm - 14:45 pm</p>
                                                <p>Zona: Cusqueña Malta</p>
                                                <p>Capacidad: 35 personas</p>
                                            </div>
                                        </div>

                                        <div className="panel closed">
                                            <div className="panel-header">
                                                <h3>Pregunta 3</h3>
                                                <div className='header-arrow'>
                                                    <Image src="/assets/arrow2.svg" width="16" height="8" alt='1 PM - CATA MARIDAJE CEVICHE'/>
                                                </div>
                                            </div>
                                            <div className="panel-content">
                                                <p>
                                                El lomo saltado es un plato peruano de carne 
                                                salteada con cebolla, tomate y ají amarillo, 
                                                servido con arroz y papas fritas. La Cerveza 
                                                Cusqueña es una buena opción para acompañar 
                                                este plato debido a su suave sabor maltoso 
                                                y su amargor equilibrado
                                                </p>
                                                <p>Horarios: 15:00 pm - 15:45 pm</p>
                                                <p>Zona: Zona Cusqueña Malta</p>
                                                <p>Capacidad: 30 personas</p>
                                            </div>
                                        </div>
                                        
                                        



                                    </div>


                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
        </>
    )
}
