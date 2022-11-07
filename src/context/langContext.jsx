import React, {useState} from 'react'
import Ingles from "../lang/en-US.json"
import Español from "../lang/es-ES.json"

const langcontext = React.createContext()

function LangProvider({children}) {

    const [idioma, setIdioma] = useState(Español)

    const changeLeng = (len)=> {
        switch (len) {
            case 'es':
                setIdioma(Español)
                break;
            case 'en':
                setIdioma(Ingles)
                break
            default:
                setIdioma(Español);
        }
    }

  return (
    <langcontext.Provider value={{changeLeng: changeLeng, idioma}}>
        {children}
    </langcontext.Provider>
  )
}
 
export {langcontext, LangProvider}
