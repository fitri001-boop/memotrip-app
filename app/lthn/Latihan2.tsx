import React from "react";

export default function Latihan2() {
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
    <div className="mb-10">
      <div className="grid place-items-center gap-5 mt-8 ">
        {/* BULAN & TAHUN */}
        <p className="font-bold text-(--body-color)">
          {today.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
          <i className="ri-arrow-down-s-line"></i>
        </p>

        {/* LIST TANGGAL */}
        <div className="overflow-x-auto w-screen no-scrollbar scroll-smooth">
          <div className="flex gap-4 px-6 min-w-max snap-x snap-mandatory">
            {days.map((day, index) => (
              <div
                key={index}
                className={`
            snap-center shrink-0
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
      </div>
      ✔️ Jumlah tanggal sesuai bulan ✔️ Bisa scroll / swipe ✔️ Hari ini otomatis
      highlight ✔️ Animasi halus ✔️ Tidak perlu edit manual sama sekali
    </div>
  );
}
