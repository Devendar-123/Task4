// import React, { useState } from 'react'
// import "./Practice.css"
// const Practice1 = () => {
//     const [count, setCount] = useState(0)
//     const increaseCount =()=>{
//         setCount(count + 1)
//     }
//     const decreseCount = ()=>{
//         setCount(count - 1)
//     }

//     const resetCount = ()=>{
//         setCount(0)
//     }
//   return (
//     <div>
//         <p>Count is:{count}</p>
//         <div id='myButton'>
//            <button onClick={increaseCount}>Count ++</button>
//            <button onClick={decreseCount}>Count --</button>
//            <button onClick={resetCount}>Reset </button>
//         </div>
//     </div>
//   )
// }

// export default Practice1


// import React, { useState } from 'react'

// const Practice1 = () => {
//     const [isOn, setIsOn] = useState(false);
//     const toggle = ()=>{
//         setIsOn(!isOn)
//     }
//   return (
//     <div>
//         <p>{isOn? "ON" : "OFF"}</p>
//         <button onClick={toggle}>Toggle</button>
//     </div>
//   )
// }

// export default Practice1

// import React, { useState } from 'react'

// const Practice1 = () => {
//     const [inputValue, setValue] = useState("")
//     const handleChange = (e)=>{
//         setValue(e.target.value)
//     }
//   return (
//     <div>
//         <input type="text" value ={inputValue} onChange={handleChange} id="input" /> <br /><br />
//         <p>You Typed:{inputValue}</p>
//     </div>
//   )
// }

// export default Practice1

// import React, { useState } from 'react'

// const Practice1 = () => {
//   const [user,setUser] = useState({
//     name:"Devendar",
//     age: 22
//   });

//   const updateName = ()=>{
//     setUser(prevState=>({
//       ...prevState,
//       name:"Deva",
//       age:21,
//     }));
//   }
//   return (
//     <div>
//         <h1 style={{textAlign:"center"}}>{user.name}</h1>
//         <p style={{textAlign:"center"}}>Age:{user.age}</p>
//         <button onClick={updateName} style={{marginLeft:"580px"}}>Change Name</button>
//     </div>
//   )
// }

// export default Practice1


// import React, { useState } from 'react'

// const Practice1 = () => {
//   const [userData,setUserData] = useState({
//     name:"",
//     email:"",
//     age:"",
//     mobile:""
//   })

//   const handleChange =(e)=>{
//     const {name, value} = e.target;
//     setUserData(prevState=>({
//       ...prevState,
//       [name]: value,
//     }))
//   }

//   const handleSubmit = (e) =>{
//     // e.preventDefault();
//     alert("Form submitted successfully")
//   }
//   return (
//     <div className="mydiv">
//       <form onSubmit={handleSubmit}  className="myForm">
//         <label>Name:
//         <input type="text" name="name" value={userData.name} onChange={handleChange} /> <br />
//         </label>
//         <label>Email:
//         <input type="email" name="email" value={userData.email} onChange={handleChange} /> <br />
//         </label>
//         <label>Age:
//         <input type="number" name="age" value={userData.age} onChange={handleChange} /> <br />
//         </label>
//         <label>Mobile Number:
//         <input type="text" name="mobile" value={userData.mobile} onChange={handleChange} /><br />
//         </label>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//       <div className='para'>
//         <p>Name: {userData.name}</p>
//         <p>Email: {userData.email}</p>
//         <p>Age: {userData.age}</p>
//         <p>Mobile Number: {userData.mobile}</p>
//       </div>
//     </div>
//   )
// }

// export default Practice1

// import React, { useState } from 'react'
 
// function Practice1() {
 
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [confirmPassword, setConfirmPassword] = useState('')
//     const [name, setName] = useState('')
//     const [age, setAge] = useState('')
//     const [error, setError] = useState('')
 
//     const handlesubmit=(e)=>{
//         e.preventDefault();
//         if (!email.includes('@')) {
//             setError('Enter a Valid Email id')
//         } else if (password.length < 6) {
//             setError('Password must be 6 characters long');
//         } else if (password !== confirmPassword) {
//             setError('Password not matched');
//         } else if (!name){
//             setError('Required Name');
//         } else if (!age){
//             setError('Required Age');
//         } else {
//             setError('');
//             setEmail('');
//             setPassword('');
//             setConfirmPassword('');
//             setName('');
//             setAge('')
//         }
//     }
 
//   return (
//     <div>
//         <form onSubmit={handlesubmit} className="myForm">
//             <h3>Application Form </h3>
//             <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email' /> <br />
//             <input type=" password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password' /> <br />
//             <input type="confirm password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} placeholder='Confirm Password' /> <br />
//             <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name' /> <br />
//             <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} placeholder='Enter your age here' /> <br />
//             <p>{error}</p>
//             <button type='submit'>submit</button>
//       </form>
//     </div>
//   )}
 
// export default Practice1;


