import { useEffect, useRef } from 'react'

import Image from 'next/image'

import { gsap } from "gsap/dist/gsap"
import { Draggable } from "gsap/dist/Draggable"

gsap.registerPlugin(Draggable)

import styles from  '../../styles/sass/restaurantes.module.sass'
export default function Detalle() {
    let boolInit =  useRef(false)
    let clicNav =  useRef(false)
    useEffect( () => {
        if (!boolInit.current){
            initDragNavRestaurante()
            updateNavSet()
        }
    },[]) 

    const updateNavSet = () => {
        const arrIcon = ['iconcarne','iconcriollo','iconchifa','iconcomtemporaneo','iconmarino','iconhamburguesa','iconnikkei','iconpasta','iconpizza','iconpoke','iconpolleria','iconregional','iconsanguches']

        const btnNav = document.getElementById('btnNav1')
        const _div = btnNav.querySelector('div')
        const imagen = document.getElementById('nav1')
        imagen.src=`/assets/${arrIcon[0]}Active.svg` 
        btnNav.classList.add('active')
        gsap.to(_div,{
            css: {
                background: '#D2AF75'
            }
        })
    }
    const resetIconNav = () => {
        const arrIcon = ['iconcarne','iconcriollo','iconchifa','iconcomtemporaneo','iconmarino','iconhamburguesa','iconnikkei','iconpasta','iconpizza','iconpoke','iconpolleria','iconregional','iconsanguches']
        const arrNavButton = document.querySelectorAll('.navRestaurantes button')
        
        arrNavButton.forEach( (element, index) => {
            const _div = element.querySelector('div')
            document.getElementById(`nav${index+1}`).src=`/assets/${arrIcon[index]}.svg`
            element.classList.remove('active')
            gsap.to(_div,{
                css: {
                    background: 'transparent'
                }
            })
            // console.log(arrIcon[index])
        })
    }

    const actualizarNavRestaurante = (id,imagen,btnNav) => {
        const img = document.getElementById(`nav${id}`)
        const _div = btnNav.querySelector('div')
        img.src=`/assets/${imagen}Active.svg`  
        btnNav.classList.add('active')
        gsap.to(_div,{
            css: {
                background: '#D2AF75'
            }
        })
        clicNav.current = false
    }

    const handleRestaurante = (e,id,imagen) => {
        if (clicNav.current === false){
            clicNav.current = true
            const btnNav = document.getElementById(`btnNav${id}`)
            console.log(btnNav.classList.contains("active"))
            if (btnNav.classList.contains("active")){
                // nada
            }else{
                resetIconNav()
                setTimeout( () => {
                    actualizarNavRestaurante(id,imagen,btnNav)
                }, 100)
            }
        }


        
    }
    const initDragNavRestaurante = () => {
        let boxNavDrag = document.getElementById('dragMove')
        let dragContainer = document.getElementById('boxDragRestaurante')
        let navDrag = Draggable.create(boxNavDrag, {
            edgeResistance:0.5,
            bounds: dragContainer,
            type: "x", 
            inertia: true
        })
    }

    return (
        <>
            <div className={styles.boxContent}>
                <div className={styles.containerInfo}>
                    <div className='container'>
                        <h1>¿A dónde vamos a comer hoy?</h1>
                    </div>
                    <div className={styles.boxDrag} id="boxDragRestaurante">
                        <div className={styles.dragMove} id="dragMove">
                            <div className={`navRestaurantes ${styles.navRestaurantes}`}>
                                <button onClick={ (e) => handleRestaurante(e,1,'iconcarne')} id="btnNav1"> 
                                    <div className={styles.boxCircle}>
                                        <Image src="/assets/iconcarne.svg" id="nav1" width={47} height={35} alt='Carnes'  />
                                    </div>
                                    <p>Carnes</p>
                                </button>
                                <button onClick={ (e) => handleRestaurante(e,2,'iconcriollo')} id="btnNav2">
                                    <div className={styles.boxCircle}>
                                        <Image src="/assets/iconcriollo.svg" id="nav2" width={47} height={35} alt='Criolla'  />
                                    </div>
                                    <p>Criolla</p>
                                </button>
                                <button onClick={ (e) => handleRestaurante(e,3,'iconchifa')} id="btnNav3">
                                    <div className={styles.boxCircle}>
                                        <Image src="/assets/iconchifa.svg" id="nav3" width={47} height={35} alt='Chifa'  />
                                    </div>
                                    <p>Chifa</p>
                                </button>
                                <button onClick={ (e) => handleRestaurante(e,4,'iconcomtemporaneo')} id="btnNav4">
                                    <div className={styles.boxCircle}>
                                        <Image src="/assets/iconcomtemporaneo.svg" id="nav4" width={47} height={35} alt='Contemporáneo'  />
                                    </div>
                                    <p>Contemporáneo</p>
                                </button>
                                <button onClick={ (e) => handleRestaurante(e,5,'iconmarino')} id="btnNav5">
                                    <div className={styles.boxCircle}>
                                        <Image src="/assets/iconmarino.svg" id="nav5" width={47} height={35} alt='Marina'  />
                                    </div>
                                    <p>Marina</p>
                                </button>
                                <button onClick={ (e) => handleRestaurante(e,6,'iconhamburguesa')} id="btnNav6">
                                    <div className={styles.boxCircle}>
                                        <Image src="/assets/iconhamburguesa.svg" id="nav6" width={47} height={35} alt='Hamburguesas'  />
                                    </div>
                                    <p>Hamburguesas</p>
                                </button>
                                <button onClick={ (e) => handleRestaurante(e,7,'iconnikkei')} id="btnNav7">
                                    <div className={styles.boxCircle}>
                                        <Image src="/assets/iconnikkei.svg" id="nav7" width={47} height={35} alt='Nikkei'  />
                                    </div>
                                    <p>Nikkei</p>
                                </button>
                                <button onClick={ (e) => handleRestaurante(e,8,'iconpasta')} id="btnNav8">
                                    <div className={styles.boxCircle}>
                                        <Image src="/assets/iconpasta.svg" id="nav8" width={47} height={35} alt='Pastas'  />
                                    </div>
                                    <p>Pastas</p>
                                </button>
                                <button onClick={ (e) => handleRestaurante(e,9,'iconpizza')} id="btnNav9">
                                    <div className={styles.boxCircle}>
                                        <Image src="/assets/iconpizza.svg" id="nav9" width={47} height={35} alt='Pizzas'  />
                                    </div>
                                    <p>Pizzas</p>
                                </button>
                                <button onClick={ (e) => handleRestaurante(e,10,'iconpoke')} id="btnNav10">
                                    <div className={styles.boxCircle}>
                                        <Image src="/assets/iconpoke.svg" id="nav10" width={47} height={35} alt='Poke'  />
                                    </div>
                                    <p>Poke</p>
                                </button>
                                <button onClick={ (e) => handleRestaurante(e,11,'iconpolleria')} id="btnNav11">
                                    <div className={styles.boxCircle}>
                                        <Image src="/assets/iconpolleria.svg" id="nav11" width={47} height={35} alt='Pollerias'  />
                                    </div>
                                    <p>Pollerias</p>
                                </button>
                                <button onClick={ (e) => handleRestaurante(e,12,'iconregional')} id="btnNav12">
                                    <div className={styles.boxCircle}>
                                        <Image src="/assets/iconregional.svg" id="nav12" width={47} height={35} alt='Regional'  />
                                    </div>
                                    <p>Regional</p>
                                </button>
                                <button onClick={ (e) => handleRestaurante(e,13,'iconsanguches')} id="btnNav13">
                                    <div className={styles.boxCircle}>
                                        <Image src="/assets/iconsanguches.svg" id="nav13" width={47} height={35} alt='Sanguches'  />
                                    </div>
                                    <p>Sanguches</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
