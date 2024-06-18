'use server'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'
import { signIn, signOut } from '@/auth';
import { getUserByEmail } from '@/lib/data';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';


// REGISTER
export async function register(formData) {
    const name = formData.get('name')
    const email = formData.get('email')
    const password = formData.get('password')

    // Comprobamos si el usuario ya está registrado
    const user = await getUserByEmail(email);

    if (user) {
        return { error: 'El email ya está registrado' }
    }

    // Encriptamos password 
    const hashedPassword = await bcrypt.hash(password, 10)

    // Guardamos credenciales en base datos
    await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    })

    return { success: "Registro correcto" }
}



// LOGIN credentials
export async function login(formData) {
    const email = formData.get('email')
    const password = formData.get('password')

    // Comprobamos si el usuario está registrado
    const user = await getUserByEmail(email);

    if (!user) {
        return { error: 'Usuario no registrado.' }
    }

    // Comparamos password 
    const matchPassword = await bcrypt.compare(password, user.password)

    if (user && matchPassword) {  // && user.emailVerified
        await signIn('credentials',
            {
                email, password,
                redirectTo: globalThis.callbackUrl 
                // redirectTo: user.role == 'ADMIN' ? '/admin' : '/dashboard'
            })
        return { success: "Inicio de sesión correcto" }
    } else {
        return { error: 'Credenciales incorrectas.' }
    }

}

// LOGIN google
export async function loginGoogle() {
    try {
        await signIn('google', { redirectTo: globalThis.callbackUrl })
    } catch (error) {
        console.log(error);
        throw error
    }
}

// LOGIN github
export async function loginGithub() {
    try {
        await signIn('github', { redirectTo: globalThis.callbackUrl })
    } catch (error) {
        console.log(error);
        throw error
    }
}



// LOGOUT
export async function logout() {
    try {
        await signOut({ redirectTo: '/' })
    } catch (error) {
        throw error
    }
}


//get model

export async function getMusicos() {
    try {
        const musicos = await prisma.Musico.findMany()
        return musicos;
    } catch (error) {
        return null;
    }
}

export async function getCanciones() {
    try {
        const canciones = await prisma.Cancion.findMany()
        return canciones;
    } catch (error) {
        return null;
    }
}



export async function editMusico(formData) {
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre')
    const fechaNacimiento = new Date(formData.get('fechaNacimiento')).toISOString()

    try {
        const musico = await prisma.Musico.update({
            where: { id },
            data: { nombre, fechaNacimiento },
        })
        console.log(musico);
        revalidatePath('/musicos')
    } catch (error) {
        console.log(error);
    }
    redirect('/musicos');
}


export async function deleteMusico(formData) {
    try {
      const id = Number( formData.get('id') )
    
      const musico = await prisma.Musico.delete({
        where: {
          id: id,
        },
      })
      console.log(musico);
      revalidatePath('/musicos')
    } catch (error) {
      console.log(error);
    }
  
    redirect('/musicos');
  }

  export async function newMusico(formData) {
    try {
      const nombre = formData.get('nombre')
      const fechaNacimiento = new Date(formData.get('fechaNacimiento')).toISOString()
  
      const musico = await prisma.Musico.create({
        data: { nombre, fechaNacimiento  },
      })
  
      console.log(musico);
      revalidatePath('/musicos')
    } catch (error) {
      console.log(error);
    }
    redirect('/musicos');
  }