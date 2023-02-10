import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import Route from './components/Route'

const App = () => {
  return (
    <div>
      <Route path="/"><HomePage/></Route>
      <Route path="/about"><AboutPage/></Route>
    </div>
  )
}

export default App