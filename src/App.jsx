import React, { useState } from 'react'
import "./App.css"
import Navbar from './components/navbar/Navbar'
import UserList from './components/userlist/UserList'
import Footer from './components/footer/Footer'
import NewUserForm from './components/newuser/NewUserForm'


function App() {
  const [users,setUsers] = useState([])
  const [modal,setShowMadal] = useState(false )
  function addUsers(user){
    console.log(user); 
    setUsers( (prew)=> {
      return [...prew,user]
    }
    )
    setShowMadal(false)
  }

  function Delete (id){
    setUsers((prew)=>{
      return prew.filter((user)=>{
        return user.id !== id
       })
    })
  }



  const closeModal = (e)=>{
    if (e.target.classList.contains("overlay") || e.key === "Escape" ) setShowMadal(false)
  }

  return (
    <div  className='App' onKeyDown={closeModal} onClick={closeModal} > 
      <Navbar users={users.length} />

    <main>
      {!users.length && <div className="no-users">
          <h2 >No Users</h2>
        </div>}

    <UserList users={users} Delete={Delete} />
    </main>

      <Footer/>

     { modal && <NewUserForm addUsers={addUsers}  />}
      <button className='create-user' onClick={()=> setShowMadal(true)} >Create Users</button>
    </div>

  )
}

export default App