
function Musico({ children, musico }) {
    return (
        <div style={{ 'border': '1px solid lightgrey', 'padding': '50px' }}>
            <p><strong>{musico.nombre}</strong></p>
            <p>{musico.fechaNacimiento?.toString()}</p>
            {children}
        </div>
    )
}

export default Musico