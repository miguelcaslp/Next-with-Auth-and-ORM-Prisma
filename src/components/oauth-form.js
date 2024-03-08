import { loginGoogle, loginGithub, loginDiscord } from "@/lib/actions"

function OAuthForm({error}) {

  return (
    <>
      <form className='oauth'>
        <button formAction={loginGoogle} className="social-button">
          <img src="/google.svg" alt="Google" />  Iniciar sesión con Google
        </button>
        
        <button formAction={loginGithub} className="social-button">
          <img src="/github.svg" alt="Github" /> Iniciar sesión con Github
        </button>

        <button formAction={loginDiscord} className="social-button">
          <img src="/discord.svg" alt="Discord" /> Iniciar sesión con Discord
        </button>
        { error }
      </form>

    </>
  )
}

export default OAuthForm;