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

    const [restaurante3, setRestaurante3] = useState([
        {
        "id": 3,
        "descripcion": "-",
        "categoria": "Chifa",
        "image_pc": "https://back.mds-cusquena.com/images/restaurante/30/30-desk-1688688100.svg",
        "imagemobile": "https://back.mds-cusquena.com/images/restaurante/30/30-mb-1688688100.svg",
        "platos": [
            {
            "id": 45,
            "restaurante_id": 30,
            "titulo": "Combo 1",
            "descripcion": "01 cha siu pao, 01 kay pao, 3 siu mai",
            "precio": "25.00",
            "imagen_pc": "45-desk-1688694590.png",
            "imagen_mobile": "45-mb-1688694590.png",
            "descripcion_adicional": null,
            "imagen_adicional": null,
            "active": true,
            "created_at": "2023-07-07T01:49:50.000000Z",
            "updated_at": "2023-07-07T01:49:50.000000Z",
            "deleted_at": null,
            "created_user_id": 1,
            "updated_user_id": 1,
            "deleted_user_id": null
            },
            {
            "id": 46,
            "restaurante_id": 30,
            "titulo": "Combo 2",
            "descripcion": "02 siu kao frito, 02 roll primavera, 03 siu mai",
            "precio": "20.00",
            "imagen_pc": "46-desk-1688694636.png",
            "imagen_mobile": "46-mb-1688694636.png",
            "descripcion_adicional": null,
            "imagen_adicional": null,
            "active": true,
            "created_at": "2023-07-07T01:50:36.000000Z",
            "updated_at": "2023-07-07T01:50:36.000000Z",
            "deleted_at": null,
            "created_user_id": 1,
            "updated_user_id": 1,
            "deleted_user_id": null
            }
        ]
        }
    ])

    const [restaurante4, setRestaurante4] = useState([
        {
        "id": 4,
        "descripcion": "-",
        "categoria": "Contemporáneo",
        "image_pc": "https://back.mds-cusquena.com/images/restaurante/5/5-desk-1688618269.svg",
        "imagemobile": "https://back.mds-cusquena.com/images/restaurante/5/5-mb-1688618269.svg",
        "platos": [
            {
            "id": 6,
            "restaurante_id": 5,
            "titulo": "Plato 1",
            "descripcion": "Karipap empanadas de langostino con salsa de curry",
            "precio": "25.00",
            "imagen_pc": "6-desk-1688620498.png",
            "imagen_mobile": "6-mb-1688620498.png",
            "descripcion_adicional": null,
            "imagen_adicional": null,
            "active": true,
            "created_at": "2023-07-06T05:14:58.000000Z",
            "updated_at": "2023-07-06T05:15:40.000000Z",
            "deleted_at": null,
            "created_user_id": 1,
            "updated_user_id": 1,
            "deleted_user_id": null
            },
            {
            "id": 7,
            "restaurante_id": 5,
            "titulo": "Plato 2",
            "descripcion": "Arroz Baan",
            "precio": "25.00",
            "imagen_pc": "7-desk-1688620684.png",
            "imagen_mobile": "7-mb-1688620684.png",
            "descripcion_adicional": null,
            "imagen_adicional": null,
            "active": true,
            "created_at": "2023-07-06T05:18:04.000000Z",
            "updated_at": "2023-07-06T05:18:04.000000Z",
            "deleted_at": null,
            "created_user_id": 1,
            "updated_user_id": 1,
            "deleted_user_id": null
            }
        ]
        }
    ])

    const [restaurante5, setRestaurante5] = useState([
        {
        "id": 5,
        "descripcion": "-",
        "categoria": "Marina",
        "image_pc": "https://back.mds-cusquena.com/images/restaurante/6/6-desk-1688618975.svg",
        "imagemobile": "https://back.mds-cusquena.com/images/restaurante/6/6-mb-1688618975.svg",
        "platos": [
            {
            "id": 3,
            "restaurante_id": 6,
            "titulo": "Chaufa Capon",
            "descripcion": "Panceta glaseada, huevo, frejolito chino y encurtidos de 5 sabores",
            "precio": "25.00",
            "imagen_pc": "3-desk-1688619061.png",
            "imagen_mobile": "3-mb-1688619061.png",
            "descripcion_adicional": null,
            "imagen_adicional": null,
            "active": true,
            "created_at": "2023-07-06T04:51:01.000000Z",
            "updated_at": "2023-07-06T04:51:01.000000Z",
            "deleted_at": null,
            "created_user_id": 1,
            "updated_user_id": 1,
            "deleted_user_id": null
            },
            {
            "id": 8,
            "restaurante_id": 6,
            "titulo": "Tapa Pato",
            "descripcion": "2 Spring roll relleno con arroz con pato de la casa, mayonesa de pimiento ahumado y de culantro",
            "precio": "25.00",
            "imagen_pc": "8-desk-1688688338.png",
            "imagen_mobile": "8-mb-1688688338.png",
            "descripcion_adicional": null,
            "imagen_adicional": null,
            "active": true,
            "created_at": "2023-07-06T05:20:27.000000Z",
            "updated_at": "2023-07-07T00:05:38.000000Z",
            "deleted_at": null,
            "created_user_id": 1,
            "updated_user_id": 1,
            "deleted_user_id": null
            }
        ]
        },
        {
        "id": 5,
        "descripcion": "-",
        "categoria": "Marina",
        "image_pc": "https://back.mds-cusquena.com/images/restaurante/23/23-desk-1688687823.svg",
        "imagemobile": "https://back.mds-cusquena.com/images/restaurante/23/23-mb-1688687823.svg",
        "platos": [
            {
            "id": 33,
            "restaurante_id": 23,
            "titulo": "Plato 1",
            "descripcion": "Jalea nikkei",
            "precio": "25.00",
            "imagen_pc": "33-desk-1688693491.png",
            "imagen_mobile": "33-mb-1688693491.png",
            "descripcion_adicional": null,
            "imagen_adicional": null,
            "active": true,
            "created_at": "2023-07-07T01:31:31.000000Z",
            "updated_at": "2023-07-07T01:31:31.000000Z",
            "deleted_at": null,
            "created_user_id": 1,
            "updated_user_id": 1,
            "deleted_user_id": null
            },
            {
            "id": 34,
            "restaurante_id": 23,
            "titulo": "Plato 2",
            "descripcion": "Arroz meloso",
            "precio": "25.00",
            "imagen_pc": "34-desk-1688693550.png",
            "imagen_mobile": "34-mb-1688693550.png",
            "descripcion_adicional": null,
            "imagen_adicional": null,
            "active": true,
            "created_at": "2023-07-07T01:32:30.000000Z",
            "updated_at": "2023-07-07T01:32:30.000000Z",
            "deleted_at": null,
            "created_user_id": 1,
            "updated_user_id": 1,
            "deleted_user_id": null
            }
        ]
        }
    ])    

    const [restaurante6, setRestaurante6] = useState([
        {
        "id": 6,
        "descripcion": "-",
        "categoria": "Hamburguesas",
        "image_pc": "https://back.mds-cusquena.com/images/restaurante/21/21-desk-1688687722.svg",
        "imagemobile": "https://back.mds-cusquena.com/images/restaurante/21/21-mb-1688687722.svg",
        "platos": [
            {
            "id": 30,
            "restaurante_id": 21,
            "titulo": "Cheeseburger",
            "descripcion": "Carne de 120gr , cheddar y salsa G",
            "precio": "20.00",
            "imagen_pc": "30-desk-1688693320.png",
            "imagen_mobile": "30-mb-1688693320.png",
            "descripcion_adicional": null,
            "imagen_adicional": null,
            "active": true,
            "created_at": "2023-07-07T01:28:40.000000Z",
            "updated_at": "2023-07-07T01:28:40.000000Z",
            "deleted_at": null,
            "created_user_id": 1,
            "updated_user_id": 1,
            "deleted_user_id": null
            },
            {
            "id": 29,
            "restaurante_id": 21,
            "titulo": "Smoke Buddha",
            "descripcion": "Doble carne (120gr), tocino, cebolla blanca, tomates asados, BBQ ponja, jalapeños encurtidos, cheddar.",
            "precio": "25.00",
            "imagen_pc": "29-desk-1688693283.png",
            "imagen_mobile": "29-mb-1688693283.png",
            "descripcion_adicional": null,
            "imagen_adicional": null,
            "active": true,
            "created_at": "2023-07-07T01:28:03.000000Z",
            "updated_at": "2023-07-07T01:28:03.000000Z",
            "deleted_at": null,
            "created_user_id": 1,
            "updated_user_id": 1,
            "deleted_user_id": null
            }
        ]
        },
        {
        "id": 6,
        "descripcion": "-",
        "categoria": "Hamburguesas",
        "image_pc": "https://back.mds-cusquena.com/images/restaurante/22/22-desk-1688687780.svg",
        "imagemobile": "https://back.mds-cusquena.com/images/restaurante/22/22-mb-1688687780.svg",
        "platos": [
            {
            "id": 31,
            "restaurante_id": 22,
            "titulo": "Bendita Burger",
            "descripcion": "Burger de asado de tira (150gr), cebolla caramelizada sin azucar, cheddar, salsa bendita, pan artesanal",
            "precio": "20.00",
            "imagen_pc": "31-desk-1688693382.png",
            "imagen_mobile": "31-mb-1688693382.png",
            "descripcion_adicional": null,
            "imagen_adicional": null,
            "active": true,
            "created_at": "2023-07-07T01:29:42.000000Z",
            "updated_at": "2023-07-07T01:29:42.000000Z",
            "deleted_at": null,
            "created_user_id": 1,
            "updated_user_id": 1,
            "deleted_user_id": null
            },
            {
            "id": 32,
            "restaurante_id": 22,
            "titulo": "Chanchiburger",
            "descripcion": "Burger de asado de tira (150gr), cheddar, BBQ pulled pork, pickles, salsa bendita",
            "precio": "25.00",
            "imagen_pc": "32-desk-1688693416.png",
            "imagen_mobile": "32-mb-1688693416.png",
            "descripcion_adicional": null,
            "imagen_adicional": null,
            "active": true,
            "created_at": "2023-07-07T01:30:16.000000Z",
            "updated_at": "2023-07-07T01:30:16.000000Z",
            "deleted_at": null,
            "created_user_id": 1,
            "updated_user_id": 1,
            "deleted_user_id": null
            }
        ]
        }
    ])

    const [restaurante7, setRestaurante7] = useState([
        {
        "id": 7,
        "descripcion": "-",
        "categoria": "Nikkei",
        "image_pc": "https://back.mds-cusquena.com/images/restaurante/15/15-desk-1688619684.svg",
        "imagemobile": "https://back.mds-cusquena.com/images/restaurante/15/15-mb-1688619684.svg",
        "platos": [
            {
            "id": 18,
            "restaurante_id": 15,
            "titulo": "CANGRE BURGER BAO",
            "descripcion": "Hamburguesa de asado de tira y kombu, queso cheddar, rabanito encurtido, cebolla china, cebolla encurtida, ajonjolí, lechuga y Mayosriracha (2 baos).",
            "precio": "20.00",
            "imagen_pc": "18-desk-1688621747.png",
            "imagen_mobile": "18-mb-1688621747.png",
            "descripcion_adicional": null,
            "imagen_adicional": null,
            "active": true,
            "created_at": "2023-07-06T05:35:47.000000Z",
            "updated_at": "2023-07-06T05:35:47.000000Z",
            "deleted_at": null,
            "created_user_id": 1,
            "updated_user_id": 1,
            "deleted_user_id": null
            }
        ]
        },
        {
        "id": 7,
        "descripcion": "-",
        "categoria": "Nikkei",
        "image_pc": "https://back.mds-cusquena.com/images/restaurante/16/16-desk-1688619718.svg",
        "imagemobile": "https://back.mds-cusquena.com/images/restaurante/16/16-mb-1688619718.svg",
        "platos": [
            {
            "id": 20,
            "restaurante_id": 16,
            "titulo": "CEBICHE MARCIANO",
            "descripcion": "Cortes de pescado, leche de tigre marciana de culantro, patacones y chalaca con charapita.",
            "precio": "20.00",
            "imagen_pc": "20-desk-1688690446.png",
            "imagen_mobile": "20-mb-1688690446.png",
            "descripcion_adicional": null,
            "imagen_adicional": null,
            "active": true,
            "created_at": "2023-07-06T05:37:52.000000Z",
            "updated_at": "2023-07-07T00:40:46.000000Z",
            "deleted_at": null,
            "created_user_id": 1,
            "updated_user_id": 1,
            "deleted_user_id": null
            }
        ]
        },
        {
        "id": 7,
        "descripcion": "-",
        "categoria": "Nikkei",
        "image_pc": "https://back.mds-cusquena.com/images/restaurante/17/17-desk-1688619774.svg",
        "imagemobile": "https://back.mds-cusquena.com/images/restaurante/17/17-mb-1688619774.svg",
        "platos": [
            {
            "id": 22,
            "restaurante_id": 17,
            "titulo": "Plato 2",
            "descripcion": "Crispy Taco de Atún",
            "precio": "15.00",
            "imagen_pc": "22-desk-1688621994.png",
            "imagen_mobile": "22-mb-1688621994.png",
            "descripcion_adicional": null,
            "imagen_adicional": null,
            "active": true,
            "created_at": "2023-07-06T05:39:54.000000Z",
            "updated_at": "2023-07-06T05:39:54.000000Z",
            "deleted_at": null,
            "created_user_id": 1,
            "updated_user_id": 1,
            "deleted_user_id": null
            },
            {
            "id": 21,
            "restaurante_id": 17,
            "titulo": "Plato 1",
            "descripcion": "Club 51 - Sandwich furai relleno de palta, col morada, queso crema y salmón.",
            "precio": "30.00",
            "imagen_pc": "21-desk-1688690663.png",
            "imagen_mobile": "21-mb-1688690663.png",
            "descripcion_adicional": null,
            "imagen_adicional": null,
            "active": true,
            "created_at": "2023-07-06T05:39:14.000000Z",
            "updated_at": "2023-07-07T00:44:23.000000Z",
            "deleted_at": null,
            "created_user_id": 1,
            "updated_user_id": 1,
            "deleted_user_id": null
            }
        ]
        },
        {
        "id": 7,
        "descripcion": "-",
        "categoria": "Nikkei",
        "image_pc": "https://back.mds-cusquena.com/images/restaurante/19/19-desk-1688684656.svg",
        "imagemobile": "https://back.mds-cusquena.com/images/restaurante/19/19-mb-1688684656.svg",
        "platos": [
            {
            "id": 25,
            "restaurante_id": 19,
            "titulo": "Plato 1: Maki Parmesano",
            "descripcion": "10 CORTES",
            "precio": "25.00",
            "imagen_pc": "25-desk-1688692931.png",
            "imagen_mobile": "25-mb-1688692931.png",
            "descripcion_adicional": null,
            "imagen_adicional": null,
            "active": true,
            "created_at": "2023-07-07T01:22:11.000000Z",
            "updated_at": "2023-07-07T01:22:11.000000Z",
            "deleted_at": null,
            "created_user_id": 1,
            "updated_user_id": 1,
            "deleted_user_id": null
            },
            {
            "id": 26,
            "restaurante_id": 19,
            "titulo": "Plato 2: Maki Acevichado",
            "descripcion": "10 CORTES",
            "precio": "25.00",
            "imagen_pc": "26-desk-1688692967.png",
            "imagen_mobile": "26-mb-1688692967.png",
            "descripcion_adicional": null,
            "imagen_adicional": null,
            "active": true,
            "created_at": "2023-07-07T01:22:47.000000Z",
            "updated_at": "2023-07-07T01:22:47.000000Z",
            "deleted_at": null,
            "created_user_id": 1,
            "updated_user_id": 1,
            "deleted_user_id": null
            }
        ]
        }
    ])

    const [restaurante8, setRestaurante8] = useState([
        {
        "id": 8,
        "descripcion": "-",
        "categoria": "Pastas",
        "image_pc": "https://back.mds-cusquena.com/images/restaurante/27/27-desk-1688687979.svg",
        "imagemobile": "https://back.mds-cusquena.com/images/restaurante/27/27-mb-1688687979.svg",
        "platos": [
            {
            "id": 39,
            "restaurante_id": 27,
            "titulo": "Plato 1",
            "descripcion": "Focaccia Capreso",
            "precio": "15.00",
            "imagen_pc": "39-desk-1688694184.png",
            "imagen_mobile": "39-mb-1688694184.png",
            "descripcion_adicional": null,
            "imagen_adicional": null,
            "active": true,
            "created_at": "2023-07-07T01:43:04.000000Z",
            "updated_at": "2023-07-07T01:43:04.000000Z",
            "deleted_at": null,
            "created_user_id": 1,
            "updated_user_id": 1,
            "deleted_user_id": null
            },
            {
            "id": 40,
            "restaurante_id": 27,
            "titulo": "Plato 2",
            "descripcion": "Lasagna a la bolognesa",
            "precio": "25.00",
            "imagen_pc": "40-desk-1688694240.png",
            "imagen_mobile": "40-mb-1688694240.png",
            "descripcion_adicional": null,
            "imagen_adicional": null,
            "active": true,
            "created_at": "2023-07-07T01:44:00.000000Z",
            "updated_at": "2023-07-07T01:44:00.000000Z",
            "deleted_at": null,
            "created_user_id": 1,
            "updated_user_id": 1,
            "deleted_user_id": null
            }
        ]
        }
    ])

    const [restaurante9, setRestaurante9] = useState([
        {
        "id": 9,
        "descripcion": "-",
        "categoria": "Pizzas",
        "image_pc": "https://back.mds-cusquena.com/images/restaurante/12/12-desk-1688619522.svg",
        "imagemobile": "https://back.mds-cusquena.com/images/restaurante/12/12-mb-1688619522.svg",
        "platos": [
            {
            "id": 12,
            "restaurante_id": 12,
            "titulo": "Plato 1",
            "descripcion": "Pizza Margherita",
            "precio": "25.00",
            "imagen_pc": "12-desk-1688689938.png",
            "imagen_mobile": "12-mb-1688689938.png",
            "descripcion_adicional": null,
            "imagen_adicional": null,
            "active": true,
            "created_at": "2023-07-06T05:26:43.000000Z",
            "updated_at": "2023-07-07T00:32:18.000000Z",
            "deleted_at": null,
            "created_user_id": 1,
            "updated_user_id": 1,
            "deleted_user_id": null
            },
            {
            "id": 13,
            "restaurante_id": 12,
            "titulo": "Plato 2",
            "descripcion": "Pizza Prosciutto, hongos & trufa negra",
            "precio": "30.00",
            "imagen_pc": "13-desk-1688621251.png",
            "imagen_mobile": "13-mb-1688621251.png",
            "descripcion_adicional": null,
            "imagen_adicional": null,
            "active": true,
            "created_at": "2023-07-06T05:27:31.000000Z",
            "updated_at": "2023-07-06T05:27:31.000000Z",
            "deleted_at": null,
            "created_user_id": 1,
            "updated_user_id": 1,
            "deleted_user_id": null
            }
        ]
        }
    ])

    const [restaurante10, setRestaurante10] = useState([

    ])

    const [restaurante11, setRestaurante11] = useState([
        {
        "id": 11,
        "descripcion": ".",
        "categoria": "Pollerías",
        "image_pc": "https://back.mds-cusquena.com/images/restaurante/1/1-desk-1688422141.svg",
        "imagemobile": "https://back.mds-cusquena.com/images/restaurante/1/1-mb-1688422141.svg",
        "platos": [
          {
            "id": 1,
            "restaurante_id": 1,
            "titulo": "1/4 de pollo a la brasa",
            "descripcion": null,
            "precio": "25.00",
            "imagen_pc": "1-desk-1688422249.png",
            "imagen_mobile": "1-mb-1688422249.png",
            "descripcion_adicional": null,
            "imagen_adicional": null,
            "active": true,
            "created_at": "2023-07-03T22:10:49.000000Z",
            "updated_at": "2023-07-06T04:00:17.000000Z",
            "deleted_at": null,
            "created_user_id": 1,
            "updated_user_id": 1,
            "deleted_user_id": null
          },
          {
            "id": 23,
            "restaurante_id": 1,
            "titulo": "Sanguche de pollo a la brasa",
            "descripcion": null,
            "precio": "20.00",
            "imagen_pc": "23-desk-1688690015.png",
            "imagen_mobile": "23-mb-1688690015.png",
            "descripcion_adicional": null,
            "imagen_adicional": null,
            "active": true,
            "created_at": "2023-07-07T00:33:35.000000Z",
            "updated_at": "2023-07-07T00:33:46.000000Z",
            "deleted_at": null,
            "created_user_id": 1,
            "updated_user_id": 1,
            "deleted_user_id": null
          }
        ]
      },
      {
        "id": 11,
        "descripcion": "-",
        "categoria": "Pollerías",
        "image_pc": "https://back.mds-cusquena.com/images/restaurante/25/25-desk-1688687894.svg",
        "imagemobile": "https://back.mds-cusquena.com/images/restaurante/25/25-mb-1688687894.svg",
        "platos": [
          {
            "id": 37,
            "restaurante_id": 25,
            "titulo": "Plato 1",
            "descripcion": "Anticuchos de corazon de res con papitas doradas y aji de la casa.",
            "precio": "25.00",
            "imagen_pc": "37-desk-1688694015.png",
            "imagen_mobile": "37-mb-1688694015.png",
            "descripcion_adicional": null,
            "imagen_adicional": null,
            "active": true,
            "created_at": "2023-07-07T01:40:15.000000Z",
            "updated_at": "2023-07-07T01:40:15.000000Z",
            "deleted_at": null,
            "created_user_id": 1,
            "updated_user_id": 1,
            "deleted_user_id": null
          }
        ]
      }
    ])

    const [restaurante12, setRestaurante12] = useState([
        {
        "id": 12,
        "descripcion": "-",
        "categoria": "Regional",
        "image_pc": "https://back.mds-cusquena.com/images/restaurante/13/13-desk-1688619621.svg",
        "imagemobile": "https://back.mds-cusquena.com/images/restaurante/13/13-mb-1688619621.svg",
        "platos": [
            {
            "id": 14,
            "restaurante_id": 13,
            "titulo": "Plato 1",
            "descripcion": "Saltado Mar y Tierra con espejo de quinua cremosa y crocante de parmesano",
            "precio": "25.00",
            "imagen_pc": "14-desk-1688621536.png",
            "imagen_mobile": "14-mb-1688621536.png",
            "descripcion_adicional": null,
            "imagen_adicional": null,
            "active": true,
            "created_at": "2023-07-06T05:32:16.000000Z",
            "updated_at": "2023-07-06T05:32:16.000000Z",
            "deleted_at": null,
            "created_user_id": 1,
            "updated_user_id": 1,
            "deleted_user_id": null
            },
            {
            "id": 15,
            "restaurante_id": 13,
            "titulo": "Plato 2",
            "descripcion": "Trucha de Lago, platanos caramelizados, mix de verduras y mantequilla de maracuya",
            "precio": "25.00",
            "imagen_pc": "15-desk-1688621567.png",
            "imagen_mobile": "15-mb-1688621567.png",
            "descripcion_adicional": null,
            "imagen_adicional": null,
            "active": true,
            "created_at": "2023-07-06T05:32:47.000000Z",
            "updated_at": "2023-07-06T05:32:47.000000Z",
            "deleted_at": null,
            "created_user_id": 1,
            "updated_user_id": 1,
            "deleted_user_id": null
            }
        ]
        },
        {
        "id": 12,
        "descripcion": "-",
        "categoria": "Regional",
        "image_pc": "https://back.mds-cusquena.com/images/restaurante/14/14-desk-1688619652.svg",
        "imagemobile": "https://back.mds-cusquena.com/images/restaurante/14/14-mb-1688619652.svg",
        "platos": [
            {
            "id": 17,
            "restaurante_id": 14,
            "titulo": "Plato 2",
            "descripcion": "Asado de tira en salsa de hierbas andinas y tuberculos",
            "precio": "25.00",
            "imagen_pc": "17-desk-1688621693.png",
            "imagen_mobile": "17-mb-1688621693.png",
            "descripcion_adicional": null,
            "imagen_adicional": null,
            "active": true,
            "created_at": "2023-07-06T05:34:53.000000Z",
            "updated_at": "2023-07-06T05:34:53.000000Z",
            "deleted_at": null,
            "created_user_id": 1,
            "updated_user_id": 1,
            "deleted_user_id": null
            },
            {
            "id": 16,
            "restaurante_id": 14,
            "titulo": "Plato 1",
            "descripcion": "Tiradito pachamanquero",
            "precio": "25.00",
            "imagen_pc": "16-desk-1688690106.png",
            "imagen_mobile": "16-mb-1688690106.png",
            "descripcion_adicional": null,
            "imagen_adicional": null,
            "active": true,
            "created_at": "2023-07-06T05:34:06.000000Z",
            "updated_at": "2023-07-07T00:35:06.000000Z",
            "deleted_at": null,
            "created_user_id": 1,
            "updated_user_id": 1,
            "deleted_user_id": null
            }
        ]
        },
        {
        "id": 12,
        "descripcion": "-",
        "categoria": "Regional",
        "image_pc": "https://back.mds-cusquena.com/images/restaurante/20/20-desk-1688684783.svg",
        "imagemobile": "https://back.mds-cusquena.com/images/restaurante/20/20-mb-1688684783.svg",
        "platos": [
            {
            "id": 27,
            "restaurante_id": 20,
            "titulo": "Cabrito a la Norteña",
            "descripcion": "Cabrito a la Norteña",
            "precio": "25.00",
            "imagen_pc": "27-desk-1688693085.png",
            "imagen_mobile": "27-mb-1688693085.png",
            "descripcion_adicional": null,
            "imagen_adicional": null,
            "active": true,
            "created_at": "2023-07-07T01:24:45.000000Z",
            "updated_at": "2023-07-07T01:24:45.000000Z",
            "deleted_at": null,
            "created_user_id": 1,
            "updated_user_id": 1,
            "deleted_user_id": null
            },
            {
            "id": 28,
            "restaurante_id": 20,
            "titulo": "Frito Trujillano",
            "descripcion": "Frito Trujillano",
            "precio": "25.00",
            "imagen_pc": "28-desk-1688693183.png",
            "imagen_mobile": "28-mb-1688693183.png",
            "descripcion_adicional": null,
            "imagen_adicional": null,
            "active": true,
            "created_at": "2023-07-07T01:26:23.000000Z",
            "updated_at": "2023-07-07T01:26:23.000000Z",
            "deleted_at": null,
            "created_user_id": 1,
            "updated_user_id": 1,
            "deleted_user_id": null
            }
        ]
        }
    ])

    const [restaurante13, setRestaurante13] = useState([
        
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
                if (id === 3){
                    setRestactivo(restaurante3)
                }

                if (id === 4){
                    setRestactivo(restaurante4)
                }
                if (id === 5){
                    setRestactivo(restaurante5)
                }
                if (id === 6){
                    setRestactivo(restaurante6)
                }
                if (id === 7){
                    setRestactivo(restaurante7)
                }
                if (id === 8){
                    setRestactivo(restaurante8)
                }
                if (id === 9){
                    setRestactivo(restaurante9)
                }
                if (id === 10){
                    setRestactivo(restaurante10)
                }
                if (id === 11){
                    setRestactivo(restaurante11)
                }
                if (id === 12){
                    setRestactivo(restaurante12)
                }
                if (id === 13){
                    setRestactivo(restaurante13)
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
