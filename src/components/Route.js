import useNavigationContext from "../Hooks/useNavigationContext"

const Route = ({path, children}) => {
    const {pathName} = useNavigationContext()
  return path === pathName ? children : null;
}

export default Route