import Header from "@/components/header"
function layout({ children }) {
    return (
        <section>
            <Header></Header>
            <hr />
            {children}
        </section>
    )
}

export default layout