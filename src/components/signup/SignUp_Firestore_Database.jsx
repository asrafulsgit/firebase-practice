import React from 'react'
import { collection,addDoc } from 'firebase/firestore'
import { fireStoreDb } from '../../utils/firebase'
const SignUp_Firestore_Database = () => {
  const intitialUserInfo = {username : '',name :'',roll : ''}
       const [userInfo,setUserInfo]=useState(intitialUserInfo)
       const handleChange =(e)=>{
            const {name,value} =e.target;
            setUserInfo((userInfo)=>{
                 return({
                      ...userInfo,
                      [name] : value
                 })
            })
       }
       const handleSubmit=async(e)=>{
            e.preventDefault()
            try {
               const userInfoRef = await addDoc(collection(fireStoreDb,'students',userInfo))
               console.log(userInfoRef)
            } catch (error) {
               console.log(error)
            }
            
       }
       return (
            <div className='w-full min-h-[90vh] flex flex-col gap-2 justify-center items-center'>
             <h1 className='font-bold text-2xl'>Sign Up</h1>
              <form action="" onSubmit={handleSubmit} className='flex flex-col gap-2'>
                 <input onChange={handleChange} value={userInfo.username} name='username'  type="text" placeholder="Enter user name" className="input border rounded-[3px] px-2 text-[16px] outline-none" />
                 <input onChange={handleChange} value={userInfo.name} name='name' type="text" placeholder="Enter name" className="input border rounded-[3px] px-2 text-[16px] outline-none" />
                 <input onChange={handleChange} value={userInfo.roll} name='roll' type="number" placeholder="Enter roll" className="input border rounded-[3px] px-2 text-[16px] outline-none" />
                 <button type='submit' className="btn btn-success">Sign up</button>
              </form>
            </div>
          )
}

export default SignUp_Firestore_Database
