import LoginForm from '@/components/login-form'

// https://next-auth.js.org/configuration/pages#sign-in-page
const errors = new Map();
errors.set('OAuthSignin', "Error al construir una URL de autorización.");
errors.set('OAuthCallback', "Error al manejar la respuesta de un proveedor de OAuth.");
errors.set('OAuthCreateAccount', "No se pudo crear un usuario proveedor de OAuth en la base de datos.");
errors.set('EmailCreateAccount', "No se pudo crear un usuario de proveedor de correo electrónico en la base de datos.");
errors.set('Callback', "Error en la ruta del controlador de devolución de llamada de OAuth.");
errors.set('OAuthAccountNotLinked', "Este email ya está registrado con otro proveedor.");
errors.set('EmailSignin', "Comprueba tu dirección de correo electrónico.");
errors.set('CredentialsSignin', "Fallo al iniciar sesion. Verifique que los datos que proporcionó sean correctos.");
errors.set('SessionRequired', "Error al iniciar sesión. Verifique que los detalles que proporcionó sean correctos.");
errors.set('Default', "No se puede iniciar sesión.");


function page({ searchParams }) {
  const { error, callbackUrl } = searchParams
  // Usamos globalThis para almacenar variable global
  // La usaremos en los actions de login
  globalThis.callbackUrl = decodeURIComponent(callbackUrl ?? '%2Fdashboard')

  return (
    <>
      {error && <h3>{errors.get(error)}</h3>}
      <div className="form">
        <h1>Iniciar sesión</h1>
        <LoginForm error={error} />
      </div>
    </>
  )
}

export default page