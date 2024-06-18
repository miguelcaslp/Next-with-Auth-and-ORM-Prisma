import FormMusico from '@/components/FormMusico'
import { prisma } from '@/lib/prisma'
import { editMusico } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({searchParams}) {
  const musico = await prisma.musico.findUnique({
    where: {
      id: Number(searchParams.id),
    },
  })

  return (
    <div>
        <h3>Editar musico {searchParams.id}</h3>
        <FormMusico action={editMusico} title='Editar artículo' object={musico}  />
    </div>
  )
}


export default page