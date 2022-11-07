import React from 'react'
import { useState } from 'react'

const themeContext = React.createContext()

function ThemeProvider({children}) {

    const [theme, setTheme] = useState('white')

    const changeTheme = (theme)=> {
        switch (theme) {
            case 'white':
                setTheme({theme : "white", color : "black"})
                break;
            case 'black':
                setTheme({theme : "zinc-700", color : "white"})
                break
            default:
                setTheme({theme : "white", color : "black"});
        }
    }

  return (
    <themeContext.Provider value={{theme, changeTheme : changeTheme}}>
        {children}
    </themeContext.Provider>
  )
}

export {ThemeProvider, themeContext}
