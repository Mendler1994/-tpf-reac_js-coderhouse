import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"

function App() {
  return (
    <BrowserRouter>

      <NavBar />

      <Routes>

        <Route
          path="/"
          element={<ItemListContainer />}
        />

        <Route
          path="/category/:categoryId"
          element={<ItemListContainer />}
        />

        <Route
          path="/item/:id"
          element={<ItemDetailContainer />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/checkout"
          element={<Checkout />}
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App