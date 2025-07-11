'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { BiBug } from "react-icons/bi";
import classnames from 'classnames';

const Navbar = () => {

  const currentPath = usePathname();
  

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
              className= {classnames({
                'text-zinc-900':link.href===currentPath,
                'text-zinc-500':link.href!=currentPath,
                'hover:text-zinc-900 transition-colors':true
              })}
              href={link.href}>
              {link.label}</Link>)}
        </ul>   
    </nav>
  )
}

export default Navbar
