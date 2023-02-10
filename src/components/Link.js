import UseNavigationContext from "../Hooks/UseNavigationContext"

const Link = ({to, children}) => {
    const {Navigate} = UseNavigationContext()
    const handleClick = e => {
        e.preventDefault()
        Navigate(to)
    }

  return (
    <a onClick={handleClick} href={to}>{children}</a>
  )
}

export default Link