'use client'

import React from "react";
import Latihan2 from "./Latihan2";
import Latihan3 from "./Latihan3";
import Latihan4 from "./Latihan4";
import Latihan5 from "./Latihan5";
import Latihan6 from "./Latihan6";
import Latihan7 from "./Latihan7"

export default function page() {
  const today = new Date();

  // fungsi buat ambil 5 hari (2 sebelum, hari ini, 2 sesudah)
  const days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(today.getDate() + i - 3);

    return {
      dateNumber: date.getDate(),
      dayName: date.toLocaleDateString("en-US", { weekday: "short" }),
      isToday: date.toDateString() === today.toDateString(),
    };
  });

  return (
    <div className="h-auto pb-10">
      <div className="grid place-items-center gap-5 mt-8 mb-10">
        <p className="font-bold text-(--body-color)">
          {today.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
          <i className="ri-arrow-down-s-line"></i>
        </p>
        <div className="flex gap-4 items-center justify-center px-6 w-screen">
          {days.map((day, index) => (
            <div
              key={index}
              className={`
                rounded-full w-15 
                ${day.isToday ? "h-30 bg-blue-500" : "h-25 bg-(--body-color)"}
                text-white flex flex-col items-center justify-center
                ${index === 0 || index === 4 ? "translate-y-3" : ""}
                `}
            >
              <p className="font-bold text-2xl">{day.dateNumber}</p>
              <p>{day.dayName}</p>
            </div>
          ))}
        </div>
        KODE INI: bikin 5 hari hari ini SELALU di tengah ukuran beda posisi beda
        bikin efek LINGKARAN / CAROUSEL
      </div>

      <div className="overflow-x-auto w-screen no-scrollbar scroll-smooth mb-10 snap-x snap-mandatory">
        ini pakai snap
        <div className="flex gap-4 px-6 min-w-max">
          {days.map((day, index) => (
            <div
              key={index}
              className={`
          snap-center
          shrink-0
          rounded-full w-15
          ${
            day.isToday
              ? "h-30 bg-blue-500 scale-110"
              : "h-25 bg-(--body-color)"
          }
          text-white flex flex-col items-center justify-center
          transition-all duration-300 ease-out
        `}
            >
              <p className="font-bold text-2xl">{day.dateNumber}</p>
              <p>{day.dayName}</p>
            </div>
          ))}
        </div>
      </div>

      {/*  */}
      <div className="overflow-x-auto w-screen no-scrollbar">
        <div className="flex gap-4 px-6 min-w-max scroll-smooth">
          {days.map((day, index) => (
            <div
              key={index}
              className={`
          shrink-0
          rounded-full w-15
          ${day.isToday ? "h-30 bg-blue-500" : "h-25 bg-(--body-color)"}
          text-white flex flex-col items-center justify-center
          transition-all duration-300 ease-out
        `}
            >
              <p className="font-bold text-2xl">{day.dateNumber}</p>
              <p>{day.dayName}</p>
            </div>
          ))}
        </div>
      </div>

      <Latihan2/>
      <Latihan3/>
      <Latihan4/>
      <Latihan5/>
      <Latihan6/>
      <Latihan7/>
    </div>
  );
}
