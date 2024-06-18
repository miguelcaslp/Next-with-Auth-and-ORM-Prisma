import FormMusico from '@/components/FormMusico'
import { prisma } from '@/lib/prisma'
import { deleteMusico } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({ searchParams }) {
  const musico = await prisma.Musico.findUnique({
    where: {
      id: Number(searchParams.id),
    },
  })

  return (
    <div>
      <h3>Eliminar musico {searchParams.id}</h3>
      <FormMusico action={deleteMusico} title='Eliminar musico' object={musico} disabled={true} />
    </div>
  )
}

export default page