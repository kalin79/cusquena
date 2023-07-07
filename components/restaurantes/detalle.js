import { useEffect, useRef, useState } from 'react'

import Image from 'next/image'

import { gsap } from "gsap/dist/gsap"
import { Draggable } from "gsap/dist/Draggable"

import BtnMenu from '../help/btnmenu2'
import TitluloCategoria from '../restaurantes/titluloCategoria'

gsap.registerPlugin(Draggable)

import styles from  '../../styles/sass/restaurantes.module.sass'
export default function Detalle() {
    let boolInit =  useRef(false)
    let clicNav =  useRef(false)
    const [categorias, setCategorias] = useState([
        {
        "id": 3,
        "titulo": "Chifa",
        "icono": ""
        },
        {
        "id": 4,
        "titulo": "Contemporáneo",
        "icono": ""
        },
        {
        "id": 5,
        "titulo": "Marina",
        "icono": ""
        },
        {
        "id": 6,
        "titulo": "Hamburguesas",
        "icono": ""
        },
        {
        "id": 7,
        "titulo": "Nikkei",
        "icono": ""
        },
        {
        "id": 8,
        "titulo": "Pastas",
        "icono": ""
        },
        {
        "id": 9,
        "titulo": "Pizzas",
        "icono": ""
        },
        {
        "id": 10,
        "titulo": "Poke",
        "icono": ""
        },
        {
        "id": 11,
        "titulo": "Pollerías",
        "icono": ""
        },
        {
        "id": 12,
        "titulo": "Regional",
        "icono": ""
        },
        {
        "id": 13,
        "titulo": "Sanguches",
        "icono": ""
        },
        {
        "id": 1,
        "titulo": "Carnes",
        "icono": "https://back.mds-cusquena.com/images/categorias/1/1-icon-1688520720.png"
        },
        {
        "id": 2,
        "titulo": "Criollo",
        "icono": ""
        }
    ])

    const [restaurante1, setRestaurante1] = useState([
        {
            "id": 1,
            "descripcion": "-",
            "categoria": "Carnes",
            "image_pc": "https://back.mds-cusquena.com/images/restaurante/24/24-desk-1688687860.svg",
            "imagemobile": "https://back.mds-cusquena.com/images/restaurante/24/24-mb-1688687860.svg"
        },
        {
            "id": 1,
            "descripcion": "-",
            "categoria": "Carnes",
            "image_pc": "https://back.mds-cusquena.com/images/restaurante/26/26-desk-1688687933.svg",
            "imagemobile": "https://back.mds-cusquena.com/images/restaurante/26/26-mb-1688687933.svg",
            "platos": [
                {
                "id": 38,
                "restaurante_id": 26,
                "titulo": "Plato 1",
                "descripcion": "Costillas St Louis a la parrilla servidas con papas fritas y ensalada de col.",
                "precio": "30.00",
                "imagen_pc": "38-desk-1688694101.png",
                "imagen_mobile": "38-mb-1688694101.png",
                "descripcion_adicional": null,
                "imagen_adicional": null,
                "active": true,
                "created_at": "2023-07-07T01:41:41.000000Z",
                "updated_at": "2023-07-07T01:41:41.000000Z",
                "deleted_at": null,
                "created_user_id": 1,
                "updated_user_id": 1,
                "deleted_user_id": null
                }
            ]
        },
        {
            "id": 1,
            "descripcion": "-",
            "categoria": "Carnes",
            "image_pc": "https://back.mds-cusquena.com/images/restaurante/2/2-desk-1688684720.svg",
            "imagemobile": "https://back.mds-cusquena.com/images/restaurante/2/2-mb-1688684720.svg",
            "platos": [
                {
                "id": 5,
                "restaurante_id": 2,
                "titulo": "Sandwich de picaña ahumada",
                "descripcion": "Sandwich de picaña ahumada",
                "precio": "25.00",
                "imagen_pc": "5-desk-1688620269.png",
                "imagen_mobile": "5-mb-1688620269.png",
                "descripcion_adicional": null,
                "imagen_adicional": null,
                "active": true,
                "created_at": "2023-07-06T05:11:09.000000Z",
                "updated_at": "2023-07-06T05:11:09.000000Z",
                "deleted_at": null,
                "created_user_id": 1,
                "updated_user_id": 1,
                "deleted_user_id": null
                },
                {
                "id": 24,
                "restaurante_id": 2,
                "titulo": "Chorizo Salvador",
                "descripcion": "Chorizo Salvador",
                "precio": "20.00",
                "imagen_pc": "24-desk-1688690884.png",
                "imagen_mobile": "24-mb-1688690884.png",
                "descripcion_adicional": null,
                "imagen_adicional": null,
                "active": true,
                "created_at": "2023-07-07T00:48:04.000000Z",
                "updated_at": "2023-07-07T00:48:04.000000Z",
                "deleted_at": null,
                "created_user_id": 1,
                "updated_user_id": 1,
                "deleted_user_id": null
                }
            ]
        }
    ])

    const [restaurante2, setRestaurante2] = useState([
        {
            "id": 2,
            "descripcion": "-",
            "categoria": "Criollo",
            "image_pc": "https://back.mds-cusquena.com/images/restaurante/7/7-desk-1688619204.svg",
            "imagemobile": "https://back.mds-cusquena.com/images/restaurante/7/7-mb-1688619204.svg",
            "platos": [
              {
                "id": 4,
                "restaurante_id": 7,
                "titulo": "Plato 2",
                "descripcion": "Panceta Char Siu, chaufa blanco meloso al mirín y camote crocante",
                "precio": "25.00",
                "imagen_pc": "4-desk-1688619272.png",
                "imagen_mobile": "4-mb-1688619272.png",
                "descripcion_adicional": null,
                "imagen_adicional": null,
                "active": true,
                "created_at": "2023-07-06T04:54:32.000000Z",
                "updated_at": "2023-07-06T04:54:32.000000Z",
                "deleted_at": null,
                "created_user_id": 1,
                "updated_user_id": 1,
                "deleted_user_id": null
              },
              {
                "id": 9,
                "restaurante_id": 7,
                "titulo": "Plato 1",
                "descripcion": "Anticuchitos de corazón, choclito frito y papitas doradas",
                "precio": "20.00",
                "imagen_pc": "9-desk-1688689686.png",
                "imagen_mobile": "9-mb-1688689686.png",
                "descripcion_adicional": null,
                "imagen_adicional": null,
                "active": true,
                "created_at": "2023-07-06T05:22:16.000000Z",
                "updated_at": "2023-07-07T00:28:06.000000Z",
                "deleted_at": null,
                "created_user_id": 1,
                "updated_user_id": 1,
                "deleted_user_id": null
              }
            ]
        },
        {
        "id": 2,
        "descripcion": "-",
        "categoria": "Criollo",
        "image_pc": "https://back.mds-cusquena.com/images/restaurante/11/11-desk-1688619416.svg",
        "imagemobile": "https://back.mds-cusquena.com/images/restaurante/11/11-mb-1688619416.svg",
        "platos": [
            {
            "id": 10,
            "restaurante_id": 11,
            "titulo": "Plato 1",
            "descripcion": "Ceviche Mixto a las brasas ardientes",
            "precio": "20.00",
            "imagen_pc": "10-desk-1688621023.png",
            "imagen_mobile": "10-mb-1688621023.png",
            "descripcion_adicional": null,
            "imagen_adicional": null,
            "active": true,
            "created_at": "2023-07-06T05:23:43.000000Z",
            "updated_at": "2023-07-06T05:23:43.000000Z",
            "deleted_at": null,
            "created_user_id": 1,
            "updated_user_id": 1,
            "deleted_user_id": null
            },
            {
            "id": 11,
            "restaurante_id": 11,
            "titulo": "Plato 2",
            "descripcion": "Seco de nuestro rico norte",
            "precio": "25.00",
            "imagen_pc": "11-desk-1688689772.png",
            "imagen_mobile": "11-mb-1688689772.png",
            "descripcion_adicional": null,
            "imagen_adicional": null,
            "active": true,
            "created_at": "2023-07-06T05:25:12.000000Z",
            "updated_at": "2023-07-07T00:29:32.000000Z",
            "deleted_at": null,
            "created_user_id": 1,
            "updated_user_id": 1,
            "deleted_user_id": null
            }
        ]
        },
        {
        "id": 2,
        "descripcion": "-",
        "categoria": "Criollo",
        "image_pc": "https://back.mds-cusquena.com/images/restaurante/28/28-desk-1688688017.svg",
        "imagemobile": "https://back.mds-cusquena.com/images/restaurante/28/28-mb-1688688017.svg",
        "platos": [
            {
            "id": 41,
            "restaurante_id": 28,
            "titulo": "Plato 1",
            "descripcion": "Leche de tigre a lo macho",
            "precio": "25.00",
            "imagen_pc": "41-desk-1688694301.png",
            "imagen_mobile": "41-mb-1688694301.png",
            "descripcion_adicional": null,
            "imagen_adicional": null,
            "active": true,
            "created_at": "2023-07-07T01:45:01.000000Z",
            "updated_at": "2023-07-07T01:45:01.000000Z",
            "deleted_at": null,
            "created_user_id": 1,
            "updated_user_id": 1,
            "deleted_user_id": null
            },
            {
            "id": 42,
            "restaurante_id": 28,
            "titulo": "Plato 2",
            "descripcion": "Anticuchos a la capitana",
            "precio": "20.00",
            "imagen_pc": "42-desk-1688694368.png",
            "imagen_mobile": "42-mb-1688694368.png",
            "descripcion_adicional": null,
            "imagen_adicional": null,
            "active": true,
            "created_at": "2023-07-07T01:46:08.000000Z",
            "updated_at": "2023-07-07T01:46:08.000000Z",
            "deleted_at": null,
            "created_user_id": 1,
            "updated_user_id": 1,
            "deleted_user_id": null
            }
        ]
        },
        {
        "id": 2,
        "descripcion": "-",
        "categoria": "Criollo",
        "image_pc": "https://back.mds-cusquena.com/images/restaurante/29/29-desk-1688688053.svg",
        "imagemobile": "https://back.mds-cusquena.com/images/restaurante/29/29-mb-1688688053.svg",
        "platos": [
            {
            "id": 43,
            "restaurante_id": 29,
            "titulo": "Plato 1",
            "descripcion": "Pachamanca Huanuqueña",
            "precio": "25.00",
            "imagen_pc": "43-desk-1688694445.png",
            "imagen_mobile": "43-mb-1688694445.png",
            "descripcion_adicional": null,
            "imagen_adicional": null,
            "active": true,
            "created_at": "2023-07-07T01:47:25.000000Z",
            "updated_at": "2023-07-07T01:47:25.000000Z",
            "deleted_at": null,
            "created_user_id": 1,
            "updated_user_id": 1,
            "deleted_user_id": null
            },
            {
            "id": 44,
            "restaurante_id": 29,
            "titulo": "Plato 2",
            "descripcion": "Locro de Gallina",
            "precio": "25.00",
            "imagen_pc": "44-desk-1688694494.png",
            "imagen_mobile": "44-mb-1688694494.png",
            "descripcion_adicional": null,
            "imagen_adicional": null,
            "active": true,
            "created_at": "2023-07-07T01:48:14.000000Z",
            "updated_at": "2023-07-07T01:48:14.000000Z",
            "deleted_at": null,
            "created_user_id": 1,
            "updated_user_id": 1,
            "deleted_user_id": null
            }
        ]
        }
    ])

    const [resactivo, setRestactivo] = useState([])
    const [titleactivo, setTitleactivo] = useState('')

    useEffect( () => {
        if (!boolInit.current){
            boolInit.current = true
            console.log(2)
            console.log(restaurante1)
            setRestactivo(restaurante1)
            let idCategoria = 1
            let nuevoTitulo = categorias.map((categoria) => {
                if (categoria.id === idCategoria)
                    return categoria.titulo
            })
            setTitleactivo(nuevoTitulo)
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

                let idCategoria = id
                let nuevoTitulo = categorias.map((categoria) => {
                    if (categoria.id === idCategoria)
                        return categoria.titulo
                })
                setTitleactivo(nuevoTitulo)
                if (id === 1){
                    setRestactivo(restaurante1)
                }

                if (id === 2){
                    setRestactivo(restaurante2)
                }

                resetIconNav()
                setTimeout( () => {
                    actualizarNavRestaurante(id,imagen,btnNav)
                }, 100)
            }
        }


        
    }

    const onrizeElementRestaurante = () => {
        // console.log('edd')
        let boxNavDrag = document.getElementById('dragMove')
        let dragContainer = document.getElementById('boxDragRestaurante')
        Draggable.get(boxNavDrag).kill()
        initDragNavRestaurante()
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
        window.addEventListener("resize", onrizeElementRestaurante)
    }

    return (
        <>
            <div className={styles.boxContent}>
                <div className={styles.containerInfo}>
                    <div className='container'>
                        <h1>selecciona la categoría que deseas ver</h1>
                    </div>
                    <div className={styles.boxDrag} id="boxDragRestaurante">
                        <div className={styles.dragMove} id="dragMove">
                            <div className={`navRestaurantes ${styles.navRestaurantes}`}>
                                <button onClick={ (e) => handleRestaurante(e,1,'iconcarne')} id={`btnNav1`}> 
                                    <div className={styles.boxCircle}>
                                        <Image src="/assets/iconcarne.svg" id="nav1" width={47} height={35} alt="carne"  />
                                    </div>
                                    <p>Carnes</p>
                                </button>
                                
                                <button onClick={ (e) => handleRestaurante(e,2,'iconcriollo')} id="btnNav2">
                                    <div className={styles.boxCircle}>
                                        <Image src="/assets/iconcriollo.svg" id="nav2" width={47} height={35} alt='Criollo'  />
                                    </div>
                                    <p>Criollo</p>
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
                <div className={`${styles.boxListRestaurantes} container`}>
                    <div className={`iconRombo claro ${styles.pos1}`}></div>
                    <div className={`iconRombo claro ${styles.pos2}`}></div>
                    <div className={`iconRombo claro ${styles.pos3}`}></div>
                    <div className={`iconRombo small claro ${styles.pos4}`}></div>

                    <div className={styles.boxTitle}>
                        {titleactivo}
                        <TitluloCategoria 
                            titleactivo={titleactivo}
                        />
                        <div className={`iconRombo claro big ${styles.pos1}`}></div>
                        <div className={styles.rombito}></div>
                        <div className={`${styles.rombito} ${styles.pos2}`}></div>
                    </div>
                    <div className={styles.gridRestaurantes}>
                        {resactivo?.map((items,index) => (
                            // <div className={styles.cardRestaurante}>
                                <BtnMenu 
                                    key={index}
                                    data={items.image_pc}
                                    url={'/restaurante/carne/primos'}
                                    // data={ ['primos.svg','/restaurante/carne/primos'] } 
                                />
                            // </div>
                        ))}
                        
                        {/* <div className={styles.cardRestaurante}>
                            <BtnMenu data={ ['osso.svg','/restaurante/carne/osso'] } />
                        </div>
                        <div className={styles.cardRestaurante}>
                            <BtnMenu data={ ['cumpa.svg','/restaurante/carne/cumpa'] } />
                        </div>
                        <div className={styles.cardRestaurante}>
                            <BtnMenu data={ ['amoramar.svg','/restaurante/carne/amoramar'] } />
                        </div>
                        <div className={styles.cardRestaurante}>
                            <BtnMenu data={ ['chaxras.svg','/restaurante/carne/chaxras'] } />
                        </div> */}
                    </div>
                    
                </div>
            </div>
        </>
    )
}
