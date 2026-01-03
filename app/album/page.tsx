'use client'

import React from 'react'
import Image from 'next/image'
import Navbar from "../component/Navbar"
import Header from "../component/Header"
import { useRouter } from 'next/navigation'

export default function page() {

    const album = [
        {id: 1, nama: "Holiday w/ YOU", by:"Chika", foto1:"assets/album/foto1.jpg", foto2:"assets/album/foto2.jpg", foto3:"assets/album/foto3.jpg", link:"/coba-coba/memori_in_bali"},
        {id: 2, nama: "Holiday w/ YOU", by:"Chika", foto1:"assets/album/foto1.jpg", foto2:"assets/album/foto2.jpg", foto3:"assets/album/foto3.jpg"},
        {id: 3, nama: "Holiday w/ YOU", by:"Chika", foto1:"assets/album/foto1.jpg", foto2:"assets/album/foto2.jpg", foto3:"assets/album/foto3.jpg"},
        {id: 4, nama: "Holiday w/ YOU", by:"Chika", foto1:"assets/album/foto1.jpg", foto2:"assets/album/foto2.jpg", foto3:"assets/album/foto3.jpg"},
        {id: 5, nama: "Holiday w/ YOU", by:"Chika", foto1:"assets/album/foto1.jpg", foto2:"assets/album/foto2.jpg", foto3:"assets/album/foto3.jpg"},
        {id: 6, nama: "Holiday w/ YOU", by:"Chika", foto1:"assets/album/foto1.jpg", foto2:"assets/album/foto2.jpg", foto3:"assets/album/foto3.jpg"},
        {id: 7, nama: "Holiday w/ YOU", by:"Chika", foto1:"assets/album/foto1.jpg", foto2:"assets/album/foto2.jpg", foto3:"assets/album/foto3.jpg"},
    ]

    const router = useRouter();
  return (
    <div className='h-auto bg-white w-screen relative'>
        <Navbar/>
        <Header/>
        {/* bagian atas */}
        <div>
            <Image src="assets/album/atas.png" alt='image' width={100} height={100}
            className='w-screen h-auto object-fill '/>
            <div className='w-screen h-55 grid grid-cols-2 absolute top-0 left-0 p-5'>
                <div className='flex items-center justify-center'>
                    <p className='font-bold text-2xl text-white'>Koleksi Album Kamu</p>
                </div>
                <div className='flex items-end justify-end'>
                    <button className='py-4 px-6 rounded-xl bg-white text-(--body-color) font-bold text-sm'>
                        Buat Album
                    </button>
                </div>
            </div>
        </div>
      

      {/* body */}
      <div
       className='gap-2 w-screen grid grid-cols-2 mt-5 px-2 '>
        {album.map((pt) => (     
            <div onClick={() => router.push(`${pt.link}`)}
            key={pt.id} className='relative h-40 w-full '>

            {/* foto-foto */}
            <div className='absolute top-0 left-5 h-full w-full'>
                <Image src={pt.foto1} alt='image' width={50} height={50}
                className='h-30 object-cover w-35 top-0 left-0 absolute rounded-2xl border-4 border-gray-300'/>
                <Image src={pt.foto2} alt='image' width={50} height={50}
                className='h-30 object-cover w-35 top-3 left-0 absolute rounded-2xl border-4 border-gray-300'/>
                <Image src={pt.foto3} alt='image' width={50} height={50}
                className='h-30 object-cover w-35 top-6 left-0 absolute rounded-2xl border-4 border-gray-300'/>
            </div>
            {/* cover */}
            <div className='absolute top-6 '>
                <div className="grid p-5 absolute h-30 w-40 top-0 left-3 backdrop-blur-sm rounded-tr-[90px] border-2 border-gray-300 rounded-[20px] ">
                    <i className="ri-multi-image-line font-bold text-2xl "></i>
                    <p className='font-bold text-sm'>{pt.nama}</p>
                    <p className=' text-[10px]'>{pt.by}</p>
                </div>
            </div>
        </div>
        ))}

      </div>
    </div>
  )
}
