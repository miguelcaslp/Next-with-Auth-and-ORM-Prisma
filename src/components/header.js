import Link from 'next/link'
import { auth } from "@/auth"
import { logout } from '@/lib/actions'

async function Header() {
    const session = await auth();
    // console.log(session);

    return (
        <header>
            <div>
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/musicos">Musicos</Link>
                <Link href="/canciones">Canciones</Link>
            </div>
            <nav>
                {session
                    ? <form><button formAction={logout}>SignOut</button></form>
                    :
                    (<>
                        <Link href="/auth/register">SignUp</Link>
                        <Link href="/auth/login">SignIn</Link>
                    </>)
                }
            </nav>
        </header>
    )
}

export default Header