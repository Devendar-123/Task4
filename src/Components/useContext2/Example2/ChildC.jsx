import React, { useContext } from 'react'
import { data } from './MainComponent'
import "./ChildC.css"

const ChildC = () => {
    const {detail} = useContext(data);
  return (
    <table align='center'>
        <caption>User Information</caption>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>City</th>
            </tr>
        </thead>

        <tbody>
            {detail.map((item,id)=>(
                <tr key={id}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                    <td>{item.city}</td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default ChildC
