import React, { useState } from 'react'
import SignUp_Realtime_Database from './signup/SignUp_Realtime_Database'
import SignUp_Firestore_Database from './signup/SignUp_Firestore_Database'
const SignUp = () => {
     return(
          <>
          <div className="flex ">
               <SignUp_Realtime_Database />
               <SignUp_Firestore_Database />
          </div>
          </>
     )
}

export default SignUp
