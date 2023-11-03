import React from 'react'
import { Link } from 'react-router-dom'
const AdminNav = () => {
  return (
    <nav
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <ul className='nav '>
        <li className='nav-item mb-2'>
          <Link
            style={{ textDecoration: 'none' }}
            className='nav-link'
            to='/admin/dashboard'
          >
            <h3 className='text-black'>Orders</h3>
          </Link>
        </li>
        <li className='nav-item  mb-2'>
          <Link
            style={{ textDecoration: 'none' }}
            className='nav-link'
            to='/admin/product'
          >
            <h3 className='text-black'>Product</h3>
          </Link>
        </li>
        <li className='nav-item  mb-2'>
          <Link
            style={{ textDecoration: 'none' }}
            className='nav-link'
            to='/admin/products'
          >
            <h3 className='text-black'>All Products</h3>
          </Link>
        </li>
        <li className='nav-item  mb-2'>
          <Link
            style={{ textDecoration: 'none' }}
            className='nav-link'
            to='/admin/category'
          >
            <h3 className='text-black'>Category</h3>
          </Link>
        </li>
        <li className='nav-item  mb-2'>
          <Link
            style={{ textDecoration: 'none' }}
            className='nav-link'
            to='/admin/subcategory'
          >
            <h3 className='text-black'>Sub Category</h3>
          </Link>
        </li>

        <li className='nav-item  mb-2'>
          <Link
            style={{ textDecoration: 'none' }}
            className='nav-link'
            to='/user/password'
          >
            <h3 className='text-black'>Password</h3>
          </Link>
        </li>

        <li className='nav-item  mb-2'>
          <Link
            style={{ textDecoration: 'none' }}
            className='nav-link'
            to='/admin/contact'
          >
            <h3 className='text-black'>Contact Req</h3>
          </Link>
        </li>

        <li className='nav-item  mb-2'>
          <Link
            style={{ textDecoration: 'none' }}
            className='nav-link'
            to='/admin/blocklist'
          >
            <h3 className='text-black'>Blocklist</h3>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default AdminNav
