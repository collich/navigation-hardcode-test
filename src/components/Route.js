import UseNavigationContext from '../Hooks/UseNavigationContext'

const Route = ({path, children}) => {
  const { currentPath } = UseNavigationContext()
  return path === currentPath ? children : null
}

export default Route