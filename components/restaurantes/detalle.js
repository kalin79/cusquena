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
            "id": 24,
            "descripcion": "-",
            "categoria_id": 1,
            "categoria": "Carnes",
            "image_pc": "https://back.mds-cusquena.com/images/restaurante/24/24-desk-1688775588.svg",
            "imagemobile": "https://back.mds-cusquena.com/images/restaurante/24/24-mb-1688775588.svg",
            "platos": [
              {
                "id": 36,
                "restaurante_id": 24,
                "restaurante": "Baco y Vaca",
                "titulo": "Plato 2",
                "descripcion": "Brocheta de cuadril argentino con papas tumbay",
                "precio": "S/25.00",
                "marinaje": "DOBLE MALTA",
                "image_pc": "https://back.mds-cusquena.com/images/restaurante/24/plato/36/36-desk-1688693833.png",
                "imagemobile": "https://back.mds-cusquena.com/images/restaurante/24/plato/36/36-mb-1688693833.png"
              },
              {
                "id": 35,
                "restaurante_id": 24,
                "restaurante": "Baco y Vaca",
                "titulo": "Plato 1",
                "descripcion": "Anticucho de corazón de res argentino con papas tumbay",
                "precio": "S/15.00",
                "marinaje": "NEGRA",
                "image_pc": "https://back.mds-cusquena.com/images/restaurante/24/plato/35/35-desk-1688693726.png",
                "imagemobile": "https://back.mds-cusquena.com/images/restaurante/24/plato/35/35-mb-1688693726.png"
              }
            ]
        },
        {
            "id": 26,
            "descripcion": "-",
            "categoria_id": 1,
            "categoria": "Carnes",
            "image_pc": "https://back.mds-cusquena.com/images/restaurante/26/26-desk-1688687933.svg",
            "imagemobile": "https://back.mds-cusquena.com/images/restaurante/26/26-mb-1688687933.svg",
            "platos": [
              {
                "id": 38,
                "restaurante_id": 26,
                "restaurante": "Tony Romas",
                "titulo": "Plato 1",
                "descripcion": "Costillas St Louis a la parrilla servidas con papas fritas y ensalada de col.",
                "precio": "S/30.00",
                "marinaje": "NEGRA",
                "image_pc": "https://back.mds-cusquena.com/images/restaurante/26/plato/38/38-desk-1688694101.png",
                "imagemobile": "https://back.mds-cusquena.com/images/restaurante/26/plato/38/38-mb-1688694101.png"
              }
            ]
        },
        {
            "id": 2,
            "descripcion": "-",
            "categoria_id": 1,
            "categoria": "Carnes",
            "image_pc": "https://back.mds-cusquena.com/images/restaurante/2/2-desk-1688684720.svg",
            "imagemobile": "https://back.mds-cusquena.com/images/restaurante/2/2-mb-1688684720.svg",
            "platos": [
              {
                "id": 24,
                "restaurante_id": 2,
                "restaurante": "La Cuadra de Salvador",
                "titulo": "Chorizo Salvador",
                "descripcion": "Chorizo Salvador",
                "precio": "S/20.00",
                "marinaje": "DORADA",
                "image_pc": "https://back.mds-cusquena.com/images/restaurante/2/plato/24/24-desk-1688690884.png",
                "imagemobile": "https://back.mds-cusquena.com/images/restaurante/2/plato/24/24-mb-1688690884.png"
              },
              {
                "id": 5,
                "restaurante_id": 2,
                "restaurante": "La Cuadra de Salvador",
                "titulo": "Sandwich de picaña ahumada",
                "descripcion": "Sandwich de picaña ahumada",
                "precio": "S/25.00",
                "marinaje": "DOBLE MALTA",
                "image_pc": "https://back.mds-cusquena.com/images/restaurante/2/plato/5/5-desk-1688620269.png",
                "imagemobile": "https://back.mds-cusquena.com/images/restaurante/2/plato/5/5-mb-1688620269.png"
              }
            ]
        }
    ])

    const [restaurante2, setRestaurante2] = useState([
        {
            "id": 7,
            "descripcion": "-",
            "categoria_id": 2,
            "categoria": "Criollo",
            "image_pc": "https://back.mds-cusquena.com/images/restaurante/7/7-desk-1688619204.svg",
            "imagemobile": "https://back.mds-cusquena.com/images/restaurante/7/7-mb-1688619204.svg",
            "platos": [
              {
                "id": 9,
                "restaurante_id": 7,
                "restaurante": "La Huaca",
                "titulo": "Plato 1",
                "descripcion": "Anticuchitos de corazón, choclito frito y papitas doradas",
                "precio": "S/20.00",
                "marinaje": "NEGRA",
                "image_pc": "https://back.mds-cusquena.com/images/restaurante/7/plato/9/9-desk-1688689686.png",
                "imagemobile": "https://back.mds-cusquena.com/images/restaurante/7/plato/9/9-mb-1688689686.png"
              },
              {
                "id": 4,
                "restaurante_id": 7,
                "restaurante": "La Huaca",
                "titulo": "Plato 2",
                "descripcion": "Panceta Char Siu, chaufa blanco meloso al mirín y camote crocante",
                "precio": "S/25.00",
                "marinaje": "TRIGO",
                "image_pc": "https://back.mds-cusquena.com/images/restaurante/7/plato/4/4-desk-1688619272.png",
                "imagemobile": "https://back.mds-cusquena.com/images/restaurante/7/plato/4/4-mb-1688619272.png"
              }
            ]
          },
          {
            "id": 11,
            "descripcion": "-",
            "categoria_id": 2,
            "categoria": "Criollo",
            "image_pc": "https://back.mds-cusquena.com/images/restaurante/11/11-desk-1688619416.svg",
            "imagemobile": "https://back.mds-cusquena.com/images/restaurante/11/11-mb-1688619416.svg",
            "platos": [
              {
                "id": 11,
                "restaurante_id": 11,
                "restaurante": "Cumpa",
                "titulo": "Plato 2",
                "descripcion": "Seco de nuestro rico norte",
                "precio": "S/25.00",
                "marinaje": "NEGRA",
                "image_pc": "https://back.mds-cusquena.com/images/restaurante/11/plato/11/11-desk-1688689772.png",
                "imagemobile": "https://back.mds-cusquena.com/images/restaurante/11/plato/11/11-mb-1688689772.png"
              },
              {
                "id": 10,
                "restaurante_id": 11,
                "restaurante": "Cumpa",
                "titulo": "Plato 1",
                "descripcion": "Ceviche Mixto a las brasas ardientes",
                "precio": "S/20.00",
                "marinaje": "DOBLE MALTA",
                "image_pc": "https://back.mds-cusquena.com/images/restaurante/11/plato/10/10-desk-1688621023.png",
                "imagemobile": "https://back.mds-cusquena.com/images/restaurante/11/plato/10/10-mb-1688621023.png"
              }
            ]
          },
          {
            "id": 28,
            "descripcion": "-",
            "categoria_id": 2,
            "categoria": "Criollo",
            "image_pc": "https://back.mds-cusquena.com/images/restaurante/28/28-desk-1688688017.svg",
            "imagemobile": "https://back.mds-cusquena.com/images/restaurante/28/28-mb-1688688017.svg",
            "platos": [
              {
                "id": 41,
                "restaurante_id": 28,
                "restaurante": "La Capitana",
                "titulo": "Plato 1",
                "descripcion": "Leche de tigre a lo macho",
                "precio": "S/25.00",
                "marinaje": "DORADA",
                "image_pc": "https://back.mds-cusquena.com/images/restaurante/28/plato/41/41-desk-1688694301.png",
                "imagemobile": "https://back.mds-cusquena.com/images/restaurante/28/plato/41/41-mb-1688694301.png"
              },
              {
                "id": 42,
                "restaurante_id": 28,
                "restaurante": "La Capitana",
                "titulo": "Plato 2",
                "descripcion": "Anticuchos a la capitana",
                "precio": "S/20.00",
                "marinaje": "NEGRA",
                "image_pc": "https://back.mds-cusquena.com/images/restaurante/28/plato/42/42-desk-1688694368.png",
                "imagemobile": "https://back.mds-cusquena.com/images/restaurante/28/plato/42/42-mb-1688694368.png"
              }
            ]
          },
          {
            "id": 29,
            "descripcion": "-",
            "categoria_id": 2,
            "categoria": "Criollo",
            "image_pc": "https://back.mds-cusquena.com/images/restaurante/29/29-desk-1688688053.svg",
            "imagemobile": "https://back.mds-cusquena.com/images/restaurante/29/29-mb-1688688053.svg",
            "platos": [
              {
                "id": 43,
                "restaurante_id": 29,
                "restaurante": "Jacaranda",
                "titulo": "Plato 1",
                "descripcion": "Pachamanca Huanuqueña",
                "precio": "S/25.00",
                "marinaje": "TRIGO",
                "image_pc": "https://back.mds-cusquena.com/images/restaurante/29/plato/43/43-desk-1688694445.png",
                "imagemobile": "https://back.mds-cusquena.com/images/restaurante/29/plato/43/43-mb-1688694445.png"
              },
              {
                "id": 44,
                "restaurante_id": 29,
                "restaurante": "Jacaranda",
                "titulo": "Plato 2",
                "descripcion": "Locro de Gallina",
                "precio": "S/25.00",
                "marinaje": "DOBLE MALTA",
                "image_pc": "https://back.mds-cusquena.com/images/restaurante/29/plato/44/44-desk-1688694494.png",
                "imagemobile": "https://back.mds-cusquena.com/images/restaurante/29/plato/44/44-mb-1688694494.png"
              }
            ]
        }
    ])

    const [restaurante3, setRestaurante3] = useState([
        {
            "id": 30,
            "descripcion": "-",
            "categoria_id": 3,
            "categoria": "Chifa",
            "image_pc": "https://back.mds-cusquena.com/images/restaurante/30/30-desk-1688688100.svg",
            "imagemobile": "https://back.mds-cusquena.com/images/restaurante/30/30-mb-1688688100.svg",
            "platos": [
              {
                "id": 45,
                "restaurante_id": 30,
                "restaurante": "Master Kong",
                "titulo": "Combo 1",
                "descripcion": "01 cha siu pao, 01 kay pao, 3 siu mai",
                "precio": "S/25.00",
                "marinaje": "TRIGO",
                "image_pc": "https://back.mds-cusquena.com/images/restaurante/30/plato/45/45-desk-1688694590.png",
                "imagemobile": "https://back.mds-cusquena.com/images/restaurante/30/plato/45/45-mb-1688694590.png"
              },
              {
                "id": 46,
                "restaurante_id": 30,
                "restaurante": "Master Kong",
                "titulo": "Combo 2",
                "descripcion": "02 siu kao frito, 02 roll primavera, 03 siu mai",
                "precio": "S/20.00",
                "marinaje": "TRIGO",
                "image_pc": "https://back.mds-cusquena.com/images/restaurante/30/plato/46/46-desk-1688694636.png",
                "imagemobile": "https://back.mds-cusquena.com/images/restaurante/30/plato/46/46-mb-1688694636.png"
              }
            ]
        }
    ])

    const [restaurante4, setRestaurante4] = useState([
        {
            "id": 5,
            "descripcion": "-",
            "categoria_id": 4,
            "categoria": "Contemporáneo",
            "image_pc": "https://back.mds-cusquena.com/images/restaurante/5/5-desk-1688618269.svg",
            "imagemobile": "https://back.mds-cusquena.com/images/restaurante/5/5-mb-1688618269.svg",
            "platos": [
              {
                "id": 7,
                "restaurante_id": 5,
                "restaurante": "Baan",
                "titulo": "Plato 2",
                "descripcion": "Arroz Baan",
                "precio": "S/25.00",
                "marinaje": "TRIGO",
                "image_pc": "https://back.mds-cusquena.com/images/restaurante/5/plato/7/7-desk-1688620684.png",
                "imagemobile": "https://back.mds-cusquena.com/images/restaurante/5/plato/7/7-mb-1688620684.png"
              },
              {
                "id": 6,
                "restaurante_id": 5,
                "restaurante": "Baan",
                "titulo": "Plato 1",
                "descripcion": "Karipap empanadas de langostino con salsa de curry",
                "precio": "S/25.00",
                "marinaje": "DOBLE MALTA",
                "image_pc": "https://back.mds-cusquena.com/images/restaurante/5/plato/6/6-desk-1688620498.png",
                "imagemobile": "https://back.mds-cusquena.com/images/restaurante/5/plato/6/6-mb-1688620498.png"
              }
            ]
        }
    ])

    const [restaurante5, setRestaurante5] = useState([
        {
            "id": 6,
            "descripcion": "-",
            "categoria_id": 5,
            "categoria": "Marina",
            "image_pc": "https://back.mds-cusquena.com/images/restaurante/6/6-desk-1688618975.svg",
            "imagemobile": "https://back.mds-cusquena.com/images/restaurante/6/6-mb-1688618975.svg",
            "platos": [
              {
                "id": 8,
                "restaurante_id": 6,
                "restaurante": "Amoramar",
                "titulo": "Tapa Pato",
                "descripcion": "2 Spring roll relleno con arroz con pato de la casa, mayonesa de pimiento ahumado y de culantro",
                "precio": "S/25.00",
                "marinaje": "NEGRA",
                "image_pc": "https://back.mds-cusquena.com/images/restaurante/6/plato/8/8-desk-1688688338.png",
                "imagemobile": "https://back.mds-cusquena.com/images/restaurante/6/plato/8/8-mb-1688688338.png"
              },
              {
                "id": 3,
                "restaurante_id": 6,
                "restaurante": "Amoramar",
                "titulo": "Chaufa Capon",
                "descripcion": "Panceta glaseada, huevo, frejolito chino y encurtidos de 5 sabores",
                "precio": "S/25.00",
                "marinaje": "TRIGO",
                "image_pc": "https://back.mds-cusquena.com/images/restaurante/6/plato/3/3-desk-1688619061.png",
                "imagemobile": "https://back.mds-cusquena.com/images/restaurante/6/plato/3/3-mb-1688619061.png"
              }
            ]
          },
          {
            "id": 23,
            "descripcion": "-",
            "categoria_id": 5,
            "categoria": "Marina",
            "image_pc": "https://back.mds-cusquena.com/images/restaurante/23/23-desk-1688687823.svg",
            "imagemobile": "https://back.mds-cusquena.com/images/restaurante/23/23-mb-1688687823.svg",
            "platos": [
              {
                "id": 34,
                "restaurante_id": 23,
                "restaurante": "Alfresco",
                "titulo": "Plato 2",
                "descripcion": "Arroz meloso",
                "precio": "S/25.00",
                "marinaje": "DOBLE MALTA",
                "image_pc": "https://back.mds-cusquena.com/images/restaurante/23/plato/34/34-desk-1688693550.png",
                "imagemobile": "https://back.mds-cusquena.com/images/restaurante/23/plato/34/34-mb-1688693550.png"
              },
              {
                "id": 33,
                "restaurante_id": 23,
                "restaurante": "Alfresco",
                "titulo": "Plato 1",
                "descripcion": "Jalea nikkei",
                "precio": "S/25.00",
                "marinaje": "TRIGO",
                "image_pc": "https://back.mds-cusquena.com/images/restaurante/23/plato/33/33-desk-1688693491.png",
                "imagemobile": "https://back.mds-cusquena.com/images/restaurante/23/plato/33/33-mb-1688693491.png"
              }
            ]
        }
    ])    

    const [restaurante6, setRestaurante6] = useState([
        {
            "id": 21,
            "descripcion": "-",
            "categoria_id": 6,
            "categoria": "Hamburguesas",
            "image_pc": "https://back.mds-cusquena.com/images/restaurante/21/21-desk-1688687722.svg",
            "imagemobile": "https://back.mds-cusquena.com/images/restaurante/21/21-mb-1688687722.svg",
            "platos": [
              {
                "id": 29,
                "restaurante_id": 21,
                "restaurante": "Burger Boy",
                "titulo": "Smoke Buddha",
                "descripcion": "Doble carne (120gr), tocino, cebolla blanca, tomates asados, BBQ ponja, jalapeños encurtidos, cheddar.",
                "precio": "S/25.00",
                "marinaje": "NEGRA",
                "image_pc": "https://back.mds-cusquena.com/images/restaurante/21/plato/29/29-desk-1688693283.png",
                "imagemobile": "https://back.mds-cusquena.com/images/restaurante/21/plato/29/29-mb-1688693283.png"
              },
              {
                "id": 30,
                "restaurante_id": 21,
                "restaurante": "Burger Boy",
                "titulo": "Cheeseburger",
                "descripcion": "Carne de 120gr , cheddar y salsa G",
                "precio": "S/20.00",
                "marinaje": "DORADA",
                "image_pc": "https://back.mds-cusquena.com/images/restaurante/21/plato/30/30-desk-1688693320.png",
                "imagemobile": "https://back.mds-cusquena.com/images/restaurante/21/plato/30/30-mb-1688693320.png"
              }
            ]
          },
          {
            "id": 22,
            "descripcion": "-",
            "categoria_id": 6,
            "categoria": "Hamburguesas",
            "image_pc": "https://back.mds-cusquena.com/images/restaurante/22/22-desk-1688687780.svg",
            "imagemobile": "https://back.mds-cusquena.com/images/restaurante/22/22-mb-1688687780.svg",
            "platos": [
              {
                "id": 31,
                "restaurante_id": 22,
                "restaurante": "Bendita Burger",
                "titulo": "Bendita Burger",
                "descripcion": "Burger de asado de tira (150gr), cebolla caramelizada sin azucar, cheddar, salsa bendita, pan artesanal",
                "precio": "S/20.00",
                "marinaje": "DOBLE MALTA",
                "image_pc": "https://back.mds-cusquena.com/images/restaurante/22/plato/31/31-desk-1688693382.png",
                "imagemobile": "https://back.mds-cusquena.com/images/restaurante/22/plato/31/31-mb-1688693382.png"
              },
              {
                "id": 32,
                "restaurante_id": 22,
                "restaurante": "Bendita Burger",
                "titulo": "Chanchiburger",
                "descripcion": "Burger de asado de tira (150gr), cheddar, BBQ pulled pork, pickles, salsa bendita",
                "precio": "S/25.00",
                "marinaje": "NEGRA",
                "image_pc": "https://back.mds-cusquena.com/images/restaurante/22/plato/32/32-desk-1688693416.png",
                "imagemobile": "https://back.mds-cusquena.com/images/restaurante/22/plato/32/32-mb-1688693416.png"
              }
            ]
        }
    ])

    const [restaurante7, setRestaurante7] = useState([
        {
            "id": 15,
            "descripcion": "-",
            "categoria_id": 7,
            "categoria": "Nikkei",
            "image_pc": "https://back.mds-cusquena.com/images/restaurante/15/15-desk-1688619684.svg",
            "imagemobile": "https://back.mds-cusquena.com/images/restaurante/15/15-mb-1688619684.svg",
            "platos": [
              {
                "id": 18,
                "restaurante_id": 15,
                "restaurante": "Bao",
                "titulo": "CANGRE BURGER BAO",
                "descripcion": "Hamburguesa de asado de tira y kombu, queso cheddar, rabanito encurtido, cebolla china, cebolla encurtida, ajonjolí, lechuga y Mayosriracha (2 baos).",
                "precio": "S/20.00",
                "marinaje": "TRIGO",
                "image_pc": "https://back.mds-cusquena.com/images/restaurante/15/plato/18/18-desk-1688621747.png",
                "imagemobile": "https://back.mds-cusquena.com/images/restaurante/15/plato/18/18-mb-1688621747.png"
              }
            ]
          },
          {
            "id": 16,
            "descripcion": "-",
            "categoria_id": 7,
            "categoria": "Nikkei",
            "image_pc": "https://back.mds-cusquena.com/images/restaurante/16/16-desk-1688619718.svg",
            "imagemobile": "https://back.mds-cusquena.com/images/restaurante/16/16-mb-1688619718.svg",
            "platos": [
              {
                "id": 20,
                "restaurante_id": 16,
                "restaurante": "Maketto",
                "titulo": "CEBICHE MARCIANO",
                "descripcion": "Cortes de pescado, leche de tigre marciana de culantro, patacones y chalaca con charapita.",
                "precio": "S/20.00",
                "marinaje": "DORADA",
                "image_pc": "https://back.mds-cusquena.com/images/restaurante/16/plato/20/20-desk-1688690446.png",
                "imagemobile": "https://back.mds-cusquena.com/images/restaurante/16/plato/20/20-mb-1688690446.png"
              }
            ]
          },
          {
            "id": 17,
            "descripcion": "-",
            "categoria_id": 7,
            "categoria": "Nikkei",
            "image_pc": "https://back.mds-cusquena.com/images/restaurante/17/17-desk-1688619774.svg",
            "imagemobile": "https://back.mds-cusquena.com/images/restaurante/17/17-mb-1688619774.svg",
            "platos": [
              {
                "id": 21,
                "restaurante_id": 17,
                "restaurante": "Poke 51",
                "titulo": "Plato 1",
                "descripcion": "Club 51 - Sandwich furai relleno de palta, col morada, queso crema y salmón.",
                "precio": "S/30.00",
                "marinaje": "DORADA",
                "image_pc": "https://back.mds-cusquena.com/images/restaurante/17/plato/21/21-desk-1688690663.png",
                "imagemobile": "https://back.mds-cusquena.com/images/restaurante/17/plato/21/21-mb-1688690663.png"
              },
              {
                "id": 22,
                "restaurante_id": 17,
                "restaurante": "Poke 51",
                "titulo": "Plato 2",
                "descripcion": "Crispy Taco de Atún",
                "precio": "S/15.00",
                "marinaje": "TRIGO",
                "image_pc": "https://back.mds-cusquena.com/images/restaurante/17/plato/22/22-desk-1688621994.png",
                "imagemobile": "https://back.mds-cusquena.com/images/restaurante/17/plato/22/22-mb-1688621994.png"
              }
            ]
          },
          {
            "id": 19,
            "descripcion": "-",
            "categoria_id": 7,
            "categoria": "Nikkei",
            "image_pc": "https://back.mds-cusquena.com/images/restaurante/19/19-desk-1688684656.svg",
            "imagemobile": "https://back.mds-cusquena.com/images/restaurante/19/19-mb-1688684656.svg",
            "platos": [
              {
                "id": 25,
                "restaurante_id": 19,
                "restaurante": "Coqui del Castillo",
                "titulo": "Plato 1: Maki Parmesano",
                "descripcion": "10 CORTES",
                "precio": "S/25.00",
                "marinaje": "TRIGO",
                "image_pc": "https://back.mds-cusquena.com/images/restaurante/19/plato/25/25-desk-1688692931.png",
                "imagemobile": "https://back.mds-cusquena.com/images/restaurante/19/plato/25/25-mb-1688692931.png"
              },
              {
                "id": 26,
                "restaurante_id": 19,
                "restaurante": "Coqui del Castillo",
                "titulo": "Plato 2: Maki Acevichado",
                "descripcion": "10 CORTES",
                "precio": "S/25.00",
                "marinaje": "DORADA",
                "image_pc": "https://back.mds-cusquena.com/images/restaurante/19/plato/26/26-desk-1688692967.png",
                "imagemobile": "https://back.mds-cusquena.com/images/restaurante/19/plato/26/26-mb-1688692967.png"
              }
            ]
        }
    ])

    const [restaurante8, setRestaurante8] = useState([
        {
            "id": 27,
            "descripcion": "-",
            "categoria_id": 8,
            "categoria": "Pastas",
            "image_pc": "https://back.mds-cusquena.com/images/restaurante/27/27-desk-1688687979.svg",
            "imagemobile": "https://back.mds-cusquena.com/images/restaurante/27/27-mb-1688687979.svg",
            "platos": [
              {
                "id": 39,
                "restaurante_id": 27,
                "restaurante": "Razzeto Tratoria",
                "titulo": "Plato 1",
                "descripcion": "Focaccia Capreso",
                "precio": "S/15.00",
                "marinaje": "DOBLE MALTA",
                "image_pc": "https://back.mds-cusquena.com/images/restaurante/27/plato/39/39-desk-1688694184.png",
                "imagemobile": "https://back.mds-cusquena.com/images/restaurante/27/plato/39/39-mb-1688694184.png"
              },
              {
                "id": 40,
                "restaurante_id": 27,
                "restaurante": "Razzeto Tratoria",
                "titulo": "Plato 2",
                "descripcion": "Lasagna a la bolognesa",
                "precio": "S/25.00",
                "marinaje": "DOBLE MALTA",
                "image_pc": "https://back.mds-cusquena.com/images/restaurante/27/plato/40/40-desk-1688694240.png",
                "imagemobile": "https://back.mds-cusquena.com/images/restaurante/27/plato/40/40-mb-1688694240.png"
              }
            ]
        }
    ])

    const [restaurante9, setRestaurante9] = useState([
        {
            "id": 12,
            "descripcion": "-",
            "categoria_id": 9,
            "categoria": "Pizzas",
            "image_pc": "https://back.mds-cusquena.com/images/restaurante/12/12-desk-1688619522.svg",
            "imagemobile": "https://back.mds-cusquena.com/images/restaurante/12/12-mb-1688619522.svg",
            "platos": [
              {
                "id": 12,
                "restaurante_id": 12,
                "restaurante": "Rossa",
                "titulo": "Plato 1",
                "descripcion": "Pizza Margherita",
                "precio": "S/25.00",
                "marinaje": "DORADA",
                "image_pc": "https://back.mds-cusquena.com/images/restaurante/12/plato/12/12-desk-1688689938.png",
                "imagemobile": "https://back.mds-cusquena.com/images/restaurante/12/plato/12/12-mb-1688689938.png"
              },
              {
                "id": 13,
                "restaurante_id": 12,
                "restaurante": "Rossa",
                "titulo": "Plato 2",
                "descripcion": "Pizza Prosciutto, hongos & trufa negra",
                "precio": "S/30.00",
                "marinaje": "DOBLE MALTA",
                "image_pc": "https://back.mds-cusquena.com/images/restaurante/12/plato/13/13-desk-1688621251.png",
                "imagemobile": "https://back.mds-cusquena.com/images/restaurante/12/plato/13/13-mb-1688621251.png"
              }
            ]
        }
    ])

    const [restaurante10, setRestaurante10] = useState([

    ])

    const [restaurante11, setRestaurante11] = useState([
        {
            "id": 1,
            "descripcion": ".",
            "categoria_id": 11,
            "categoria": "Pollerías",
            "image_pc": "https://back.mds-cusquena.com/images/restaurante/1/1-desk-1688422141.svg",
            "imagemobile": "https://back.mds-cusquena.com/images/restaurante/1/1-mb-1688422141.svg",
            "platos": [
              {
                "id": 23,
                "restaurante_id": 1,
                "restaurante": "Primos",
                "titulo": "Sanguche de pollo a la brasa",
                "descripcion": "",
                "precio": "S/20.00",
                "marinaje": "DORADA",
                "image_pc": "https://back.mds-cusquena.com/images/restaurante/1/plato/23/23-desk-1688690015.png",
                "imagemobile": "https://back.mds-cusquena.com/images/restaurante/1/plato/23/23-mb-1688690015.png"
              },
              {
                "id": 1,
                "restaurante_id": 1,
                "restaurante": "Primos",
                "titulo": "1/4 de pollo a la brasa",
                "descripcion": "",
                "precio": "S/25.00",
                "marinaje": "DOBLE MALTA",
                "image_pc": "https://back.mds-cusquena.com/images/restaurante/1/plato/1/1-desk-1688422249.png",
                "imagemobile": "https://back.mds-cusquena.com/images/restaurante/1/plato/1/1-mb-1688422249.png"
              }
            ]
        },
        {
            "id": 25,
            "descripcion": "-",
            "categoria_id": 11,
            "categoria": "Pollerías",
            "image_pc": "https://back.mds-cusquena.com/images/restaurante/25/25-desk-1688687894.svg",
            "imagemobile": "https://back.mds-cusquena.com/images/restaurante/25/25-mb-1688687894.svg",
            "platos": [
              {
                "id": 37,
                "restaurante_id": 25,
                "restaurante": "Rasson",
                "titulo": "Plato 1",
                "descripcion": "Anticuchos de corazon de res con papitas doradas y aji de la casa.",
                "precio": "S/25.00",
                "marinaje": "NEGRA",
                "image_pc": "https://back.mds-cusquena.com/images/restaurante/25/plato/37/37-desk-1688694015.png",
                "imagemobile": "https://back.mds-cusquena.com/images/restaurante/25/plato/37/37-mb-1688694015.png"
              }
            ]
        }
    ])

    const [restaurante12, setRestaurante12] = useState([
        {
            "id": 13,
            "descripcion": "-",
            "categoria_id": 12,
            "categoria": "Regional",
            "image_pc": "https://back.mds-cusquena.com/images/restaurante/13/13-desk-1688619621.svg",
            "imagemobile": "https://back.mds-cusquena.com/images/restaurante/13/13-mb-1688619621.svg",
            "platos": [
              {
                "id": 14,
                "restaurante_id": 13,
                "restaurante": "Yuraq",
                "titulo": "Plato 1",
                "descripcion": "Saltado Mar y Tierra con espejo de quinua cremosa y crocante de parmesano",
                "precio": "S/25.00",
                "marinaje": "DOBLE MALTA",
                "image_pc": "https://back.mds-cusquena.com/images/restaurante/13/plato/14/14-desk-1688621536.png",
                "imagemobile": "https://back.mds-cusquena.com/images/restaurante/13/plato/14/14-mb-1688621536.png"
              },
              {
                "id": 15,
                "restaurante_id": 13,
                "restaurante": "Yuraq",
                "titulo": "Plato 2",
                "descripcion": "Trucha de Lago, platanos caramelizados, mix de verduras y mantequilla de maracuya",
                "precio": "S/25.00",
                "marinaje": "TRIGO",
                "image_pc": "https://back.mds-cusquena.com/images/restaurante/13/plato/15/15-desk-1688621567.png",
                "imagemobile": "https://back.mds-cusquena.com/images/restaurante/13/plato/15/15-mb-1688621567.png"
              }
            ]
          },
          {
            "id": 14,
            "descripcion": "-",
            "categoria_id": 12,
            "categoria": "Regional",
            "image_pc": "https://back.mds-cusquena.com/images/restaurante/14/14-desk-1688619652.svg",
            "imagemobile": "https://back.mds-cusquena.com/images/restaurante/14/14-mb-1688619652.svg",
            "platos": [
              {
                "id": 16,
                "restaurante_id": 14,
                "restaurante": "Tunupa",
                "titulo": "Plato 1",
                "descripcion": "Tiradito pachamanquero",
                "precio": "S/25.00",
                "marinaje": "DORADA",
                "image_pc": "https://back.mds-cusquena.com/images/restaurante/14/plato/16/16-desk-1688690106.png",
                "imagemobile": "https://back.mds-cusquena.com/images/restaurante/14/plato/16/16-mb-1688690106.png"
              },
              {
                "id": 17,
                "restaurante_id": 14,
                "restaurante": "Tunupa",
                "titulo": "Plato 2",
                "descripcion": "Asado de tira en salsa de hierbas andinas y tuberculos",
                "precio": "S/25.00",
                "marinaje": "TRIGO",
                "image_pc": "https://back.mds-cusquena.com/images/restaurante/14/plato/17/17-desk-1688621693.png",
                "imagemobile": "https://back.mds-cusquena.com/images/restaurante/14/plato/17/17-mb-1688621693.png"
              }
            ]
          },
          {
            "id": 20,
            "descripcion": "-",
            "categoria_id": 12,
            "categoria": "Regional",
            "image_pc": "https://back.mds-cusquena.com/images/restaurante/20/20-desk-1688684783.svg",
            "imagemobile": "https://back.mds-cusquena.com/images/restaurante/20/20-mb-1688684783.svg",
            "platos": [
              {
                "id": 28,
                "restaurante_id": 20,
                "restaurante": "El Rincon de Vallejo",
                "titulo": "Frito Trujillano",
                "descripcion": "Frito Trujillano",
                "precio": "S/25.00",
                "marinaje": "DORADA",
                "image_pc": "https://back.mds-cusquena.com/images/restaurante/20/plato/28/28-desk-1688693183.png",
                "imagemobile": "https://back.mds-cusquena.com/images/restaurante/20/plato/28/28-mb-1688693183.png"
              },
              {
                "id": 27,
                "restaurante_id": 20,
                "restaurante": "El Rincon de Vallejo",
                "titulo": "Cabrito a la Norteña",
                "descripcion": "Cabrito a la Norteña",
                "precio": "S/25.00",
                "marinaje": "DOBLE MALTA",
                "image_pc": "https://back.mds-cusquena.com/images/restaurante/20/plato/27/27-desk-1688693085.png",
                "imagemobile": "https://back.mds-cusquena.com/images/restaurante/20/plato/27/27-mb-1688693085.png"
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
            if ((index !=9) && (!index != 12)){
                // console.log(index)
                document.getElementById(`nav${index+1}`).src=`/assets/${arrIcon[index]}.svg`
                element.classList.remove('active')
                gsap.to(_div,{
                    css: {
                        background: 'transparent'
                    }
                })
            } 
            
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
                                {/* <button onClick={ (e) => handleRestaurante(e,10,'iconpoke')} id="btnNav10">
                                    <div className={styles.boxCircle}>
                                        <Image src="/assets/iconpoke.svg" id="nav10" width={47} height={35} alt='Poke'  />
                                    </div>
                                    <p>Poke</p>
                                </button> */}
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
                                {/* <button onClick={ (e) => handleRestaurante(e,13,'iconsanguches')} id="btnNav13">
                                    <div className={styles.boxCircle}>
                                        <Image src="/assets/iconsanguches.svg" id="nav13" width={47} height={35} alt='Sanguches'  />
                                    </div>
                                    <p>Sanguches</p>
                                </button> */}
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
                                    url={items.id}
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
