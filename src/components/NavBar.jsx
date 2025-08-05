import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
        <ul className='flex space-x-4 bg-gray-800 text-white p-4'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/products">Products</Link>
            </li>
            <li>
                <Link to="/cart">Cart</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar