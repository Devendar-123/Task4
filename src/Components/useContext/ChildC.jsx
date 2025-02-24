import React from 'react'
import { data ,data1} from './Main';
const ChildC = () => {
  
  return (
    <div>
      <data.Consumer>
        {
            (name)=>{
                return(
                   <data1.Consumer>
                    {
                      (gender)=>{
                        return(
                          
                          <h1>My name is : <i>{name}</i> and my Gender is: <i>{gender}</i> without using useContext</h1>
                        )
                      }
                    }
                   </data1.Consumer>
                )
            }
        }
      </data.Consumer>
    </div>
  )
}

export default ChildC;
