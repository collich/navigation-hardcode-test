import Products from "../components/Products"
import Link from "../components/Link"

const ProductsPage = () => {
  return (
    <div>
        <h1>ProductsPage</h1>
        <Products/>
        <Link to="/">Go back Home</Link>
        <Link to="/about">Go to About</Link>
    </div>
  )
}

export default ProductsPage