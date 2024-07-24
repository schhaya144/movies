import React from 'react'
import { NavLink } from 'react-router-dom'
import { mobileNavigation } from '../constants/navigation'

const MobileNavigation = () => {
  return (
   <section className='sm:hidden h-14 bg-neutral-600 bg-opacity-40 fixed bottom-0 w-full text-neutral-400'>
    <div className=" flex items-center justify-between h-full">
        {
            mobileNavigation.map((nav,index)=>{
                return(
                    <NavLink  key={nav.label+"mobileNavigation"} 
                    to={nav.href}
                    className={({isActive})=>`px-3 flex h-full items-center flex-col justify-center  ${isActive && "text-white"} `}>
                        <div className="text-2xl">
                            {nav.icon}
                        </div>
                        <div className='text-sm'>
                            {nav.label}
                        </div>
                    </NavLink>
                )
            })
        }
    </div>
   </section>
  )
}

export default MobileNavigation