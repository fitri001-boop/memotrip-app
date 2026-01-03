import React, {useState} from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';


export default function page() {

  const pathname = usePathname();
    
    const nav = [
    {id:1, isi:"ri-home-9-fill", text:"Beranda", href:"/"},
    {id:2, isi:"ri-multi-image-fill", text:"Album", href:"/album"},
    {id:3, isi:"ri-message-3-fill", text:"Pesan", href:"/chat"},
    {id:4, isi:"ri-calendar-todo-fill", text:"Jadwal", href:"/jadwal"}
  ]

    
  return (
    <div>
{/* navbar */}
      <nav className="py-5 w-screen overflow-hidden h-25 bg-[#CEDAEE] z-1 rounded-t-4xl flex gap-5 items-center justify-center fixed bottom-0">
          {nav.map((nav) => {

            const aktif= pathname === nav.href;

            return(
              <Link
                key={nav.id}
                href={nav.href}
                className={`${aktif ? 'text-blue-400' : 'text-(--body-color'} grid place-items-center text-3xl w-17 text-(--body-color) h-full rounded-2xl `}>

                  {aktif && (
                    <div className="absolute -space-y-2 grid top-0 place-items-center ">
                      <div className="bg-(--body-color) w-15 h-2 z-10 rounded-2xl"></div>
                      <div className=" blur-sm -z-10 w-0 h-0 border-l-25 border-l-transparent border-r-25 border-r-transparent border-b-35 border-b-blue-400 "></div>
                    </div>
                  )}
                  
                <i className={`${nav.isi}`}></i>
                <p style={{ fontFamily: 'Poppins' }} className='text-xs font-semibold'>{nav.text}</p>
              </Link>
              )
            } )} 
            </nav>
            
            </div>
  )
}
