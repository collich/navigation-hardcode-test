import useNavigationContext from "../Hooks/useNavigationContext"

const Link = ({to, children}) => {
    const {Navigate} = useNavigationContext()
    const handleClick = e => {
      e.preventDefault()
      Navigate(to)
    }

  return (
    <div>
        <div onClick={handleClick}>{children}</div>
    </div>
  )
}

export default Link