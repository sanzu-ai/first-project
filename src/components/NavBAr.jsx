import React from 'react'
// import Logo from '../assets/Logo_png.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto font-mono absolute top-0 left-0 right-0 z-20">
          <h1 className='text-4xl text-red-500'>BTexx</h1>

            {/* nav items */}
            <div className="hidden md:flex gap-8 text-gray-300 text-lg font-medium items-center">
                <Link to="/" className="hover:text-teal-300 transition">Home</Link>
                <Link to="/about" className="hover:text-teal-300 transition">About</Link>
                <Link to="/blog" className="hover:text-teal-300 transition">Blog</Link>
                <Link to="/contact" className="hover:text-teal-300 transition">Contact</Link>
                <Link to="/login" className="hover:text-teal-300 transition bg-teal-400 rounded-2xl text-white px-4 py-2">Login</Link>


            </div>
        </nav>
    )
}

export default NavBar