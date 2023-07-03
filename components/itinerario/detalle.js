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
    let boolInit = useRef(null)
    useEffect( () => {
        if (!boolInit.current){

            boolInit.current = true
            btnTab1.current.style.color = '#2D2A26'
            document.body.addEventListener("click", onClickTab)
            initAccordion()
            initSlider('#sliderConcierto')
        }
    },[])
    

    const initSlider = (idBox) => {

        const slides = document.querySelectorAll(`${idBox} section`)
        const container = document.querySelector(`${idBox} .panelWrap`)
        let dur = 0.5
        let offsets = []
        let oldSlide = 0
        let activeSlide = 0
        let dots = document.querySelector(`${idBox} .dots`)
        let navDots = []
        let iw = window.innerWidth
        let autoplay = null
        
        //   document.querySelector("#leftArrow").addEventListener("click", slideAnim);
        //   document.querySelector("#rightArrow").addEventListener("click", slideAnim);
          
        // set slides background colors and create the nav dots
        for (let i = 0; i < slides.length; i++) {
            // gsap.set(slides[i], { backgroundColor: colorArray[i] })
            let newDot = document.createElement("div")
            newDot.className = "dot"
            newDot.index = i
            navDots.push(newDot)
            newDot.addEventListener("click", slideAnim)
            dots.appendChild(newDot)
        }
          
        // get elements positioned
        gsap.set(".dots", { xPercent: -50 })
          
        // lower screen animation with nav dots and rotating titles
        const dotAnim = gsap.timeline({ paused: true, repeat: -1 });
        dotAnim
            .to(
                ".dot",
                {
                    stagger: { each: 1, yoyo: true, repeat: 1 },
                    scale: 2.1,
                    rotation: 0.1,
                    ease: "none",
                    backgroundColor: '#BC8B44',
                },
                0.5
            )
            .time(1)
          
        // make the whole thing draggable
        let dragMe = Draggable.create(container, {
            type: "x",
            edgeResistance: 1,
            snap: offsets,
            inertia: true,
            bounds: "#masterWrap",
            onDrag: tweenDot,
            onThrowUpdate: tweenDot,
            onDragEnd: slideAnim,
            allowNativeTouchScrolling: false,
            zIndexBoost: false
        })
          
        dragMe[0].id = "dragger"
        sizeIt()


        const autoPlaySlide = () => {
            autoplay = setInterval(() => {
                autoPlaySlider()
            }, 3000)
        }

        const stopAutoPlaySlide = () => {
            clearInterval(autoplay)
        }


        function autoPlaySlider() {
            
            activeSlide++
            // console.log(activeSlide)
            // console.log(offsets.length)
            // make sure we're not past the end or beginning slide
            // activeSlide = activeSlide < 0 ? 0 : activeSlide
            // activeSlide = activeSlide > slides.length - 1 ? slides.length - 1 : activeSlide
            if (offsets.length === activeSlide) {
                oldSlide = 0
                activeSlide = 0
                // return
            }
            oldSlide = activeSlide
            gsap.to(container, { x: offsets[activeSlide], onUpdate: tweenDot, duration: dur })
            

        }
          
        // main action check which of the 4 types of interaction called the function
        function slideAnim(e) {
            stopAutoPlaySlide()
            oldSlide = activeSlide
            // dragging the panels
            if (this.id === "dragger") {
                activeSlide = offsets.indexOf(this.endX)
                // console.log(this.endX)
            } else {
                if (gsap.isTweening(container)) {
                    return
                }
                // arrow clicks
                //   if (this.id === "leftArrow" || this.id === "rightArrow") {
                //     activeSlide =
                //       this.id === "rightArrow" ? (activeSlide += 1) : (activeSlide -= 1);
                //     // click on a dot
                //   } else 
                if (this.className === "dot") {
                    // console.log(this.index)
                    activeSlide = this.index
                    // scrollwheel
                } else {
                    // si es que quiero que se desplaza al bajar o subir el scroll
                    //activeSlide = e.deltaY > 0 ? (activeSlide += 1) : (activeSlide -= 1)
                }
            }
            // make sure we're not past the end or beginning slide
            activeSlide = activeSlide < 0 ? 0 : activeSlide
            activeSlide = activeSlide > slides.length - 1 ? slides.length - 1 : activeSlide
            if (oldSlide === activeSlide) {
                // alert(1)
                return
            }
            // console.log(this.id)
            // if we're dragging we don't animate the container
            if (this.id != "dragger") {
                gsap.to(container, { x: offsets[activeSlide], onUpdate: tweenDot, duration: dur })
            }

            // autoPlaySlide()
        }
          
        // update the draggable element snap points
        function sizeIt() {
            offsets = []
            iw = window.innerWidth
            gsap.set("#panelWrap", { width: slides.length * iw })
            gsap.set(slides, { width: iw })
            for (let i = 0; i < slides.length; i++) {
                offsets.push(-slides[i].offsetLeft)
            }
            gsap.set(container, { x: offsets[activeSlide] })
            dragMe[0].vars.snap = offsets
        }
          
        gsap.set(".hideMe", { opacity: 1 })
        // window.addEventListener("wheel", slideAnim)
        window.addEventListener("resize", sizeIt)
        
          
        // update dot animation when dragger moves
        function tweenDot() {
            // console.log('aqui debemos aplicar la clase de activado')
            // console.log(Math.abs(gsap.getProperty(container, "x") / iw) + 1)
            // console.log(dotAnim)
            gsap.set(dotAnim, {
              time: Math.abs(gsap.getProperty(container, "x") / iw) + 1
            })
        }
        autoPlaySlide()
        // autoPlay()

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
            // console.log(panelContent)
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
        if ((btnTab1.current != null) && (btnTab1.current.contains(element))){
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
        if ((btnTab1.current != null) && (btnTab2.current.contains(element))) {
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
                
                <div className={styles.containerInfo}>
                    <div className='container'>
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
                    </div>
                    <div className={styles.boxEventosItinerario}>
                        <div className='container'>
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
                        </div>
                        <div className={styles.boxConcierto}>
                            <div className={styles.boxTitle}>
                                <h2>conciertos</h2>
                                <div className={styles.rombito}></div>
                                <div className={`${styles.rombito} ${styles.pos2}`}></div>
                            </div>
                            <div id="sliderConcierto" className={`containerSliders  ${styles.containerSliders}`} >
                                <div className={`iconRombo claro ${styles.posRombo}`}></div>
                                <div className={`iconRombo claro small ${styles.posRombo2}`}></div>
                                <div className={`iconRombo claro small ${styles.posRombo3}`}></div>
                                <div className="hideMe">
                                    <div id="masterWrap" className='masterWrap'>
                                        <div id="panelWrap" className='panelWrap'>
                                            <section>
                                                <div className={styles.sombraRombo}>
                                                    <div className={styles.boxConciertoSlider}>
                                                        <Image src="/assets/bareto1.png" width = '276' height = '276' alt='Bareto' />
                                                        <div className={styles.conciertoContent}>
                                                            <h3>bareto</h3>
                                                            <p>06:00 PM</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                            <section>
                                                <div className={styles.sombraRombo}>
                                                    <div className={styles.boxConciertoSlider}>
                                                        <Image src="/assets/bareto2.png" width = '276' height = '276' alt='la mosca tse-tse' />
                                                        <div className={styles.conciertoContent}>
                                                            <h3>la mosca tse-tse</h3>
                                                            <p>07:25 PM</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                            <section>
                                                <div className={styles.sombraRombo}>
                                                    <div className={styles.boxConciertoSlider}>
                                                        <Image src="/assets/bareto3.png" width = '276' height = '276' alt='miguel samame' />
                                                        <div className={styles.conciertoContent}>
                                                            <h3>miguel samame</h3>
                                                            <p>08:25 PM</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                            <section>
                                                <div className={styles.sombraRombo}>
                                                    <div className={styles.boxConciertoSlider}>
                                                        <Image src="/assets/bareto4.png" width = '276' height = '276' alt='Rio' />
                                                        <div className={styles.conciertoContent}>
                                                            <h3>rio</h3>
                                                            <p>08:25 PM</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                            <section>
                                                <div className={styles.sombraRombo}>
                                                    <div className={styles.boxConciertoSlider}>
                                                        <Image src="/assets/bareto5.png" width = '276' height = '276' alt='gin tonic' />
                                                        <div className={styles.conciertoContent}>
                                                            <h3>gin tonic</h3>
                                                            <p>06:45 PM</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                            <section>
                                                <div className={styles.sombraRombo}>
                                                    <div className={styles.boxConciertoSlider}>
                                                        <Image src="/assets/bareto6.png" width = '276' height = '276' alt='DJ Giorgio' />
                                                        <div className={styles.conciertoContent}>
                                                            <h3>DJ Giorgio</h3>
                                                            <p>08:25 PM</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                            <section>
                                                <div className={styles.sombraRombo}>
                                                    <div className={styles.boxConciertoSlider}>
                                                        <Image src="/assets/bareto7.png" width = '276' height = '276' alt='DJ luigi' />
                                                        <div className={styles.conciertoContent}>
                                                            <h3>DJ luigi</h3>
                                                            <p>08:25 PM</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                            <section>
                                                <div className={styles.sombraRombo}>
                                                    <div className={styles.boxConciertoSlider}>
                                                        <Image src="/assets/bareto8.png" width = '276' height = '276' alt='PSV' />
                                                        <div className={styles.conciertoContent}>
                                                            <h3>PSV</h3>
                                                            <p>08:25 PM</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                            <section>
                                                <div className={styles.sombraRombo}>
                                                    <div className={styles.boxConciertoSlider}>
                                                        <Image src="/assets/bareto9.png" width = '276' height = '276' alt='we the lion' />
                                                        <div className={styles.conciertoContent}>
                                                            <h3>we the lion</h3>
                                                            <p>08:25 PM</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                    <div className="dots">
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
