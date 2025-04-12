import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='py-5 px-20 flex justify-between items-center border-b border-b-black'>
      <div className="logo "><Link to='/'>FireBase</Link></div>
      <div className="nav_items flex gap-5">
          <Link to='/'>Home</Link>
          <Link to='/signup'>Sign Up</Link>
          <Link to='/Login'>Login</Link>
          <Link to='/admin'>Admin</Link>
      </div>
    </nav>
  )
}

export default Nav
