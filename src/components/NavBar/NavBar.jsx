import { Link } from "react-router-dom";
import styles from './NavBar.module.css';
import miImagen from '../../imagen/carrito.png'; // 1. Importa la imagen


const NavBar = () => {

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarlogo}>
                <img src={miImagen} alt="Descripción de la imagen" width="60" height="60" /> 
                {/* <a href="/">Mi Logo</a> */}
            </div>
            <ul className={styles.navbarlinks}>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/nosotros">Nosotros</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
            </ul>
         </nav>
    )
}

export default NavBar;