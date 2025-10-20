import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const ProductoDetalle = () => {

    const { id } = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(respuesta => respuesta.json())
            .then(dato => setProducto(dato));
    },[id]);

    if(!producto)
        return <p>Cargando el detalle del producto......</p>

    return (
        <div>
            <h1>Detalle del Producto</h1>
            <p>Este es el detalle del producto con ID: {id}</p>
            <h2>{producto.title}</h2>
            <p>{producto.description}</p>
            <p>$ {producto.price}</p>
            <img src={producto.image} alt={producto.title} />
            
        </div>

    );

}

export default ProductoDetalle;