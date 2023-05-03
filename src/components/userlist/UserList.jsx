import React from 'react'
import "./UserList.css"

function UserList({ users ,Delete}) {
  return (
    <div className='userList'>
      <div className="container userList-container">
        {users.map((user) => {
          return (
            <div className="card"  key={user.id}>
              <div className="card-inner">
                <img src={user.image} alt={user.firsName} width={150} height={150} />
                <h3> {user.lastName} {user.firstName}, {user.age}age. </h3>
                <h3>From:{user.from}</h3>
                <h3>Job:{user.job}</h3>
                <h3>Gender:{user.gender}</h3>
                <button onClick={(() => Delete(user.id))}>Delete</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default UserList