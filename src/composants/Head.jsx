import React from 'react'
import { navbar } from '../composants/mockData/data'

import { MdMenu } from "react-icons/md";
import ResponsiveMenu from './ResponsiveMenu';
const Head = () => {
    const [open, setOpen] = React.useState(false);
  return (
   <nav className=' relative justify-between flex flex-wrap bg-neutral-100 px-2 xl:px-16'>
    
      <div className='flex flex-wrap py-4 '>
        <img className="h-5 2xl:h-8 pt-1" src="/src/assets/F23.png" alt="Hello" />
        <p className="font-bold text-black text-xl 2xl:text-2xl pl-1">Nexcent</p>
          
      </div>
      <div className='hidden md:block'>
        <ul className='pt-5 flex flex-wrap  text-black text-sm'>
          {
            navbar.map(item => 
              <li key={item.id}>
                <a href={item.link} className='  px-3 '>{item.title}</a>
              </li>
            )

  
          }
        </ul>
      </div>
      
      <ul className="flex text-sm  ">
        <li className="text-green-600 pr-8 pt-5 2xl:font-semibold"><a href="#">Login</a></li>
        <li className="pt-3"><button className=" py-2 px-2 md:px-4 rounded bg-green-600 "> <a className="text-white" href="#">Sign Up</a></button></li>
      </ul>
      
        <div className='md:hidden' onClick={() => 
           setOpen(!open)}>
         <MdMenu className='text-4xl mt-3'/>
        </div>
    
    <ResponsiveMenu open={open}/>
   </nav>
   

  )
}

export default Head