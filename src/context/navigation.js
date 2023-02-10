import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext()

const NavProvider = ({ children }) => {
    const [currentPath, setcurrentPath] = useState(window.location.pathname)
    
    useEffect(() => {
        const handler = () => {
            setcurrentPath(window.location.pathname)
        }

        window.addEventListener("popstate",handler)
        return () => {
            window.removeEventListener("popstate",handler)
        }
    }, [])

    const Navigate = to => {
        window.history.pushState({}, "", to)
        setcurrentPath(to)
    }

    const valueToShare = {
        Navigate,
        currentPath
    }

    return (
        <NavigationContext.Provider value={valueToShare}>
            {children}
        </NavigationContext.Provider>
    )
}

export { NavProvider }
export default NavigationContext