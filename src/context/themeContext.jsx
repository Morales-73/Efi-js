import React, {useState} from 'react'

const themeContext = React.createContext()

function ThemeProvider({children}) {

    const [theme, setTheme] = useState({theme : "white", color : "dark"})

    const changeTheme = (theme)=> {
        switch (theme) {
            case false:
                setTheme({theme : "white", color : "dark"})
                break;
            case true:
                setTheme({theme : "dark", color : "white"})
                break
            default:
                setTheme({theme : "white", color : "dark"});
        }
    }

  return (
    <themeContext.Provider value={{theme, changeTheme : changeTheme}}>
        {children}
    </themeContext.Provider>
  )
}

export {ThemeProvider, themeContext}
