import { useEffect, useRef, useState } from 'react'

import Link from 'next/link'

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
            "id": 24,
            "descripcion": "-",
            "categoria_id": 1,
            "categoria": "Carnes",
            "image_pc": "https://back.mds-cusquena.com/images/restaurante/24/24-desk-1688687860.svg",
            "imagemobile": "https://back.mds-cusquena.com/images/restaurante/24/24-mb-1688687860.svg",
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
                        <div className='centrarBotonGeneral'>
                            <Link href='/restaurantes' className='botonGeneral'>REGRESAR A LA LISTA <br/>DE RESTAURANTES</Link>
                        </div>
                    </div>
                </Layout> 
            </div>        
        </>
    )
}
