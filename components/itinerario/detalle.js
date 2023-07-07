import { useEffect, useRef, useState } from 'react'

import Image from 'next/image'

import SectionConcierto from '../itinerario/concierto'
import SectionConcierto2 from '../itinerario/concierto2'
import PanelIninterario from  '../itinerario/panel'


import { gsap } from "gsap/dist/gsap"
import { Draggable } from "gsap/dist/Draggable"



gsap.registerPlugin(Draggable)

import styles from  '../../styles/sass/itinerario.module.sass'
export default function Detalle() {
    const btnTab1 = useRef(null)
    const btnTab2 = useRef(null)
    const tabActive = useRef(null)
    let boolInit = useRef(null)

    const [listItinerario, setListItinerario] = useState([
        {
            "id": 1,
            "titulo": "Cata y maridaje: Alejo Acuña",
            "hora": "2:00 PM",
            "descripcion": "Vive una experiencia única donde conocerás las características de nuestras variedades y como maridar correctamente cada una de ellas con nuestra gastronomía peruana.",
            "horario": "2:00 PM – 3:00 PM 4:00 PM – 5:00 PM",
            "zona": "",
            "capacidad": ""
        },
        {
            "id": 2,
            "titulo": "Masterclass: James Berckemeyer",
            "hora": "3:00 PM",
            "descripcion": "Conoce los secretos culinarios de uno de los chefs más reconocidos del país. Anímate a preparar y vivir una experiencia a base de Leche de Tigre junto a James Berckemeyer, dueño y chef del restaurante Cosme.",
            "horario": "3:00 PM – 4:00 PM",
            "zona": "",
            "capacidad": ""
        },
        {
            "id": 4,
            "titulo": "Masterclass: Javier Valdez",
            "hora": "5:00 PM",
            "descripcion": "El ganador de Maestros del Sabor 2021, llega para compartir una experiencia gastronómica que conquistará tu paladar. Acompaña a Javier Valdez a preparar unos crujientes enrollados de trucha, en costra de masa filo y perejil, acompañado de un risotto de zapallo loche al perfume de oliva. Siempre maridado con una Cusqueña bien heladita.",
            "horario": "5:00 PM – 6:00 PM",
            "zona": "",
            "capacidad": ""
        }
    ])
    const [listItinerario2, setListItinerario2] = useState([
        {
            id: 3,
            titulo: "Masterclass: James Berckemeyer",
            hora: "2:00 PM",
            descripcion: "Conoce los secretos culinarios de uno de los chefs más reconocidos del país. Anímate a preparar y vivir una experiencia a base de Leche de Tigre junto a James Berckemeyer, dueño y chef del restaurante Cosme.",
            horario: "2:00 PM - 3:00 PM",
            zona: "",
            capacidad: ""
        },
        {
            id: 5,
            titulo: "Cata y maridaje: Alejo Acuña",
            hora: "3:00 PM",
            descripcion: "Vive una experiencia única donde conocerás las características de nuestras variedades y como maridar correctamente cada una de ellas con nuestra gastronomía peruana.",
            horario: "3:00 PM -4:00 PM 5:00 PM - 6:00 PM",
            zona: "",
            capacidad: "40 personas"
        },
        {
            id: 6,
            titulo: "Masterclass: Javier Valdez",
            hora: "4:00 PM",
            descripcion: "El ganador de Maestros del Sabor 2021, llega para compartir una experiencia gastronómica que conquistará tu paladar. Acompaña a Javier Valdez a preparar unos escalopines de ternera, acompañada de un chutney de lúcuma y majadito de yuca al anís estrella. Siempre maridado con una Cusqueña bien heladita.",
            horario: "4:00 PM - 5:00 PM",
            zona: "",
            capacidad: ""
        },
    ])
    const [listConcierto, setListConcierto] = useState([
        {
            "id": 3,
            "titulo": "GIN TONIC",
            "horario": "6:00 PM",
            "image_pc": "https://back.mds-cusquena.com/images/evento/1/concierto/3/3-desk-1688474121.png",
            "imagemobile": "https://back.mds-cusquena.com/images/evento/1/concierto/3/3-mb-1688474121.png"
        },
        {
            "id": 6,
            "titulo": "WE THE LION",
            "horario": "7:30 PM",
            "image_pc": "https://back.mds-cusquena.com/images/evento/1/concierto/6/6-desk-1688702659.png",
            "imagemobile": "https://back.mds-cusquena.com/images/evento/1/concierto/6/6-mb-1688702659.png"
        },
        {
            "id": 7,
            "titulo": "PEDRO SUAREZ VERTIZ - LA BANDA",
            "horario": "9:00 PM",
            "image_pc": "https://back.mds-cusquena.com/images/evento/1/concierto/7/7-desk-1688702731.png",
            "imagemobile": "https://back.mds-cusquena.com/images/evento/1/concierto/7/7-mb-1688702731.png"
        },
        {
            "id": 14,
            "titulo": "DJ GIORGIO",
            "horario": "A LO LARGO DEL FESTIVAL",
            "image_pc": "https://back.mds-cusquena.com/images/evento/1/concierto/14/14-desk-1688703444.png",
            "imagemobile": "https://back.mds-cusquena.com/images/evento/1/concierto/14/14-mb-1688703444.png"
        }
    ])
    const [listConcierto2, setListConcierto2] = useState([
        {
            "id": 8,
            "titulo": "MIGUEL SAMAMÉ",
            "horario": "6:00 PM",
            "image_pc": "https://back.mds-cusquena.com/images/evento/2/concierto/8/8-desk-1688703103.png",
            "imagemobile": "https://back.mds-cusquena.com/images/evento/2/concierto/8/8-mb-1688703103.png"
        },
        {
            "id": 9,
            "titulo": "BARETO",
            "horario": "7:00 PM",
            "image_pc": "https://back.mds-cusquena.com/images/evento/2/concierto/9/9-desk-1688703186.png",
            "imagemobile": "https://back.mds-cusquena.com/images/evento/2/concierto/9/9-mb-1688703186.png"
        },
        {
            "id": 11,
            "titulo": "LA MOSCA TSE TSE",
            "horario": "10:30 PM",
            "image_pc": "https://back.mds-cusquena.com/images/evento/2/concierto/11/11-desk-1688703270.png",
            "imagemobile": "https://back.mds-cusquena.com/images/evento/2/concierto/11/11-mb-1688703270.png"
        },
        {
            "id": 12,
            "titulo": "GRUPO RIO",
            "horario": "8:30 PM",
            "image_pc": "https://back.mds-cusquena.com/images/evento/2/concierto/12/12-desk-1688703340.png",
            "imagemobile": "https://back.mds-cusquena.com/images/evento/2/concierto/12/12-mb-1688703340.png"
        },
        {
            "id": 13,
            "titulo": "DJ LUIGI",
            "horario": "A LO LARGO DEL FESTIVAL",
            "image_pc": "https://back.mds-cusquena.com/images/evento/2/concierto/13/13-desk-1688703380.png",
            "imagemobile": "https://back.mds-cusquena.com/images/evento/2/concierto/13/13-mb-1688703380.png"
        }
    ])
    const [listConcierto3, setListConcierto3] = useState([
        {
            "id": 3,
            "titulo": "GIN TONIC",
            "horario": "6:00 PM",
            "image_pc": "https://back.mds-cusquena.com/images/evento/1/concierto/3/3-desk-1688474121.png",
            "imagemobile": "https://back.mds-cusquena.com/images/evento/1/concierto/3/3-mb-1688474121.png"
        },
        {
            "id": 6,
            "titulo": "WE THE LION",
            "horario": "7:30 PM",
            "image_pc": "https://back.mds-cusquena.com/images/evento/1/concierto/6/6-desk-1688702659.png",
            "imagemobile": "https://back.mds-cusquena.com/images/evento/1/concierto/6/6-mb-1688702659.png"
        },
        {
            "id": 7,
            "titulo": "PEDRO SUAREZ VERTIZ - LA BANDA",
            "horario": "9:00 PM",
            "image_pc": "https://back.mds-cusquena.com/images/evento/1/concierto/7/7-desk-1688702731.png",
            "imagemobile": "https://back.mds-cusquena.com/images/evento/1/concierto/7/7-mb-1688702731.png"
        },
        {
            "id": 14,
            "titulo": "DJ GIORGIO",
            "horario": "A LO LARGO DEL FESTIVAL",
            "image_pc": "https://back.mds-cusquena.com/images/evento/1/concierto/14/14-desk-1688703444.png",
            "imagemobile": "https://back.mds-cusquena.com/images/evento/1/concierto/14/14-mb-1688703444.png"
        }
    ])

    const [listConcierto4, setListConcierto4] = useState([
        {
            "id": 8,
            "titulo": "MIGUEL SAMAMÉ",
            "horario": "6:00 PM",
            "image_pc": "https://back.mds-cusquena.com/images/evento/2/concierto/8/8-desk-1688703103.png",
            "imagemobile": "https://back.mds-cusquena.com/images/evento/2/concierto/8/8-mb-1688703103.png"
        },
        {
            "id": 9,
            "titulo": "BARETO",
            "horario": "7:00 PM",
            "image_pc": "https://back.mds-cusquena.com/images/evento/2/concierto/9/9-desk-1688703186.png",
            "imagemobile": "https://back.mds-cusquena.com/images/evento/2/concierto/9/9-mb-1688703186.png"
        },
        {
            "id": 11,
            "titulo": "LA MOSCA TSE TSE",
            "horario": "10:30 PM",
            "image_pc": "https://back.mds-cusquena.com/images/evento/2/concierto/11/11-desk-1688703270.png",
            "imagemobile": "https://back.mds-cusquena.com/images/evento/2/concierto/11/11-mb-1688703270.png"
        },
        {
            "id": 12,
            "titulo": "GRUPO RIO",
            "horario": "8:30 PM",
            "image_pc": "https://back.mds-cusquena.com/images/evento/2/concierto/12/12-desk-1688703340.png",
            "imagemobile": "https://back.mds-cusquena.com/images/evento/2/concierto/12/12-mb-1688703340.png"
        },
        {
            "id": 13,
            "titulo": "DJ LUIGI",
            "horario": "A LO LARGO DEL FESTIVAL",
            "image_pc": "https://back.mds-cusquena.com/images/evento/2/concierto/13/13-desk-1688703380.png",
            "imagemobile": "https://back.mds-cusquena.com/images/evento/2/concierto/13/13-mb-1688703380.png"
        }
    ])


    // console.log(itinerarios[1].experiencias)
    // console.log(listItinerario)

    useEffect( () => {
        
        if (!boolInit.current){
            boolInit.current = true
            // const nuevosItinerarios = itinerarios[1].experiencias
            // const nuevosItinerarios2 = itinerarios[0].experiencias
            // const nuevosConciertos = itinerarios[1].conciertos
            // const nuevosConciertos2 = itinerarios[0].conciertos
            // const nuevosConciertos3 = itinerarios[0].conciertos

            // setListItinerario(nuevosItinerarios)
            // setListItinerario2(nuevosItinerarios2)
            // setListConcierto(nuevosConciertos)
            // setListConcierto2(nuevosConciertos2)
            // setListConcierto3(nuevosConciertos3)
            
            
            btnTab1.current.style.color = '#2D2A26'
            document.body.addEventListener("click", onClickTab)
            
            setTimeout(()=>{
                initAccordion('tabAccordion1')
                initAccordion('tabAccordion2')
                actualizarItinerario(1,1)    
            },30)
            setTimeout(()=>{
                initSlider('#sliderConcierto')
                initSlider2('#sliderConcierto2')
            },1000)
            initConciertoPC()
            initConciertoPC2()

            
        }
    },[])
    

    const initConciertoPC = () => {
        let conciertoDrag = document.getElementById('conciertoDrag')
        let conciertoMoveDrag = document.getElementById('conciertoMoveDrag')
        let navDrag = Draggable.create(conciertoMoveDrag, {
            edgeResistance:0.5,
            bounds: conciertoDrag,
            type: "x", 
            inertia: true
        })
    }
    const initConciertoPC2 = () => {
        let conciertoDrag = document.getElementById('conciertoDrag2')
        let conciertoMoveDrag = document.getElementById('conciertoMoveDrag2')
        let navDrag = Draggable.create(conciertoMoveDrag, {
            edgeResistance:0.5,
            bounds: conciertoDrag,
            type: "x", 
            inertia: true
        })
    }

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
            let newDot = document.createElement(`div`)
            newDot.className = "dot"
            newDot.index = i
            navDots.push(newDot)
            // newDot.addEventListener("click", slideAnim)
            dots.appendChild(newDot)
            // console.log(dots)
        }
        // console.log(dots.childNodes.length)
        setTimeout( () => {
            for (let x = 0; x < dots.childNodes.length; x++) {
                dots.childNodes[x].addEventListener("click", slideAnim)
            }
        },10)
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
        sizeIt(idBox)


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
            // console.log('l',offsets.length)
            // console.log('off',offsets)
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
            // console.log(oldSlide)
            // console.log(this)
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
        function sizeIt(idBox) {
            offsets = []
            iw = window.innerWidth
            gsap.set("#panelWrap", { width: slides.length * iw })
            // console.log('s1',slides)
            gsap.set(slides, { width: iw })
            for (let i = 0; i < slides.length; i++) {
                // console.log('s1',-slides[i].offsetLeft)
                offsets.push(-slides[i].offsetLeft)
            }
            gsap.set(container, { x: offsets[activeSlide] })
            dragMe[0].vars.snap = offsets
        }
          
        gsap.set(`${idBox} .hideMe`, { opacity: 1 })
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

    const initSlider2 = (idBox) => {

        const slides = document.querySelectorAll(`${idBox} section`)
        const container = document.querySelector(`${idBox} .panelWrap2`)
        let dur = 0.5
        let offsets = []
        let oldSlide = 0
        let activeSlide = 0
        let dots = document.querySelector(`${idBox} .dots2`)
        let navDots = []
        let iw = window.innerWidth
        let autoplay = null
        
        //   document.querySelector("#leftArrow").addEventListener("click", slideAnim);
        //   document.querySelector("#rightArrow").addEventListener("click", slideAnim);
          
        // set slides background colors and create the nav dots
        for (let i = 0; i < slides.length; i++) {
            // gsap.set(slides[i], { backgroundColor: colorArray[i] })
            let newDot = document.createElement(`div`)
            newDot.className = "dot2"
            newDot.index = i
            navDots.push(newDot)
            newDot.addEventListener("click", slideAnim2)
            dots.appendChild(newDot)
            // console.log(dots)
        }
        // console.log(dots.childNodes.length)
        
        // get elements positioned
        gsap.set(".dots2", { xPercent: -50 })
          
        // lower screen animation with nav dots and rotating titles
        const dotAnim2 = gsap.timeline({ paused: true, repeat: -1 });
        dotAnim2
            .to(
                ".dot2",
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
            bounds: "#masterWrap2",
            onDrag: tweenDot2,
            onThrowUpdate: tweenDot2,
            onDragEnd: slideAnim2,
            allowNativeTouchScrolling: false,
            zIndexBoost: false
        })
          
        dragMe[0].id = "dragger"
        sizeIt2(idBox)


        const autoPlaySlide2 = () => {
            autoplay = setInterval(() => {
                autoPlaySlider2()
            }, 3000)
        }

        const stopAutoPlaySlide2 = () => {
            clearInterval(autoplay)
        }


        function autoPlaySlider2() {
            
            activeSlide++
            // console.log('activeSlide',activeSlide)
            // console.log(container)
            // console.log(offsets)
            // console.log('l',offsets.length)
            // make sure we're not past the end or beginning slide
            // activeSlide = activeSlide < 0 ? 0 : activeSlide
            // activeSlide = activeSlide > slides.length - 1 ? slides.length - 1 : activeSlide
            if (offsets.length === activeSlide) {
                oldSlide = 0
                activeSlide = 0
                // return
            }
            oldSlide = activeSlide
            gsap.to(container, { x: offsets[activeSlide], onUpdate: tweenDot2, duration: dur })
            

        }
          
        // main action check which of the 4 types of interaction called the function
        function slideAnim2(e) {
            stopAutoPlaySlide2()
            oldSlide = activeSlide
            // console.log(oldSlide)
            // console.log(this)
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
                if (this.className === "dot2") {
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
                gsap.to(container, { x: offsets[activeSlide], onUpdate: tweenDot2, duration: dur })
            }

            // autoPlaySlide()
        }
          
        // update the draggable element snap points
        function sizeIt2(idBox) {
            // console.log('ini')
            offsets = []
            iw = window.innerWidth
            // console.log('s2',slides)
            // console.log('inner',window.innerWidth)
            gsap.set("#panelWrap2", { width: slides.length * iw })
            gsap.set(slides, { width: iw })
            for (let i = 0; i < slides.length; i++) {
                // console.log(-slides[i].offsetLeft)
                offsets.push(-slides[i].offsetLeft)
            }
            gsap.set(container, { x: offsets[activeSlide] })
            dragMe[0].vars.snap = offsets
        }
          
        gsap.set(`${idBox} .hideMe2`, { opacity: 1 })
        // window.addEventListener("wheel", slideAnim)
        window.addEventListener("resize", sizeIt2)
        
          
        // update dot animation when dragger moves
        function tweenDot2() {
            // console.log('aqui debemos aplicar la clase de activado')
            // console.log(Math.abs(gsap.getProperty(container, "x") / iw) + 1)
            // console.log(dotAnim2)
            gsap.set(dotAnim2, {
              time: Math.abs(gsap.getProperty(container, "x") / iw) + 1
            })
        }
        autoPlaySlide2()
        // autoPlay()

    }

    const initAccordion = (tab) => {
        let elementAccordion = document.querySelectorAll(`.experienciasAccordion .${tab} .panel.closed`)
        elementAccordion.forEach( (element)=> {
            //assign as variable
            // console.log(element)
            let panelContent = element.querySelector('.panel-content')
            let headerArrow = element.querySelector('.header-arrow')
            let tl = gsap.timeline({ paused: true })
            // tl.restart()
            tl
                .to(headerArrow, {duration: .25, rotation: 180})
                .to(panelContent, { duration: .25, autoAlpha: 1, height: 'auto' })
            
            //start timeline resting in reversed state
            tl.reverse()
            // console.log(panelContent)
            element.addEventListener("click", () => {
                //toggle reversed property of my timeline
                // console.log(element)
                tl.reversed(!tl.reversed())
            })
        })

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

    const actualizarItinerario = (id,index) => {
        let tabActive = document.querySelector(`.tabAccordion${id}`)
        let tabAll = document.querySelectorAll(`.tabAccordion`)
        let tabSlider = document.querySelector(`.tabSlider${index}`)
        let tabSliderAll = document.querySelectorAll(`.tabSlider`)
        let tabDrag = document.querySelector(`.tabDrag${index}`)
        let tabDragAll = document.querySelectorAll(`.tabDrag`)
        
        // const nuevosConciertos3 = itinerarios[index].conciertos
        // setListConcierto3(nuevosConciertos3)
        // console.log(`.tabAccordion${id}`)
        // console.log(tabActive.classList.contains("active"))
        
        if (tabActive.classList.contains("active")){
            // console.log(22)
        }else{
        
            tabAll.forEach(function(tab) {
                tab.classList.remove("active")
                tab.style.display = 'none'
            })
            setTimeout(()=>{
                tabActive.style.display = 'flex'
                tabActive.classList.add("active")
            },100)

            tabSliderAll.forEach(function(tab) {
                // tab.classList.remove("active")
                tab.style.opacity = 0
                tab.style.zIndex = 10
            })
            setTimeout(()=>{
                tabSlider.style.opacity = 1
                tabSlider.style.zIndex = 100
            },100)

            tabDragAll.forEach(function(tab) {
                // tab.classList.remove("active")
                tab.style.opacity = 0
                tab.style.zIndex = 10
            })
            setTimeout(()=>{
                tabDrag.style.opacity = 1
                tabDrag.style.zIndex = 100
            },100)

        }

        // if (index != 0){
        //     console.log(index)
        // }
    }
    return (
        <>
            <div className={styles.boxContent}>
                
                <div className={styles.containerInfo}>
                    <div className='container'>
                        <h1>SELECCIONE DÍA DEL EVENTO</h1>
                        <div className={styles.boxNavTabs}>
                            <div className={styles.navTabs}>

                                <button ref={btnTab1} onClick={ (e) =>{ actualizarItinerario(1,1) } }>día 8 de julio</button>
                                <button ref={btnTab2} onClick={ (e) =>{ actualizarItinerario(2,0) } }>día 9 de julio</button>
                                
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
                                <div className={`${styles.boxAccordion} experienciasAccordion`} id="experienciasAccordion">

                                    <div className={`iconRombo claro ${styles.pos1}`}></div>
                                    <div className={`iconRombo claro small ${styles.pos2}`}></div>


                                    <div className="accordion">
                                        <div className='tabAccordion tabAccordion1'>
                                            {listItinerario?.map((items,index) => (
                                                // <p key={index}></p>
                                                <PanelIninterario 
                                                    key={index}
                                                    items={items}
                                                />
                                            ))}
                                        </div>

                                        <div className='tabAccordion tabAccordion2'>
                                            {listItinerario2?.map((items,index) => (
                                                // <p key={index}></p>
                                                <PanelIninterario 
                                                    key={index}
                                                    items={items}
                                                />
                                            ))}
                                        </div>
                                        

                                        {/* <PanelIninterario  /> */}

                                        {/* <div className="panel closed">
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
                                        </div> */}
                                        
                                        



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
                            <div className='tabSlider tabSlider1'>
                                <div id="sliderConcierto" className={`containerSliders    ${styles.containerSliders}`} >
                                    <div className={`iconRombo claro ${styles.posRombo}`}></div>
                                    <div className={`iconRombo claro small ${styles.posRombo2}`}></div>
                                    <div className={`iconRombo claro small ${styles.posRombo3}`}></div>
                                    <div className="hideMe">
                                        <div id="masterWrap" className='masterWrap'>
                                            <div id="panelWrap" className='panelWrap'>
                                                {listConcierto?.map((items,index) => (
                                                    <SectionConcierto 
                                                        key={index}
                                                        items={items} 
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="dots">
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                            <div className='tabSlider tabSlider0'>
                                <div id="sliderConcierto2" className={`containerSliders   ${styles.containerSliders}`} >
                                    <div className={`iconRombo claro ${styles.posRombo}`}></div>
                                    <div className={`iconRombo claro small ${styles.posRombo2}`}></div>
                                    <div className={`iconRombo claro small ${styles.posRombo3}`}></div>
                                    <div className="hideMe2">
                                        <div id="masterWrap2" className='masterWrap2'>
                                            <div id="panelWrap2" className='panelWrap2'>
                                                {listConcierto2?.map((items,index) => (
                                                    <SectionConcierto 
                                                        key={index}
                                                        items={items} 
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="dots2">
                                        </div>
                                    </div>
                                </div>
                            </div>


                            
                            <div className='tabDrag tabDrag1'>
                                <div className={`${styles.conciertoDrag}`} id="conciertoDrag">
                                    <div className={styles.conciertoMoveDrag} id="conciertoMoveDrag">
                                        <div className={styles.lineConcierto}>
                                            {listConcierto3?.map((items,index) => (
                                                <SectionConcierto2 
                                                    key={index}
                                                    items={items} 
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                            <div className='tabDrag tabDrag0'>
                                <div className={`${styles.conciertoDrag}`} id="conciertoDrag2">
                                    <div className={styles.conciertoMoveDrag} id="conciertoMoveDrag2">
                                        <div className={styles.lineConcierto}>
                                            {listConcierto4?.map((items,index) => (
                                                <SectionConcierto2 
                                                    key={index}
                                                    items={items} 
                                                />
                                            ))}
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
