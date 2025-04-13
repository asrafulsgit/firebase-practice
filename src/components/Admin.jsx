import React, { useEffect, useState } from 'react'
import Admin_Realtime_database from './admin/Admin_Realtime_database'
import Admin_Firestore_database from './admin/Admin_Firestore_database'
const Admin = () => {
    return(
     <>
          <div className="flex">
               <Admin_Realtime_database />
               <Admin_Firestore_database />
          </div>
     </>
    )
}

export default Admin




