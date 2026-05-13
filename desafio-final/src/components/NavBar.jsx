import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
import "../styles/NavBar.css"

function NavBar() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        ReactShop
      </Link>

      <div className="nav-links">

        <Link to="/category/calzado">
          Calzado
        </Link>

        <Link to="/category/ropa">
          Ropa
        </Link>

        <Link to="/category/accesorios">
          Accesorios
        </Link>

      </div>

      <CartWidget />

    </nav>
  )
}

export default NavBar