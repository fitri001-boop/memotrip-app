"use client";

import React from "react";
import { useRef, useState, useEffect } from "react";

export default function Latihan4() {
  const dateRefs = useRef<(HTMLDivElement | null)[]>([]);
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

  const [activeIndex, setActiveIndex] = useState(() => {
    return today.getDate() - 1; // index array
  });

  const handleClick = (index: number) => {
    setActiveIndex(index);

    dateRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  useEffect(() => {
    const todayIndex = days.findIndex((d) => d.dateNumber === today.getDate());

    if (todayIndex !== -1) {
      dateRefs.current[todayIndex]?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
      });
    }
  }, []);

  const CURVE_FACTOR = 3; // makin besar = makin melengkung

  return (
    <div className="w-screen overflow-x-auto mb-10">
      <div className="flex gap-4 items-center justify-center px-6 min-w-max mb-10">
        {days.map((day, index) => {
          const distance = index - activeIndex;
          const angle = distance * 0.4;
          const translateY = Math.abs(Math.sin(angle)) * 40;

          const scale = Math.max(1 - Math.abs(distance) * 0.08, 0.75);

          return (
            <div
              key={index}
              ref={(el) => {
                dateRefs.current[index] = el;
              }}
              onClick={() => handleClick(index)}
              style={{
                transform: `translateY(${translateY}px) scale(${scale})`,
              }}
              className={`
        snap-center shrink-0 cursor-pointer
        rounded-full w-15 h-25
        ${index === activeIndex ? "bg-blue-500" : "bg-(--body-color)"}
        text-white flex flex-col items-center justify-center
        transition-transform duration-300 ease-out
      `}
            >
              <p className="font-bold text-2xl">{day.dateNumber}</p>
              <p>{day.dayName}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
