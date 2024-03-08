import Link from "next/link";

export default async function Home() {
  return (
    <main>
      <h1>Página principal</h1>
      <ul>
        <li><Link href="/admin">Panel de admin</Link></li>
        <li><Link href="/dashboard">Dashboard del usuario</Link></li>
        <li><Link href="/about">About</Link></li>
        <hr></hr>
        <li><Link href="/articulos">Listado de artículos</Link></li>
        <li><Link href="/articulos/new">Nuevo artículo</Link></li>
        <li>Editar artículo</li>
        <li>Eliminar artículo</li>
        <hr></hr>
        <li><Link href="/proveedores">Listado de proveedores</Link></li>
        <li><Link href="/proveedores/new">Nuevo proveedor</Link></li>
        <li>Editar proveedor</li>
        <li>Eliminar proveedor</li>
      </ul>

    </main>
  )
}
