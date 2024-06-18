import Link from 'next/link'
import Musico from '../model/Musico'
import { getMusicos } from '@/lib/actions'
import { auth } from "@/auth"

export const dynamic = 'force-dynamic'

export default async function page() {
    const musicos = await getMusicos()
    const session = await auth();
   
  return (
    <div>
    <Link className='enlace' href="/musicos/new"> Nuevo musico </Link>
    {
        musicos.map((musico) => (
            <Musico key={musico.id} musico={musico} >
                
                    {session?.user?.role === 'ADMIN' ? (
                        <>
                            <Link className='enlace' href={{ pathname: '/musicos/edit', query: { id: musico.id } }}>
                                Editar musico
                            </Link>
                            <Link className='enlace' href={{ pathname: '/musicos/delete', query: { id: musico.id } }}>
                                Eliminar musico
                            </Link>
                        </>
                    ) : ''}

            </Musico>
        ))
    }
</div>
  )
}

