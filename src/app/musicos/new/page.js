import FormMusico from "@/components/FormMusico"
import { newMusico } from "@/lib/actions"

function page() {
  return (
    <div>
        <h3>Nuevo musico</h3>
        <FormMusico action={newMusico} title='Crear musico' object={null}  />
    </div>
  )
}

export default page