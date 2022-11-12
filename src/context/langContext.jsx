import React, {useState} from 'react'
import {eng} from "../lang/en-US"
import {esp} from "../lang/es-ES"

const langcontext = React.createContext()

function LangProvider({children}) {

    const [idioma, setIdioma] = useState(esp)

    const changeLeng = (len)=> {
        switch (len) {
            case 'es':
                setIdioma(esp)
                break;
            case 'en':
                setIdioma(eng)
                break
            default:
                setIdioma(esp);
        }
    }

  return (
    <langcontext.Provider value={{changeLeng: changeLeng, idioma}}>
        {children}
    </langcontext.Provider>
  )
}
 
export {langcontext, LangProvider}
