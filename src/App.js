import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'
import Home from "./pages/Home"
import Route from "./components/Route"

const App = () => {

    return (
        <div>
            <Route path="/"><Home/></Route>
            <Route path="/about"><AboutPage/></Route>
            <Route path="/products"><ProductsPage/></Route>
        </div>
    )
}

export default App
