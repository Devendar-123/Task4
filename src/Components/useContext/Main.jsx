import React, { createContext } from 'react'
import ChildA from './ChildA';

// What is context api----tranfer data to required component
// create, provider, consumer
// How to use it?---becomes complicated code
// is context Api also problematic?----yes becomes like call back hell in js ---it is solved with useContext hook
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
export {data, data1}
