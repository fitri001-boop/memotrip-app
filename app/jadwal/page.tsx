'use client'

import Image from 'next/image'
import Navbar from "../component/Navbar"
import Header from "../component/Header"
import { useRef, useState, useEffect, useMemo } from "react"


export default function page() {
    
    const jadwal = [
        {id:1, tanggal:17, jam:"08.00", agenda:"Fiksi Day", tempat:'Jakarta', teman:"Jennifer"},
        {id:2, tanggal:27, jam:"12.00", agenda:"Porseni", tempat:'Jakarta', teman:""},
        {id:3, tanggal:27, jam:"11.00", agenda:"Porseni", tempat:'Jakarta', teman:"Kaysia"},
        {id:4, tanggal:10, jam:"16.37", agenda:"Porseni", tempat:'Jakarta', teman:""},
    ]

      

    
    const dateRefs = useRef<(HTMLDivElement | null)[]>([])
    const today = new Date()

    const [activeIndex, setActiveIndex] = useState(() => {
    return today.getDate() - 1 // index array
    
    })

    const handleClick = (index: number) => {
    setActiveIndex(index)
    dateRefs.current[index]?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
    })
    }


    useEffect(() => {
            const todayIndex = days.findIndex(
                (d) => d.dateNumber === today.getDate()
            )

            if (todayIndex !== -1) {
                dateRefs.current[todayIndex]?.scrollIntoView({
                behavior: "smooth",
                inline: "center",
                })
            }
        }, [])
        
        const CURVE_FACTOR = 3 // makin besar = makin melengkung
        
        
        
    const year = today.getFullYear()
    const month = today.getMonth() // 0–11
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const days = Array.from({ length: daysInMonth }, (_, i) => {
    const date = new Date(year, month, i + 1)
    
    return {
        
        dateNumber: i + 1,
        dayName: date.toLocaleDateString("en-US", { weekday: "short" }),
        isToday: date.toDateString() === today.toDateString(),
    }
})


    const activeDate = days[activeIndex]?.dateNumber
    const timeToMinutes = (time: string) => {
    const [hour, minute] = time.split(".").map(Number)
        return hour * 60 + minute
        }

    const sortedJadwal = useMemo(() => {
        if (!activeDate) return []

        return jadwal
            .filter((item) => item.tanggal === activeDate)
            .sort((a, b) => timeToMinutes(a.jam) - timeToMinutes(b.jam))
        }, [jadwal, activeDate])  

    const value = 60;

  return (
    <div className='w-screen h-screen relative bg-white '>
      <Navbar/>
      <Header/>

      <div className='w-screen h-auto px-8 flex pt-20 sm:pt-18 justify-between items-center'>
        <p className='font-bold text-(--brown)'>Hi, Jennifer</p>
        <Image src="/assets/homepage/profile/image 9-3.png" alt='image' width={50} height={50}
        className='h-15 w-15 border-3 border-(--brown) rounded-full'></Image>
      </div>  

        {/* diagram */}
      <div className='w-screen h-auto px-5 mt-10'>
        <div className='shadow-[0_4px_8px_rgba(0,0,0,0.5)] mx-auto my-auto  w-full rounded-2xl grid grid-cols-2 p-5'>
           
           <div
                className="
                    h-30 w-30 rounded-full
                    grid place-items-center
                    shadow-[inset_0_4px_4px_rgba(0,0,0,0.3),0_4px_4px_rgba(0,0,0,0.3)]
                "
                style={{
                    background: `conic-gradient(
                        var(--brown) 0% ${value}%,
                        #e5e5e5 ${value}% 100% 
                    )`,
                    transition: "background 0.6s ease",
                    borderRadius: "35px",
                    }}

                >
                {/* lubang tengah */}
                <div className="w-23 h-23 bg-white rounded-full grid place-items-center">
                    <div className="text-3xl font-bold text-(--brown)">
                    {value}
                    </div>
                </div>
            </div>


            <div className='grid'>
                <p className='font-bold text-(--brown) text-sm justify-self-end'>
                    {today.toLocaleDateString("en-US", {
                        month : "long",
                        year: "numeric",
                    })}
                    <i className="ri-arrow-down-s-line"></i></p>
                <p className='text-md font-bold text-(--brown)'>Jumlah Jadwal</p>
                <p className='text-[12px] font-bold text-(--brown)'><i className="ri-circle-fill mr-2"></i>Telah Terlaksana</p>
            </div>
        </div>
      </div>

      {/* tanggal */}
    <div className="grid place-items-center gap-2 mt-8">
    {/* BULAN & TAHUN */}
    <p className="font-bold text-(--body-color)">
        {today.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
        })}
        <i className="ri-arrow-down-s-line"></i>
    </p>  

  {/* LIST TANGGAL */}
  <div className="overflow-x-auto w-screen overflow-y-hidden no-scrollbar scroll-smooth">
    <div className="flex gap-4 px-6 min-w-max h-38 items-center snap-x snap-mandatory">
        {days.map((day, index) => {
        const distance = index - activeIndex
        const translateY = Math.min(
            Math.abs(distance * distance * CURVE_FACTOR),
            40 // batas biar gak jatuh jauh banget
        )

        const scale = Math.max(1 - Math.abs(distance) * 0.08, 0.75)

        return (
            <div
            key={index}
            ref={(el) => {
                dateRefs.current[index] = el
            }}
            onClick={() => handleClick(index)}
            style={{transform: `translateY(${translateY}px) scale(${scale})`,}}

            className={`snap-center shrink-0 cursor-pointer rounded-full w-15 h-30 ${index === activeIndex
                    ? "bg-blue-500"
                    : "bg-(--body-color)"
                }
                text-white flex flex-col items-center justify-center transition-transform duration-300 ease-out`}
            >
            <p className="font-bold text-2xl">{day.dateNumber}</p>
            <p>{day.dayName}</p>
            </div>
        )
        })}

            </div>
        </div>
    </div>




      {/* jadwal */}
        <div className='w-screen h-auto grid justify-center overflow-hidden'>
            <div className='mt-1 h-auto pb-30 w-170 bg-(--body-color) pt-10 rounded-full flex justify-center overflow-scroll'>
                <div className=' w-screen '>
                    <div className='-translate-y-3 flex gap-3 items-center justify-center'>
                        <div className='h-2 rounded-full w-35 bg-white flex'></div>
                        <i className="ri-add-fill font-bold text-2xl"></i>
                    </div>
                    {sortedJadwal.length === 0 ? (
                        <div className="w-full flex justify-center mt-10">
                            <p className="text-white font-semibold text-xl text-center  tracking-wide">
                            Belum Ada Jadwal yang Di Buat
                            </p>
                        </div>
                        ) : (

                        sortedJadwal.map((jadwal: typeof sortedJadwal[number]) => (
                            <div key={jadwal.id} className='flex gap-5 px-8 mb-5'>
                                <div className='flex flex-col gap-2 items-center'>
                                    <p className='fonte-bold text-sm text-white'>{jadwal.jam}</p>
                                    <div className='h-full w-1 rounded-full bg-white'></div>
                                </div>

                                <div className='w-full h-full rounded-2xl bg-white shadow-[0_2px_4px_rgba(0,0,0,0.5) p-5 grid grid-cols-2 '>
                                    <div className={`text-(--body-color) space-y-2 ${jadwal.teman ? "" : "col-span-2"} `}>
                                        <p className='text-[10px] '>Agenda</p>
                                        <p className='font-bold'>{jadwal.agenda}</p>
                                        <p className='text-[11px]'><i className="ri-map-pin-fill text-xl"></i>{jadwal.tempat}</p>
                                    </div>
                                        
                                    {jadwal.teman && (
                                        <div className='text-(--body-color) space-y-2 justify-self-end'>
                                        <p className='text-[10px]'>Teman</p>
                                        <p className='font-bold text-[13px]'>{jadwal.teman}</p>
                                        <div className='flex gap-2'>
                                            <div className='rounded-full h-7 w-7 grid place-items-center bg-gray-400'>
                                                <i className="ri-notification-2-fill text-(--brown)"></i>
                                            </div>
                                            <div className='rounded-full h-7 w-7 grid place-items-center bg-(--yellow)'>
                                                <i className="ri-message-3-fill text-lg text-(--brown)"></i>
                                            </div>
                                        </div>
                                    </div>
                                    )}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}
