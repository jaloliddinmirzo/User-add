import { useState } from 'react'
import "./NewUserForm.css"
import { v4 as uuidv4 } from "uuid"

function NewUserForm({ addUsers }) {

  const [user, setUsers] = useState({
    id:uuidv4,
    image: "",
    firstName: "",
    lastName: "",
    age: null,
    from: "",
    job: "",
    gender: ""
  })   
  
  function hendleSubmit(e){
    e.preventDefault()
    addUsers(user)

  }

  return (
    <div className='modal-wrapper'>
      <div className="overlay">
        <div className="modal">
          <h2>Foydalanuvchi qo'shish</h2>
          <form  onSubmit={hendleSubmit}>
            <label htmlFor="">
              <span>Rasm Url:</span>
              <input type="url" onChange={(e) => setUsers(u => {
                return {
                  ...u, image: e.target.value}
              })} required />
            </label>
            <label htmlFor="">
              <span>First name:</span>
              <input type="text" onChange={(e) => setUsers(u => {
                return {
                  ...u, firstName: e.target.value
                }
              })} required />
            </label>
            <label htmlFor="">
              <span>Last name:</span>
              <input type="text" onChange={(e) => setUsers(u => {
                return {
                  ...u, lastName: e.target.value
                }
              })} required />
            </label>
            <label htmlFor="">
              <span>Age:</span>
              <input type="number" onChange={(e) => setUsers(u => {
                return {
                  ...u, age: e.target.value
                }
              })} required />
            </label>
            <label htmlFor="">
              <span>From:</span>
              <input type="text" onChange={(e) => setUsers(u => {
                return {
                  ...u, from: e.target.value
                }
              })} required />
            </label>
            <label htmlFor="">
              <span>Job:</span>
              <input type="text" onChange={(e) => setUsers(u => {
                return {
                  ...u, job: e.target.value
                }
              })} required />
            </label>
            <div className="gender">
              <span>Gender</span>
              <label >
                <span>Male</span>
                <input type="radio" onChange={(e) => setUsers(u => {
                  return {
                    ...u, gender: e.target.value
                  }
                })} required name='gender' value={"Male"} />
              </label>
              <label htmlFor="">
                <span>Famale</span>
                <input type="radio" onChange={(e) => setUsers(u => {
                  return {
                    ...u, gender: e.target.value
                  }
                })} required name='gender' value={"Female"} />
              </label>
            </div>
            <button className='modal-btn' value={"submit"}>SEND</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewUserForm