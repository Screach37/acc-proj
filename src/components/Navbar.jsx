import React, {useState} from 'react'
import {menu, logo, close} from '../assets'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const[toggle, setToggle] = useState(false)
  const handleToggle = () => setToggle(!toggle)
  return (
    <div className='w-full h-[100px] relative drop-shadow-lg z-10 bg-white'>
        <div className="flex justify-between items-center w-full h-full md:max-[1240px] m-auto ">
            
            {/* 1st item of the container - Logo */}
            <div className="flex items-center">
                <img src="https://gobranddirect.com/cdn/shop/products/Asset2_grande.jpg?v=1619802039" alt="logo" className="sm:ml-10 md:ml-3 opacity-[100%] w-full h-[100px]" />
            </div>

            {/* 2st item of the container - Menu */}
            <div className="flex items-center">
                <ul className="hidden sm:flex">
                    <Link to="/"><li className="p-4">Home</li></Link>
                    <Link to="/about"><li className="p-4">About</li></Link>
                    <Link to="/services"><li className="p-4">Services</li></Link>
                    <Link to="/workmodel"><li className="p-4">Work Model</li></Link>
                    <Link to="/contact"><li className="p-4">Contact Us</li></Link>
                </ul>
            </div>

            {/* 3rd item of the container - Buttons */}
            <div className="hidden sm:flex sm:mr-10 md:mr-10">
                <button className="border bg-indigo-300 border-indigo-600 hover:bg-transparent hover:text-indigo-600 rounded-md text-black mr-4 p-4">Login</button>
                <button className="p-4 border bg-indigo-300 border-indigo-600 hover:bg-transparent hover:text-indigo-600 rounded-md">Sign Up</button>
            </div>

            {/* For mobile screen */}
            <div className="sm:hidden">
                <img src={!toggle ? menu : close} alt="menu" className='w-[28px] h-[28px] object-contain mr-10' onClick={handleToggle} />
            </div>
        </div>
            <ul className={toggle ? 'absolute bg-white text-center w-full px-8 md:hidden' : 'hidden'}>
                <li className="">Home</li>
                <li className="">About</li>
                <li className="">Services</li>
                <div className='flex flex-col'>
                    <button className="border bg-indigo-300 border-indigo-600 hover:bg-transparent hover:text-indigo-600 rounded-md text-black my-3 p-4">Login</button>
                    <button className="p-4 border bg-indigo-300 border-indigo-600 hover:bg-transparent hover:text-indigo-600 rounded-md mb-4">Sign Up</button>
                </div>
            </ul>
    </div>
  )
}
export default Navbar;