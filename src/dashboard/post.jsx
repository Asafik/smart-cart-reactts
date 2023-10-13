import axios from 'axios'
import React, { useEffect, useState } from 'react'

function post() {
  const [record,setRecord] = useState([])
  useEffect(()=> {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=> {
      setRecord(res.data)})
      .catch(err=>console.log(err))
  })
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
    <tbody>
   {record.map((r,i)=>(
    <tr key={i}>
      <td>{r.id}</td>
      <td>{r.name}</td>
    </tr>
   ))}
     
    </tbody>
      </table>
    </div>
  )
}

export default post
