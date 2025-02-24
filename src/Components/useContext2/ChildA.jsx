import React, { createContext, useState } from 'react'

import "./ChildA.css"
import ChildB from './ChildB';
const dataContext = createContext();
const ChildA = () => {

  const [theme,setTheme] = useState("light")
  return (
    <div>
      <dataContext.Provider value={{theme, setTheme}}>
        <div id='container' style={{backgroundColor:theme==="light"?"black":"white",color:theme==="light"?"white":"black"}}>
        <ChildB/>
        </div>
      </dataContext.Provider>
    </div>
  )
}

export default ChildA
export {dataContext}