import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminHeader = () => {
  return (
    <div>
        
    <header>
        <nav>
            <h1>Admin</h1>
            <ul>
                    <li><NavLink to={"/admin"}>Dashboard</NavLink></li>
                    <li><NavLink to={"/admin/addproduct"}>Add Product</NavLink></li>
                </ul>
        </nav>
    </header>
    </div>
  )
}

export default AdminHeader