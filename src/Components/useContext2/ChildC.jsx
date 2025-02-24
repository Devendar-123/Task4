import React from 'react'
import ChildD from './ChildD'
// import { dataContext } from './ChildA'

const ChildC = () => {
  // const {theme,setTheme} = useContext(dataContext)

    // const handleClick = ()=>{
    //     if(theme ==="light"){
    //         setTheme("dark")
    //     }else{
    //         setTheme("light")
    //     }
    // }
  return (
    <div id='div1'>
      {/* <b>Text color changes according to the theme changes</b>
      <button onClick={handleClick} id='button'>Change Theme</button> */}
      <ChildD/>
    </div>
  )
}

export default ChildC
