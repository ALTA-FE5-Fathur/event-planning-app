import HeadApp from "./HeadApp"
import NavbarComponent from "./Navbar"

function Layout({children}) {
  return (
    <>
        <NavbarComponent />

        <main>{children}</main>
    </>
  )
}

export default Layout