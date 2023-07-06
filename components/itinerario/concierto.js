import Image from 'next/image'

import styles from  '../../styles/sass/itinerario.module.sass'

export default function Concierto() {
    return (
        <>
            <section>
                <div className={styles.sombraRombo}>
                    <div className={styles.boxConciertoSlider}>
                        <Image src="/assets/baretoalta.png" width = '1400' height = '1415' alt='Bareto' />
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
        </>
    )
}
