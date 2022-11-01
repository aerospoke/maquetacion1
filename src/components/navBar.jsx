import '../styles/Navbar.css';
import NavBarOption from './navBarOptions';

function Navbar(){
    return(
        <div className="navBar">
            <div className='logo'><img src='https://static.vecteezy.com/system/resources/thumbnails/003/739/848/small/fm-logo-monogram-isolated-on-circle-element-design-template-free-vector.jpg'></img></div>
            
             <NavBarOption/>
        </div>
    )
}
export default Navbar;