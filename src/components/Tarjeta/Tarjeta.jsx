import { Link } from 'react-router-dom';
import { useState } from "react";

import styles from './Tarjeta.module.css';
//import Boton from '../Boton.jsx'

const Tarjeta = ({miTarjeta, prodEnCarrito}) => {
    
    const [carrito, setCarrito] = useState([]);

    const sumarAlCarrito = (producto) => {
        //Sumo el producto
        setCarrito([...carrito, producto]);
        //Paso el carrito a Producto
        prodEnCarrito(carrito)
    }

    return(

        <div className={styles.card}>
            <h3>{miTarjeta.title}</h3>
            <p>$ {miTarjeta.price}</p>
            <img src={miTarjeta.image} alt={miTarjeta.title} className={styles.cardImg} />
            {/* <Boton texto='Agregar' color="green" > </Boton> */}
            <button onClick={() => sumarAlCarrito ({miTarjeta})}>Agregar</button>
            <Link to={`/productos/${miTarjeta.id}`} >Detalles</Link>

        </div>
    );
}
 
export default Tarjeta;