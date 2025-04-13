import React, { useEffect, useState } from 'react'
import {db} from '../../utils/firebase'
import { get, ref, remove } from 'firebase/database'
import { Link } from 'react-router-dom'

const Admin_Realtime_database = () => {
   const [data,setData]=useState({})
       const [loading,setLoading]=useState(true)
       useEffect(()=>{
            const adminRef = ref(db,'student')
            get(adminRef).then((data)=>{
                 if(data.exists()) setData(data.val())
                 setLoading(false)
            })
       },[])
       const handleDelete =(username)=>{
            const adminRef = ref(db,`student/${username}`)
            remove(adminRef)
            .then(() => {
                 setData(prevData => {
                      const updatedData = { ...prevData };
                      delete updatedData[username]; 
                      return updatedData;
                    });
              console.log('Student removed successfully!');
            })
            .catch((error) => {
              console.error('Error removing student:', error);
            });
           
       }
    return (
      <div className='px-20 pt-5'>
          <h1 className='font-bold text-xl mb-5 text-center'>Realtime Database</h1>
       <h1 className='font-bold text-2xl mb-5 text-center'>Students List</h1>
       <div className="overflow-x-auto">
            <table className="table">
            <thead>
                 <tr>
                 <th>username</th>
                 <th>Name</th>
                 <th>Roll</th>
                 <th>Actions</th>
                 </tr>
            </thead>
            <tbody>
            {Object.keys(data).length > 0 ? Object.entries(data).map(([key,value],index)=>{
                   return(
                      <tr key={index}>
                           <td>{value.username}</td>
                           <td>{value.name}</td>
                           <td>{value.roll}</td>
                           <td>
                               <Link onClick={()=>handleDelete(value.username)}> <button className="btn btn-error">Delete</button></Link>
                               <Link to={`/update/realtime/${value.username}`}> <button className="btn btn-info">Update</button></Link>
                           </td>
                      </tr>
                   )
                 }) : <tr><td className='text-center' colSpan={3}>{loading ? 'Loading...' : 'Student is not available!'}</td></tr>}
            </tbody>
            </table>
       </div>
      </div>
    )
}

export default Admin_Realtime_database
