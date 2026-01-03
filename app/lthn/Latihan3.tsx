"use client";

import React from "react";
import { useEffect, useRef } from "react";

export default function Latihan3() {
  const todayRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (todayRef.current) {
      todayRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, []);

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth(); // 0–11
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days = Array.from({ length: daysInMonth }, (_, i) => {
    const date = new Date(year, month, i + 1);
    return {
      dateNumber: i + 1,
      dayName: date.toLocaleDateString("en-US", { weekday: "short" }),
      isToday: date.toDateString() === today.toDateString(),
    };
  });

  return (
    <div className="w-screen overflow-x-auto">
      <div className="flex gap-4 items-center justify-center px-6 min-w-max  mb-10">
        {days.map((day, index) => (
          <div
            key={index}
            ref={day.isToday ? todayRef : null}
            className={`
      snap-center shrink-0
      rounded-full w-15
      ${day.isToday ? "h-30 bg-blue-500 scale-110" : "h-25 bg-(--body-color)"}
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
  );
}
