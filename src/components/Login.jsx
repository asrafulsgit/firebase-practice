import React, { useEffect } from 'react'
import { db } from '../utils/firebase'
import { ref,onValue, get, query, orderByChild, equalTo } from 'firebase/database'
const Login = () => {
  useEffect(()=>{
    const userRef = ref(db,'student/sourob2356')
    onValue(userRef,(data)=>{
      console.log(data.val())
    })
  },[])
  return (
    <div className='w-full min-h-[90vh] flex flex-col gap-2 justify-center items-center'>
    <h1 className='font-bold text-2xl'>Login</h1>
     <form action="" className='flex flex-col gap-2'>
        <input type="text" placeholder="Enter user name" className="input border rounded-[3px] px-2 text-[16px] outline-none" />
        <input type="number" placeholder="Enter roll" className="input border rounded-[3px] px-2 text-[16px] outline-none" />
     </form>
     <button type='submit'  className="btn btn-success">Login</button>
   </div>
  )
}

export default Login
