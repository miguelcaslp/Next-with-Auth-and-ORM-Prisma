
function Cancion({ children, cancion }) {
    return (
        <div style={{ 'border': '1px solid lightgrey', 'padding': '50px' }}>
            <p><strong>{cancion.nombre}</strong></p>
            <p>{cancion.duracion}</p>
            {children}
        </div>
    )
}

export default Cancion