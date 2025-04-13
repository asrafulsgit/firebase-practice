import { doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { fireStoreDb } from '../../utils/firebase';

const Update_Firestore_database = () => {
     const {id} = useParams();
     const navigate = useNavigate();
     const [userInfo, setUserInfo] = useState({});
     const [loading, setLoading] = useState(true);
     useEffect(() => {
       const apiCalling =async()=>{
          const document = doc(fireStoreDb,'students',id)
          const data =(await getDoc(document)).data()
          setUserInfo(data)
          setLoading(false)
       }
       apiCalling()
     }, []);
     const handleChange = (e) => {
       const { name, value } = e.target;
       setUserInfo((userInfo) => {
         return {
           ...userInfo,
           [name]: value,
         };
       });
     };
     const handleSubmit = async(e) => {
       e.preventDefault();
       try {
          const document = doc(fireStoreDb,'students',id)
          await updateDoc(document,userInfo)
          navigate('/admin')
        } catch (error) {
             console.log(error)
        }
     };
     
     if (loading) {
       return (
         <div className="w-full min-h-[90vh] flex flex-col justify-center items-center">
           <h1 className="font-bold text-2xl">Loading...</h1>
         </div>
       );
     }
     return (
       <div className="w-full min-h-[90vh] flex flex-col gap-2 justify-center items-center">
         <h1 className="font-bold text-2xl">Update Student</h1>
         <form action="" onSubmit={handleSubmit} className="flex flex-col gap-2">
           <input
             value={userInfo.username}
             disabled
             name="username"
             type="text"
             placeholder="Enter user name"
             className="input border rounded-[3px] px-2 text-[16px] outline-none"
           />
           <input
             onChange={handleChange}
             value={userInfo.name}
             name="name"
             type="text"
             placeholder="Enter name"
             className="input border rounded-[3px] px-2 text-[16px] outline-none"
           />
           <input
             onChange={handleChange}
             value={userInfo.roll}
             name="roll"
             type="number"
             placeholder="Enter roll"
             className="input border rounded-[3px] px-2 text-[16px] outline-none"
           />
           
           <button type="submit" className="btn btn-success">
             Sign up
           </button>
         </form>
       </div>
     );
}

export default Update_Firestore_database
