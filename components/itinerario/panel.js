import Image from 'next/image'

export default function Panel({items}) {
    // console.log(items)
    const {capacidad, descripcion, hora, horario, id, titulo, zona } = items
    return (
        <>
            <div className="panel closed">
                <div className="panel-header">
                    <h3>{hora} {items.titulo}</h3>
                    <div className='header-arrow'>
                        <Image src="/assets/arrow2.svg" width="16" height="8" alt='1 PM - CATA MARIDAJE CEVICHE'/>
                    </div>
                </div>
                <div className="panel-content">
                    <p>
                        {descripcion}
                    </p>
                    <p>Horario: {horario}</p>
                    <p>Zona: {zona}</p>
                    <p>Capacidad: {capacidad}</p>
                </div>
            </div>
        </>
    )
}
