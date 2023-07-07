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
                                                <h3>¿Qué es Maestro del Sabor El Festival?</h3>
                                                <div className='header-arrow'>
                                                    <Image src="/assets/arrow2.svg" width="16" height="8" alt='1 PM - CATA MARIDAJE CEVICHE'/>
                                                </div>
                                            </div>
                                            <div className="panel-content">
                                                <p>
                                                Maestros de Sabor El Festival es una experiencia gastronómica única que reunirá en un solo lugar lo mejor de nuestra comida en un solo lugar. Además, podrás disfrutar de clases de cocina en vivo, música con artistas nacionales e internacionales y celebrarlo junto a Cusqueña.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="panel closed">
                                            <div className="panel-header">
                                                <h3>¿Cuándo y dónde es el evento Maestro del Sabor El Festival?</h3>
                                                <div className='header-arrow'>
                                                    <Image src="/assets/arrow2.svg" width="16" height="8" alt='1 PM - CATA MARIDAJE CEVICHE'/>
                                                </div>
                                            </div>
                                            <div className="panel-content">
                                                <p>
                                                LLa primera edición de Maestros del Sabor El Festival se llevará a cabo el 8 y 9 de julio del 2023 en el Parque de la Reserva. Durante esos dos días podrás disfrutar de los sabores que conquistan el mundo. 
                                                </p>
                                            </div>
                                        </div>

                                        <div className="panel closed">
                                            <div className="panel-header">
                                                <h3>¿Qué tipo de comida habrá en Maestros del Sabor El Festival?</h3>
                                                <div className='header-arrow'>
                                                    <Image src="/assets/arrow2.svg" width="16" height="8" alt='1 PM - CATA MARIDAJE CEVICHE'/>
                                                </div>
                                            </div>
                                            <div className="panel-content">
                                                <p>
                                                En Maestros del Sabor El Festival contaremos con más de 25 restaurantes, especialistas en preparar los mejores sabores. Podrás disfrutar los deliciosos platos de comida marina, nikkei, contemporánea, pollo a la brasa, criolla, pizzas, hamburguesas, postres, entre otras.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="panel closed">
                                            <div className="panel-header">
                                                <h3>¿Qué bandas serán parte de Maestros del Sabor El Festival?</h3>
                                                <div className='header-arrow'>
                                                    <Image src="/assets/arrow2.svg" width="16" height="8" alt='1 PM - CATA MARIDAJE CEVICHE'/>
                                                </div>
                                            </div>
                                            <div className="panel-content">
                                                <p>
                                                En Maestros del Sabor El Festival podrás disfrutar de bandas nacionales e internacionales. El sábado 8 de julio se presentarán Gin Tönic, We the lion, Pedro Suarez-Vertiz La Banda y Pasabordo. El domingo 9 de julio se presentarán Miguel Samamé, Bareto, Grupo Rio y La Mosca Tse Tse. Ademas contaremos con DJ Giorgio el 8/07 y Dj Luigi el 9/07.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="panel closed">
                                            <div className="panel-header">
                                                <h3>¿Dónde puedo comprar las entradas para Maestros del Sabor El Festival?</h3>
                                                <div className='header-arrow'>
                                                    <Image src="/assets/arrow2.svg" width="16" height="8" alt='1 PM - CATA MARIDAJE CEVICHE'/>
                                                </div>
                                            </div>
                                            <div className="panel-content">
                                                <p>
                                                Joinnus es la plataforma en donde podrás encontrar las entradas para Maestros 
                                                del Sabor El Festival. Te dejamos el link que te llevará directamente ahí <a href="https://www.joinnus.com" target='_blank'> www.joinnus.com</a>
                                                </p>
                                                <p>
                                                También puedes en Yape, buscando el evento o entrando a la sección de promociones y eventos a un precio especial.
                                                </p>
                                                <p>
                                                Finalmente, puedes adquirirlas en la puerta del mismo evento (tanto el 8 como el 9 de julio).
                                                </p>
                                            </div>
                                        </div>

                                        <div className="panel closed">
                                            <div className="panel-header">
                                                <h3>¿Maestros del Sabor El Festival contará con estacionamiento? </h3>
                                                <div className='header-arrow'>
                                                    <Image src="/assets/arrow2.svg" width="16" height="8" alt='1 PM - CATA MARIDAJE CEVICHE'/>
                                                </div>
                                            </div>
                                            <div className="panel-content">
                                                <p>
                                                En Maestros del Sabor El Festival vamos a contar con estacionamiento brindando una tarifa plana de S/ 27 en Los Portales. El ingresó vehicular será por Jr. Madre de Dios. Es importante recordar que si tomas no manejes.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="panel closed">
                                            <div className="panel-header">
                                                <h3>¿Maestros del Sabor El Festival es petfriendly? </h3>
                                                <div className='header-arrow'>
                                                    <Image src="/assets/arrow2.svg" width="16" height="8" alt='1 PM - CATA MARIDAJE CEVICHE'/>
                                                </div>
                                            </div>
                                            <div className="panel-content">
                                                <p>
                                                En Maestros del Sabor El Festival no se aceptará el ingreso de mascotas por un tema de seguridad. Les pedimos tomar sus precauciones porque no se podrán hacer excepciones. 
                                                </p>
                                            </div>
                                        </div>

                                        <div className="panel closed">
                                            <div className="panel-header">
                                                <h3>¿Como puedo ganar entradas para Maestros del Sabor El Festival? </h3>
                                                <div className='header-arrow'>
                                                    <Image src="/assets/arrow2.svg" width="16" height="8" alt='1 PM - CATA MARIDAJE CEVICHE'/>
                                                </div>
                                            </div>
                                            <div className="panel-content">
                                                <p>
                                                Solo debes buscar los códigos en las chapas de tus Cusqueña, 
                                                registrarlos en <a href="https://www.cusquena.com" target='_blank'>www.cusquena.com</a> y listo. ¡Ya 
                                                estás participando por entradas para Maestros del Sabor El Festival! 
                                                Esta promoción tiene vigencia hasta el 30.06.23.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="panel closed">
                                            <div className="panel-header">
                                                <h3>¿Está permitido el ingreso de menores a Maestros del Sabor El Festival? </h3>
                                                <div className='header-arrow'>
                                                    <Image src="/assets/arrow2.svg" width="16" height="8" alt='1 PM - CATA MARIDAJE CEVICHE'/>
                                                </div>
                                            </div>
                                            <div className="panel-content">
                                                <p>
                                                Toda la familia es bienvenida a Maestros del Sabor El Festival. Si tus hijos son menores de 12 años pueden ingresar de manera gratuita al evento
                                                </p>
                                            </div>
                                        </div>

                                        <div className="panel closed">
                                            <div className="panel-header">
                                                <h3>¿Está permitido el ingreso de bebidas y alimentos Maestros del Sabor El Festival? </h3>
                                                <div className='header-arrow'>
                                                    <Image src="/assets/arrow2.svg" width="16" height="8" alt='1 PM - CATA MARIDAJE CEVICHE'/>
                                                </div>
                                            </div>
                                            <div className="panel-content">
                                                <p>
                                                No está permitido el ingreso de alimentos y bebidas a Maestros del Sabor El Festival. Todo el consumo debe realizarse adentro del establecimiento.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="panel closed">
                                            <div className="panel-header">
                                                <h3>¿Qué incluye la entrada para Maestros del Sabor El Festival? </h3>
                                                <div className='header-arrow'>
                                                    <Image src="/assets/arrow2.svg" width="16" height="8" alt='1 PM - CATA MARIDAJE CEVICHE'/>
                                                </div>
                                            </div>
                                            <div className="panel-content">
                                                <p>
                                                El costo de la entrada para Maestros del Sabor El Festival incluye todas las experiencias que podrás vivir dentro del festival como la música en vivo, masterclasses y cata maridaje. Recuerda que estas 2 últimas experiencias cuentas con cupos limitados, por lo tanto te sugerimos acercarte con anticipación. 
                                                </p>
                                            </div>
                                        </div>

                                        <div className="panel closed">
                                            <div className="panel-header">
                                                <h3>¿Se puede reingresar al evento Maestros del Sabor El Festival una vez hayas salido? </h3>
                                                <div className='header-arrow'>
                                                    <Image src="/assets/arrow2.svg" width="16" height="8" alt='1 PM - CATA MARIDAJE CEVICHE'/>
                                                </div>
                                            </div>
                                            <div className="panel-content">
                                                <p>
                                                No será permitido el reingreso en Maestros del Sabor el Festival, por lo que te sugerimos revisar a detalle nuestro minuto a minuto para que puedas participar de las experiencias que más desees durante el día.  
                                                </p>
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
