// import AboutPage from './pages/AboutPage'
// import ProductsPage from './pages/ProductsPage'
import Home from "./pages/Home"
// import Link from "./components/Link"
import useNavigationContext from "./Hooks/useNavigationContext"

const App = () => {
    const {pathName} = useNavigationContext()

    return (
        <div>
            {pathName}
            <Home/>
        </div>
    )
}

export default App
