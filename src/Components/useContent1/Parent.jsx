import React, { createContext, useState } from 'react'
import ChildA from '../useContext2/Example2/ChildA';


const data = createContext();//create
//wrap all child inside the provider

const Parent = () => {
    const [user,setUser] = useState({name:"Devendar"})//pass value
    
  return (
    <div>
        <data.Provider value={{user,setUser}}>
            <ChildA/>
        </data.Provider>
      
    </div>
  )
}

export default Parent
export {data}