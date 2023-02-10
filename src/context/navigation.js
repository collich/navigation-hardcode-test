import { createContext,useState,useEffect } from "react";

const NavigationContext = createContext()

const NavProvider = ({ children }) => {
    const [pathName, setpathName] = useState(window.location.pathname)

    useEffect(() => {
      const handler = (e) => {
        setpathName(window.location.pathname)
      }

      window.addEventListener("popstate", handler)

      return () => {
        window.removeEventListener("popstate", handler)
      }
    }, [])
    

    const Navigate = to => {
        window.history.pushState({}, "", to)
        setpathName(to)
    }

    const valueToShare = {
        pathName,
        Navigate
    }

    return (
        <NavigationContext.Provider value={valueToShare}>
            {children}
        </NavigationContext.Provider>
    )
}

export { NavProvider }
export default NavigationContext