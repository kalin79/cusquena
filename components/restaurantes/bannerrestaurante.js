import React from 'react'

// import Image from 'next/image'
import styles from  '../../styles/sass/banner.module.sass'

const Bannerrestaurante = ({data}) => {
    // console.log(data)
    return (
        <>
            <div className={styles.boxBanner}>
                <img  src="/assets/banner2.png" className={styles.banner} width="390" height="427" alt='Verificacion de edad' />
                <img  src="/assets/triangulo.png" className={styles.triangulo} width="247" height="375" alt='triangulo' />
                <img  src="/assets/triangulo.png" className={styles.triangulo2} width="247" height="375" alt='triangulo' />
                {/* <div className={styles.boxImgLogo2}>
                    <Image  src="/assets/logoIntro.svg" width="247" height="375" alt='Maestros del Sabor el Festival' />
                </div> */}
            </div>
            <div className={`${styles.boxCabeceraPC} ${styles.large}`}>
                {/* <div className={`iconRombo claro small ${styles.pos1}`}></div>
                <div className={`iconRombo claro ${styles.pos2}`}></div> */}
                <img  src={data} className={styles.banner} width="1440" height="606" alt='Verificacion de edad' />
            </div>
            <div className={styles.iconsRombo}>
                
                <div className={`boxContenidoRombo ${styles.posRombo} romboBannerCabecera`}>
                    <div className={`iconRombo claro small ${styles.pos1}`}></div>
                    <div className={`iconRombo claro ${styles.pos2}`}></div>
                    <div className='romboPrincipal'>
                        <div className='boxInfo'>
                            <div className={styles.cabeceraLogoRestaurante}>
                                <img src={data} width='100' height='100' alt="Restaurante"  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bannerrestaurante
