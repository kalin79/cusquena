import { useEffect, useRef, useState } from 'react'


import { useRouter } from 'next/router'

import Layout from '../../../components/layout'
import BannerPrincial from '../../../components/restaurantes/bannerrestaurante'
// import Cabecera from '../../../components/help/cabecerares'
import Plato from '../../../components/help/plato'

import styles from  '@/styles/sass/restaurantes.module.sass'


export default function Restaurante() {
    const router = useRouter()
    const {categoria, id} = router.query
    const resID = useRef(categoria)
    let boolInit =  useRef(false)

    const [restaurantes, setRestaurantes] = useState([
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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

    const [categorias, setCategorias] = useState([
        {
        "id": 3,
        "titulo": "Chifa",
        "icono": "https://back.mds-cusquena.com/images/categorias/3/3-icon-1688748082.svg"
        },
        {
        "id": 4,
        "titulo": "Contemporáneo",
        "icono": "https://back.mds-cusquena.com/images/categorias/4/4-icon-1688748121.svg"
        },
        {
        "id": 5,
        "titulo": "Marina",
        "icono": "https://back.mds-cusquena.com/images/categorias/5/5-icon-1688748141.svg"
        },
        {
        "id": 6,
        "titulo": "Hamburguesas",
        "icono": "https://back.mds-cusquena.com/images/categorias/6/6-icon-1688748205.svg"
        },
        {
        "id": 7,
        "titulo": "Nikkei",
        "icono": "https://back.mds-cusquena.com/images/categorias/7/7-icon-1688748221.svg"
        },
        {
        "id": 8,
        "titulo": "Pastas",
        "icono": "https://back.mds-cusquena.com/images/categorias/8/8-icon-1688748235.svg"
        },
        {
        "id": 9,
        "titulo": "Pizzas",
        "icono": "https://back.mds-cusquena.com/images/categorias/9/9-icon-1688748270.svg"
        },
        {
        "id": 11,
        "titulo": "Pollerías",
        "icono": "https://back.mds-cusquena.com/images/categorias/11/11-icon-1688748306.svg"
        },
        {
        "id": 12,
        "titulo": "Regional",
        "icono": "https://back.mds-cusquena.com/images/categorias/12/12-icon-1688748325.svg"
        },
        {
        "id": 1,
        "titulo": "Carnes",
        "icono": "https://back.mds-cusquena.com/images/categorias/1/1-icon-1688748364.svg"
        },
        {
        "id": 2,
        "titulo": "Criollo",
        "icono": "https://back.mds-cusquena.com/images/categorias/2/2-icon-1688748379.svg"
        }
    ])

    const [platoactivo, setPlatoactivo] = useState([])
    const [titleactivo, setTitleactivo] = useState('')


    useEffect( () => {
        if (!boolInit.current){
            boolInit.current = true

            dataPlato()

           
        }
    },[]) 

    const  dataPlato =  async function () {
        let idCategoria = 0
        let nuevosPlatos
        let arrPlato = []
        const idUrl = await window.location.href.split('/').pop()
        let imgRestaurante
        await restaurantes.forEach((restaurante) => {
            imgRestaurante = restaurante.image_pc
            if (restaurante.platos){
                nuevosPlatos = restaurante.platos.map((plato) =>{
                    if (plato.restaurante_id === parseInt(idUrl)){
                        idCategoria = imgRestaurante
                        arrPlato.push(plato)
                        return plato
                    }
                })
                // console.log(1)
            }
        })

        // console.log(arrPlato)
        // console.log(nuevosPlatos)
        setTitleactivo(idCategoria)
        setPlatoactivo(arrPlato)

    }


    
    return (
        <>
            <div className='overflowHidden'>
                <Layout
                    title={'Cusqueña, Maestros del Sabor'}
                    description={'Cusqueña, Maestros del Sabor'}
                >
                    <BannerPrincial 
                        data={ titleactivo } 
                    />
                    <div className={styles.restauranteContendorDetalle}>
                        <div className='container'>
                            <div className={styles.gridRestaurante}>
                                {platoactivo?.map((items,index) => (
                                    <Plato 
                                        key={index}
                                        data={items } 
                                    />
                                ))}
                                
                                {/* <div className={styles.boxPlato}>
                                    <h2>pollo a la brasa<br /> primos</h2>
                                    <Plato data={ ['cusmalta.png','59.99','MARIDA BIEN <br>CON CUSQUEÑA <br>DE TRIGO'] } />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </Layout> 
            </div>        
        </>
    )
}
