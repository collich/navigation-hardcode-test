import About from '../components/About'
import Link from '../components/Link'

const AboutPage = () => {
  return (
    <div>
        <About/>
        <Link to="/">Go back Home</Link>
        <Link to="/products">Go to Products</Link>
    </div>
  )
}

export default AboutPage