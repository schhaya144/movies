import React, { useEffect, useState } from 'react';
import logo from '../assets/react.svg';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import userImg from '../assets/user.jfif';
import { FaSearch } from "react-icons/fa";
import { navigation } from '../constants/navigation';

const Header = () => {

    const [searchInput, setSearchInput] = useState("")
    const navigate=  useNavigate()
    
   useEffect(()=>{
    if(searchInput){
        navigate(`/search?q=${searchInput}`)
    }

   },[searchInput])

   const handleSubmit = (e) =>{
    e.prevendDefault()
   }
    return (
        <div className='fixed top-0 w-full h-16 bg-neutral-600 bg-opacity-75 z-40'>
            <div className="container mx-auto px-2 flex justify-between items-center h-full">
                <Link to='/'>
                    <img src={logo} alt="logo" width={60} />
                </Link>
                <nav className="sm:flex space-x-4 hidden ">
                    {navigation.map((nav, index) => (
                        <NavLink
                            key={nav.label}
                            to={nav.href}
                            className={({ isActive }) =>
                                `text-gray-300 hover:text-white ${isActive ? "text-white bg-blue-500" : ""}`
                            }
                        >
                            {nav.label}
                        </NavLink>
                    ))}
                </nav>
                <div className=" flex items-center gap-4 cursor-pointer">

                    <form className='flex items-center gap-2' onSubmit={handleSubmit}>
                        <input type="text"
                            placeholder='search here...'
                            className='bg-transparent  py-1 outline-none bottom-none  hidden lg:block' 
                            onChange={(e)=>setSearchInput(e.target.value)}
                            value={searchInput}/>
                    </form>

                    <button className="text-xl">
                        <FaSearch />
                    </button>

                    <div className='active:scale-50 transition-all'>
                        <img
                            src={userImg}
                            className="w-10 h-10"
                            alt=""
                        />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
