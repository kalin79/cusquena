import { useEffect, useRef } from 'react'

import Image from 'next/image'

import { gsap } from "gsap/dist/gsap"
import { Draggable } from "gsap/dist/Draggable"

gsap.registerPlugin(Draggable)

import styles from  '../../styles/sass/itinerario.module.sass'
export default function Detalle() {
    const btnTab1 = useRef(null)
    const btnTab2 = useRef(null)
    const tabActive = useRef(null)
    let boolInit = false
    useEffect( () => {
        if (!boolInit){

            boolInit = true
            btnTab1.current.style.color = '#2D2A26'
            document.body.addEventListener("click", onClickTab)
            initAccordion()
            initSlider()
        }
    },[])
    

    const initSlider = () => {


        let slideDelay = 4
        let slideDuration = 0.3
        let wrap = true

        let slides = document.querySelectorAll("#sliderConcierto .slide")
        let prevButton = document.querySelector("#sliderConcierto .prevButton")
        let nextButton = document.querySelector("#sliderConcierto .nextButton")
        let dotsContent = document.querySelector("#sliderConcierto .dots")
        let progressWrap = gsap.utils.wrap(0, 1)

        let numSlides = slides.length
        // console.log('numSlides', numSlides)
        slides.forEach( function(elem){
            let element = document.createElement('div')
            element.className = 'dot'
            dotsContent.appendChild(element)
       })
        gsap.set(slides, {
            backgroundColor: "random([red, blue, green, purple, orange, yellow, lime, pink])",
            xPercent: i => i * 100
        })

        var wrapX = gsap.utils.wrap(-100, (numSlides - 1) * 100)
        var timer = gsap.delayedCall(slideDelay, autoPlay)

        var animation = gsap.to(slides, {
            xPercent: "+=" + (numSlides * 100),
            duration: 1,
            ease: "none",
            paused: true,
            repeat: -1,
            modifiers: {
                xPercent: wrapX
            }
        })

        var proxy = document.createElement("div")
        var slideAnimation = gsap.to({}, {})
        var slideWidth = 0
        var wrapWidth = 0

        var draggable = new Draggable(proxy, {
            trigger: "#sliderConcierto .sliderContent",
            inertia: true,
            onPress: updateDraggable,
            onDrag: updateProgress,
            onThrowUpdate: updateProgress,
            snap: {     
                x: snapX
            }
        })

        resize()

        window.addEventListener("resize", resize)

        let dots = document.querySelectorAll("#sliderConcierto .dots .dot")

        dots.forEach(function (dot) {
            dot.addEventListener("click", function(e) {
                console.log(e.target)
                console.log(e)
                // selectSlide(indice)
            })
        })



        prevButton.addEventListener("click", function() {
            animateSlides(1)
        })

        nextButton.addEventListener("click", function() {
            animateSlides(-1)
        })

        function updateDraggable() {
            timer.restart(true)
            slideAnimation.kill()
            this.update()
        }

        function animateSlides(direction) {
            timer.restart(true)
            slideAnimation.kill()
            var x = snapX(gsap.getProperty(proxy, "x") + direction * slideWidth)
            console.log(proxy)
            console.log(x)
            slideAnimation = gsap.to(proxy, {
                x: x,
                duration: slideDuration,
                onUpdate: updateProgress
            })
        }

        function autoPlay() {  
            if (draggable.isPressed || draggable.isDragging || draggable.isThrowing) {
                timer.restart(true)
            } else {
                animateSlides(-1)
            }
        }

        function updateProgress() { 
            animation.progress(progressWrap(gsap.getProperty(proxy, "x") / wrapWidth))
        }

        function snapX(value) {
            let snapped = gsap.utils.snap(slideWidth, value)
            return wrap ? snapped : gsap.utils.clamp(-slideWidth * (numSlides - 1), 0, snapped)
        }

        function resize() {
            var norm = (gsap.getProperty(proxy, "x") / wrapWidth) || 0
            slideWidth = slides[0].offsetWidth
            wrapWidth = slideWidth * numSlides
            wrap || draggable.applyBounds({minX: -slideWidth * (numSlides - 1), maxX: 0})
            gsap.set(proxy, {
                x: norm * wrapWidth
            })
            animateSlides(0)
            slideAnimation.progress(1)
        }


    }

    const initAccordion = () => {
        let elementAccordion = document.querySelectorAll('#experienciasAccordion .panel.closed')
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
            console.log(panelContent)
            element.addEventListener("click", () => {
                //toggle reversed property of my timeline
                tl.reversed(!tl.reversed())
            })
        })
        // console.log(elementAccordion)
    }

    const onClickTab = (e) => {
        const GSAP = require("gsap/CSSRulePlugin")
        const { CSSRulePlugin } = GSAP
        gsap.registerPlugin(CSSRulePlugin)
        const element = e.target
        // console.log(btnTab1.current.contains(element))
        if (btnTab1.current.contains(element)) {
            // alert(1)
            gsap.to(tabActive.current, {left: '0%', duration: 0.5})
            gsap.to(btnTab1.current, {
                css:{
                    color: '#2D2A26'
                }
            })
            gsap.to(btnTab2.current, {
                css:{
                    color: '#D2AF75'
                }
            })
            // btnTab1.current.style.color = '#2D2A26'
            // btnTab2.current.style.color = '#D2AF75'

        }
        if (btnTab2.current.contains(element)) {
            // alert(2)
            gsap.to(tabActive.current, {left: '50%', duration: 0.5})
            // btnTab2.current.style.color = '#2D2A26'
            // btnTab1.current.style.color = '#D2AF75'
            gsap.to(btnTab2.current, {
                css:{
                    color: '#2D2A26'
                }
            })
            gsap.to(btnTab1.current, {
                css:{
                    color: '#D2AF75'
                }
            })
        }

    }
    return (
        <>
            <div className={styles.boxContent}>
                <div className='container'>
                    <div className={styles.containerInfo}>
                        <h1>SELECCIONE DÍA DEL EVENTO</h1>
                        <div className={styles.boxNavTabs}>
                            <div className={styles.navTabs}>
                                <button ref={btnTab1}>día 8 de julio</button>
                                <button ref={btnTab2}>día 9 de julio</button>
                                <div ref={tabActive} className={styles.activeNav}></div>
                                <div className={`${styles.rombito}`}></div>
                                <div className={`${styles.rombito} ${styles.pos2}`}></div>
                            </div>
                        </div>
                        <div className={styles.boxIconInca}>
                            <Image  src="/assets/inca.svg" width="90" height="25" alt='Simbolo Inca' />
                        </div>
                        <div className={styles.boxEventosItinerario}>
                            <div className={styles.boxExperiencia}>
                                <div className={styles.boxTitle}>
                                    <h2>Experiencias</h2>
                                    <div className={styles.rombito}></div>
                                    <div className={`${styles.rombito} ${styles.pos2}`}></div>
                                </div>
                                <div className={styles.boxAccordion} id="experienciasAccordion">



                                    <div className="accordion">


                                        <div className="panel closed">
                                            <div className="panel-header">
                                                <h3>1 PM - CATA MARIDAJE CEVICHE</h3>
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
                                                <h3>2 PM - MASTERCLASS ANTICUCHOS</h3>
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
                                                <h3>3 PM - CATA MARIDAJE LOMO SALTADO</h3>
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
                            <div className={styles.boxConcierto}>
                                <div className={styles.boxTitle}>
                                    <h2>conciertos</h2>
                                    <div className={styles.rombito}></div>
                                    <div className={`${styles.rombito} ${styles.pos2}`}></div>
                                </div>
                                <div id="sliderConcierto" className={styles.containerSliders}>
                                    <div className='sliderContent'>
                                        <div className='sliderInner'>
                                            <div className='slide'>
                                                1
                                            </div>
                                            <div className='slide'>
                                                2
                                            </div>
                                            <div className='slide'>
                                                3
                                            </div>
                                        </div>
                                    </div>
                                    <div className='controls'>
                                        <button className='prevButton'>Prev</button>
                                        <button className='nextButton'>Next</button>
                                    </div>
                                    <div className='dots'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
