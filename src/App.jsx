import { useContext } from "react";
import { langcontext } from "./context/langContext";
import { themeContext } from "./context/themeContext";

function App() {

  const {idioma, changeLeng} = useContext(langcontext)
  const {theme, changeTheme} = useContext(themeContext)

  return (
    <>
      <div className={`bg-${theme.theme}`}>
        <h1 className={`text-center text-xl text-${theme.color} my-10`}>{idioma.welcome}</h1>
      </div>
      <div className="mb-5 flex justify-center">
        <button className="ml-5 p-2 px-5 rounded-lg border border-black" onClick={()=>changeLeng('es')}>Es</button>
        <button className="ml-5 p-2 px-5 rounded-lg border border-black" onClick={()=>changeLeng('en')}>En</button>
      </div>
      <div className="flex justify-center">
        <button className="ml-5 p-2 px-10 rounded-lg border border-black bg-white text-black" onClick={()=>changeTheme('white')}>White</button>
        <button className="ml-5 p-2 px-10 rounded-lg bg-zinc-700 text-white" onClick={()=>changeTheme('black')}>Black</button>
      </div>
    </>
  );
}

export default App;
