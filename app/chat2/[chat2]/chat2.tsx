'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { datachat } from '@/app/data/datachat'

type Props = {
  user: {
    nama: string
    img: string
    color: string
  }
}

export default function Chat({user}: Props) {

    const router = useRouter()

  return (
    <div className='bg-white w-screen h-auto'>

    {/* profile */}
      <div className='flex fixed z-10 bg-white w-screen justify-around items-center pt-8 pb-5 rounded-b-4xl shadow-[0_2px_8px_rgba(0,0,0,0.2)]'>
        <i onClick={()=> router.back()} className="ri-arrow-left-circle-line  text-(--body-color) font-black text-4xl"></i>
        <div className="flex gap-4 items-center mr-4">
            <div className={`h-15 w-15 rounded-full grid ${user.color} place-items-center shadow-[inset_0_4px_5px_rgba(0,0,0,0.2),0_4px_5px_rgba(0,0,0,0.2)]`}>
                <img
                src={user.img}
                alt="image"
                width={50}
                height={50}/>
            </div>
            <div className='grid gap-1'>
                <p className="font-bold text-(--body-color) text-sm">{user.nama}</p>
                <p className='text-[13px] text-black'>Online</p>
            </div>
        </div>
        <div className='gap-3 flex '>
          <i className="ri-phone-fill text-(--body-color) font-black text-2xl"></i>
          <i className="ri-video-on-fill text-(--body-color) font-black text-2xl"></i>
        </div>
      </div>

      {/* chat */}
      <div className='flex flex-col gap-5 p-5 pb-20 pt-35'>
        <div className='relative rounded-2xl w-70 bg-gray-400 h-auto p-3 '>
          <p className='text-black text-sm'>HEY HEY THERE’S THIS NEW PLACE I FOUND IT’S REALLY NICE</p>
          <div className="w-0 absolute -left-3 bottom-0 h-0 border-t-15 border-t-transparent border-b-15 border-b-transparent border-r-25 border-r-gray-400"></div>
        </div>

        <div className='relative rounded-2xl w-70 bg-gray-400 h-auto p-3 '>
          <p className='text-black text-sm'>WE SHOULD GO AND TRY IT OUT IT’S ALL AROUND LATELY THE REVIEWS ARE HIGH</p>
          <div className="w-0 absolute -left-3 bottom-0 h-0 border-t-15 border-t-transparent border-b-15 border-b-transparent border-r-25 border-r-gray-400"></div>
        </div>

        <div className='relative rounded-2xl w-70 bg-gray-400 h-auto p-3 '>
          <Image src="/assets/chat/tempat.png" alt='image' width={100} height={100}
          className='w-full h-full'/>
          <div className="w-0 absolute -left-3 bottom-0 h-0 border-t-15 border-t-transparent border-b-15 border-b-transparent border-r-25 border-r-gray-400"></div>
        </div>

        <div className='relative rounded-2xl w-70 ml-auto bg-(--body-color) h-auto p-3 text-white '>
          <p className='text-sm'>WOKEYYY let’s goo, i’m so in i can’t wait when are we going? </p>
          <div className="w-0 absolute -right-3 bottom-0 h-0 border-t-15 border-t-transparent border-b-15 border-b-transparent border-l-25 border-l-(--body-color)"></div>
        </div>

        <div className='relative rounded-2xl w-70 bg-gray-400 h-auto p-3 '>
          <p className='text-black text-sm'>How bout tmrw? or maybe this weekend will do i’m free tmrw and on weekends</p>
          <div className="w-0 absolute -left-3 bottom-0 h-0 border-t-15 border-t-transparent border-b-15 border-b-transparent border-r-25 border-r-gray-400"></div>
        </div>

        <div className='relative rounded-2xl w-70 ml-auto bg-(--body-color) h-auto p-3 text-white'>
          <p className=' text-sm'>Let’s do this weekend since i have a lot on my plate lately</p>
          <div className="w-0 absolute -right-3 bottom-0 h-0 border-t-15 border-t-transparent border-b-15 border-b-transparent border-l-25 border-l-(--body-color)"></div>
        </div>
      </div>

    <div className='w-screen h-auto fixed bottom-5 '>
        <div className=" h-10 mx-auto flex  z-10 w-90 bg-white items-center text-gray-400 justify-between px-5 shadow-[inset_0_4px_5px_rgba(0,0,0,0.2),0_4px_5px_rgba(0,0,0,0.2)] rounded-xl">
            <i className="ri-attachment-2 text-xl mr-3"></i>
            <input
              type="text"
              placeholder="Send a massage"
              className="focus:outline-none w-65 sm:w-50 "
            />
            <div className='flex gap-3'>
              <i className="ri-camera-4-fill text-xl"></i>
              <i className="ri-mic-fill text-xl"></i>
            </div>
        </div>
    </div>
    </div>
  )
}
