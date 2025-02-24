import React, { createContext } from 'react'
import ChildA from './ChildA'

// create, provider, useContext

const data = createContext();
const data1 = createContext();
const Main = () => {
    const name = "Devendar"
    const gender = "Male"
  return (
    <div>
        <data.Provider value={name}>
            <data1.Provider value={gender}>
                <ChildA/>
            </data1.Provider>
        </data.Provider>
      
    </div>
  )
}

export default Main
export {data,data1}