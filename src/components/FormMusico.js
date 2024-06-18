import Button from "./button-form"
 
function FormMusico({ action, title, object, disabled=false }) {

    return (
        <form action={action} >
            <input type='hidden' name='id' value={object?.id} />
            <fieldset disabled={disabled}>
                <label htmlFor='nombre'>Nombre</label>
                <input type='text' id='nombre' name='nombre'
                    placeholder='Nombre'
                    defaultValue={object?.nombre} autoFocus ></input>
                <label htmlFor='fechaNacimiento'>Fecha Nacimiento</label>
                <input type='date' id='fechaNacimiento' name='fechaNacimiento'
                    placeholder='Fecha Nacimiento'
                    defaultValue={object?.fechaNacimiento} />
            </fieldset>
            <Button title={title} />
        </form>
    )
}

export default FormMusico