'use client'
import React from 'react'
import Image from 'next/image'
import Navbar from "../component/Navbar"
import Header from "../component/Header"
import { useRouter } from 'next/navigation'
import { datachat } from '../data/datachat'

export default function page() {
    const router = useRouter()

    const profile = datachat;
  

  return (
    <div className='w-screen bg-white h-auto'>
      <Navbar/>
      <Header/>

        <p className='font-bold text-xl w-screen pt-18 text-center  text-(--body-color)'>Message</p>


        {/* active */}
        <p className="ml-8 mt-8 text-(--body-color) text-xl font-bold">
          Active
        </p>
        <div className="overflow-x-scroll w-screen h-auto">
          <div className="mt-5 pl-8 flex w-fit h-30 mb-10">
            {profile.map((index) => (
              
              <div
                onClick={() => { const slug = index.nama.toLowerCase().replace(/\s+/g, '-')
                router.push(`/chat3?id=${index.id}`+ `&image=${encodeURIComponent(index.img)}` + `&colors=${encodeURIComponent(index.color)}`)}}
                key={index.id}
                className="flex flex-col gap-4 items-center justify-center mr-4">
                <div
                  className={`${index.color}  h-18 w-18 rounded-full grid place-items-center shadow-[inset_0_4px_5px_rgba(0,0,0,0.2),0_4px_5px_rgba(0,0,0,0.2)]`}>
                  <img
                    src={`${index.img}`}
                    alt="image"
                    width={60}
                    height={60}
                  />
                </div>
                <p className="font-bold text-(--body-color) text-sm">{index.nama}</p>
              </div>
            ))}
          </div>
        </div>


        {/* Massage */}
        <p className="ml-8 mt-3 text-xl text-(--body-color) font-bold">
          Massages
        </p>
          <div className="mt-5 pl-8 flex flex-col gap-5 w-screen">
            {profile.map((index) => (
              <div
                onClick={() => router.push(`/chat2/${index.nama}`)}
                key={index.id}
                className="flex gap-4 items-center mr-4">
                <div
                  className={`${index.color}  h-18 w-18 rounded-full grid place-items-center shadow-[inset_0_4px_5px_rgba(0,0,0,0.2),0_4px_5px_rgba(0,0,0,0.2)]`}>
                  <img
                    src={`${index.img}`}
                    alt="image"
                    width={60}
                    height={60}
                  />
                </div>
                <div className='grid gap-1'>
                    <p className="font-bold text-(--body-color) text-sm">{index.nama}</p>

                    {index.chat && (
                        <p className='text-[13px] text-black'>{index.chat}</p>
                    )}
                </div>
              </div>
            ))}
            </div>

      

    </div>
  )
}
