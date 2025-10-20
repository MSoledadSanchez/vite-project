import { useState, useEffect } from 'react';
import styles from './ListaProductos.module.css';
import { Link } from 'react-router-dom';

import Carrito from '../Carrito/Carrito.jsx';

const ListaProductos = ()=> {

    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    const [carrito, setCarrito] = useState([]);

    const agregarProducto= (producto) => {
        setCarrito([...carrito, producto]);
    }
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((respuesta) => respuesta.json())
            .then((datos) => {
                setProductos(datos);
                setCargando(false);
                })
            .catch((error) => {
                setError('Error al cargar productos');
                console.error('Error al cargar productos:', error);
                setCargando(false);
                })
    },[]);

    if (cargando) return 'Cargando productos, aguarde por favor...';
    if (error) return error;

    return(

        <>
        <div className={styles.listaproductos}>
                {productos.map(producto => (
                <div className={styles.card} key={producto.id} >
                    <h3>{producto.title}</h3>
                    <p>$ {producto.price}</p>
                    <img src={producto.image} alt={producto.title} className={styles.cardImg} />
            
                    <button onClick={() => agregarProducto(producto)}>Agregar</button>
                    <Link to={`/productos/${producto.id}`} >Detalles</Link>

                </div>
                ))}
        </div> 
        
        <Carrito carrito={carrito} setCarrito={setCarrito}/> 
        </>        
    );
}

export default ListaProductos;
