const Boton = ({ texto, color = "green" }) => {

    const estilo = { backgroundColor: color, 
                     color:"white",
                    padding:"10px", };
    return(
        <button style={estilo}>{texto}</button>
    );
}

export default Boton;