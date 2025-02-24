import React, { useContext } from 'react'
import { data } from 'react'
const ChildB = () => {
    const user = useContext(data)
  return (
    <div>
        <p>My Name is : <i>{user}</i></p>
    </div>
  )
}

export default ChildB
