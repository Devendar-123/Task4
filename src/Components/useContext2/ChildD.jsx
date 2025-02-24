import React, { useContext } from 'react'
import { dataContext } from './ChildA'
const ChildD = () => {


    const {theme,setTheme} = useContext(dataContext)

    const handleClick = ()=>{
        if(theme ==="light"){
            setTheme("dark")
        }else{
            setTheme("light")
        }
    }
  return (
    <div className='div2'>
        <b>Text color changes according to the theme changes</b>
        <button onClick={handleClick} id='button'>Change Theme</button>
    </div>
  )
}

export default ChildD
