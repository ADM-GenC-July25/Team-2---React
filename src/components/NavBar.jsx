import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav className="sticky top-0 left-0 right-0 w-full z-50 bg-gray-800 text-white shadow">
            <ul className="flex justify-between items-center p-4 w-full m-0">
                <div className="flex space-x-4">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                </div>
                <div className="flex space-x-4">
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li>
                        <Link to="/checkout">Checkout</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </div>
            </ul>
        </nav>
    )
}

export default NavBar