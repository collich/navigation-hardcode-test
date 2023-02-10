import Link from '../components/Link'

const Home = () => {
  return (
    <div>
        <h1>HomePage</h1>
        <p>Welcome</p>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
    </div>
  )
}

export default Home