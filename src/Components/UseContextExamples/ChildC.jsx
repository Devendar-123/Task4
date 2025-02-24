import React, { useContext } from 'react'
import { data,data1 } from './Main'


const ChildC = () => {
    const name = useContext(data);
    const gender = useContext(data1);
  return (
    <div>
        <h2>Hi my Name is : <i>{name}</i> and my Gender is: <i>{gender}</i> using useContext</h2>
    </div>
  )
}

export default ChildC
