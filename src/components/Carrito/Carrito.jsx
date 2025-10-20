
import styles from './Carrito.module.css';

const Carrito = ({carrito, setCarrito}) => {

    const vaciarCarrito = () => {
        setCarrito([]);
    };
   
    return(
        <div>
            <h2>Carrito de Compra</h2>
                <ul className={styles.carro}>
                    {carrito.length === 0 ? (
                        <p>El carrito esta vacio </p> 
                    ) : (
                        <>
                        {carrito.map((producto) => (
                            <div key={producto.id}>
                                <img src={producto.image} alt={producto.title} height={80} width={80} />
                                <p> {producto.title} : $ {producto.price} </p>
                                
                            </div>
                        ))}

                        <div >
                            <h3>Productos en carrito: {carrito.length}</h3>
                            <button className={styles.botonvaciar} onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
                        </div>
                        </>
                    )}
                </ul>
        </div>
    )

}

export default Carrito;
