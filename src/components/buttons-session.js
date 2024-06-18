'use client'
import Button from '@/components/button-form';
import { redirect } from 'next/navigation'


function ButtonSession() {
  

    function login() {
        redirect('/auth/credentials-login')
    }
    function signup() {
        redirect('/auth/register')
    }

    return (
        <div>
            <form action={signup} className='credentials'>
                <Button title="Crear cuenta" />
            </form>
            <form action={login} className='credentials'>
                <Button title="Iniciar Secion con credenciales" />
            </form>
        </div>

    );
};

export default ButtonSession;