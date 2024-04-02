'use client'

import { useState } from "react"

const AddNewUser = () => {
  const [id, setID] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, serEmail] = useState('');

  const addNewUser = async() =>{
    console.log(id,name,age,email);
    let response = await fetch('api/users',{
      method: 'POST',
      body: JSON.stringify({id,name,age,email})
    });

    response= await response.json();
    if(response.ok){
      alert('User successfully created');
    }else{
      alert('An error occured while creating new User.');
    }
     
  }
  return (
    <div className="mx-4 my-5">
      <input type="number" className="ml-2 mr-4 mt-4" onChange={e=> setID(e.target.value)} value={id} placeholder="Enter Your id"/><br />
      <input type="text" className="ml-2 mr-4 mt-4" onChange={e=> setName(e.target.value)} value={name} placeholder="Enter Your Name"/><br />
      <input type="number" className="ml-2 mr-4 mt-4" onChange={e=> setAge(e.target.value)} value={age} placeholder="Enter Your Age"/><br />
      <input type="email" className="ml-2 mr-4 mt-4" onChange={e=> serEmail(e.target.value)} value={email} placeholder="Enter Your Email"/><br />
      <button className="bg-black text-white border p-2 m-4" onClick={addNewUser}>Add User</button>
    </div>
  )
}

export default AddNewUser