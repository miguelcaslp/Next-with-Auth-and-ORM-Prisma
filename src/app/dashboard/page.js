import { auth } from "@/auth"
import Header from "@/components/header"

async function page() {
    const sesion = await auth()

    return (
        <>
            <Header></Header>
            <h1> 🔑  Dashboard</h1 >
            <p> {sesion?.user.name}</p>
            <p> {sesion?.user.email} </p>
            <p> {sesion?.user.role} </p>
        </>)
}

export default page