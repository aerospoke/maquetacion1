import  '../styles/articulo.css'

function Articulo({titulo,descripcion}){
    return(
        <div className='elarticulo'>
            <h1>{titulo}</h1>
            <h2>{descripcion}</h2>
            
        </div>
    )
}
export default Articulo