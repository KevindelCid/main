"use client"; // this is a client component 👈🏽

import { luzmayaNavbarItemsProps } from 'interfaces/luzmaya'
import React, { useEffect, useState } from 'react'
import luzmayalogo from '../../../assets/luzmaya/luzmayaico.svg'
import luzmayaText from '../../../assets/luzmaya/luzMayaText.png'
import Image from 'next/image'


interface NavBarProps {
    items: luzmayaNavbarItemsProps[]
}


export const NavBar = ({ items }:NavBarProps) => {
  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotate(true);
      setTimeout(() => {
        setRotate(false);
      }, 500);
    }, 15000);
    return () => clearInterval(interval);
  }, []);


  return (
    <nav>

<ul className='pt-4 pl-4'>
    <li>
      <div className='w-56 h-24 flex row justify-center items-center' >
        <Image
        alt='luz maya logo, colores que representan los 4 colores del maíz y el numero 13 que simboliza el numero de energias posibles en un nawal en el cholq´ij'
        src={luzmayalogo}
        className={rotate ? 'animate-spin w-24 h-24' : 'w-24 h-24'}
        />
         <Image
        alt='luz maya logo, colores que representan los 4 colores del maíz y el numero 13 que simboliza el numero de energias posibles en un nawal en el cholq´ij'
        src={luzmayaText}
        className='w-24 h-16'
      
        />
      </div>
    </li>
   {

    // items.map(item =>(
    //   <li key={item.id}> <a href={item.path}>{item.title}</a> </li>
    // ))

   }
  </ul>

    </nav>
  )
}
