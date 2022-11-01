import '../styles/Content.css'
import Articulo from './articulo'
import {articulo} from '../articulo/articulo'
import ImagenesPortada from './imagenesPortada'

function Content(){
    const articulos = articulo.map(enunciado =>(
        <Articulo key={enunciado.id} {...enunciado}/>
    ))
    return(
        <div className='contenedor'>
            <div className='contenedor1'>
                 <div className='contenedorArticulo'>{articulos}</div>
            </div>
            <div className='contenedor2'>
                <ImagenesPortada/>
                <ImagenesPortada/>
                <ImagenesPortada/>
            </div>

        </div>
    )
}

export default Content