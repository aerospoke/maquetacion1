import '../styles/footer.css'
import NavBarOption from './navBarOptions'

function Footer(){
    return(
        <footer className='footer'>
            
           <NavBarOption/>
           <div className='apartadoRedes'>
                <li>FB</li>
                <li>TW</li>
           </div>
         
        </footer>
    )   
}
export default Footer