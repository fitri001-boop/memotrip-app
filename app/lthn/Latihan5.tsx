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

  return (
    <div className="w-screen overflow-x-auto mb-10">
      <div className="flex gap-4 items-center justify-center px-6 min-w-max  mb-10">
        {days.map((day, index) => {
          const isActive = index === activeIndex;
          const isAround =
            Math.abs(index - activeIndex) > 0 &&
            Math.abs(index - activeIndex) <= 4;

          return (
            <div
              key={index}
              ref={(el) => {
                dateRefs.current[index] = el;
              }}
              onClick={() => handleClick(index)}
              className={`
        snap-center shrink-0 cursor-pointer
        rounded-full w-15
        ${
          isActive
            ? "h-30 bg-blue-500 scale-110 -translate-y-2"
            : "h-25 bg-(--body-color)"
        }
        ${isAround ? "translate-y-3" : ""}
        text-white flex flex-col items-center justify-center
        transition-all duration-300 ease-out
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
