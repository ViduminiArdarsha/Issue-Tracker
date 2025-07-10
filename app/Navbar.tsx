import Link from 'next/link'
import React from 'react'
import { BiBug } from "react-icons/bi";

const Navbar = () => {

  const links=[
    {label:'Dashboard',href:'/'},
    {label:'Issues',href:'/issues'}
  ]

  return (
    <nav className='flex space-x-6 border-b mb-5 px-10 h-15 items-center'>
        <Link href="/"><BiBug /></Link>

        <ul className='flex space-x-6'>
            {links.map(link=>
            <Link 
              key={link.href}
              href={link.href} 
              className=' text-zinc-500 hover:text-zinc-800 transition-colors'>
              {link.label}</Link>)}
        </ul>   
    </nav>
  )
}

export default Navbar
