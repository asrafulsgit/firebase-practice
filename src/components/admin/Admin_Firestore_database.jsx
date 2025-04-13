import React, { useEffect, useState } from 'react'
import { fireStoreDb } from '../../utils/firebase'
import { collection,getDocs , doc as selectDoc,deleteDoc, getDoc} from 'firebase/firestore'
import { Link } from 'react-router-dom'

const Admin_Firestore_database = () => {
     const [data,setData]=useState({})
     const [loading,setLoading]=useState(true)
     useEffect(()=>{
          const getAllUsers =async()=>{
               try {
               const adminRef = collection(fireStoreDb,'students')
               const dataInfo = await getDocs(adminRef)
               const data = dataInfo.docs;
               const users =  data.map((doc)=>{
                    return {
                         ...doc.data(),
                         id : doc.id
                    }
               })
               setData(users)
               } catch (error) {
                    console.log(error)
                    setData([])
               }
          }
          getAllUsers()
     },[])
     const handleDelete =async(id)=>{
          try {
               const document = selectDoc(fireStoreDb,'students',id)
               await deleteDoc(document)
               setData((prevData)=>{
                   const filteredData = prevData.filter(data => data.id !== id)
                    return filteredData
               })
               console.log('document deleted')
          } catch (error) {
               console.log(error)
          }
         
     }
  return (
    <div className='px-20 pt-5'>
     <h1 className='font-bold text-xl mb-5 text-center'>Firestore Database</h1>
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
          {data.length > 0 ? data.map((value,index)=>{
                 return(
                    <tr key={index}>
                         <td>{value.username}</td>
                         <td>{value.name}</td>
                         <td>{value.roll}</td>
                         <td>
                             <Link onClick={()=>handleDelete(value.id)}> <button className="btn btn-error">Delete</button></Link>
                             <Link to={`/update/firestore/${value.id}`}> <button className="btn btn-info">Update</button></Link>
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

export default Admin_Firestore_database
