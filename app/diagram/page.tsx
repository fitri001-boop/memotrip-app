import React from "react";

export default function page() {
  const value = 60;
  const data = [40, 70, 55];
  const points = [20, 60, 40, 80];
  const progress = 40;

//   diagram kurva di mulai di sini
  const point = [20, 80, 10, 80, 50];
  const width = 300;
  const height = 150;

  // ubah data jadi koordinat
  const stepX = width / (point.length - 1);

  const pathD = point.map((p, i) => {
      const x = i * stepX;
      const y = height - (p / 100) * height;

      if (i === 0) return `M ${x} ${y}`;

      const prevX = (i - 1) * stepX;
      const prevY = height - (point[i - 1] / 100) * height;

      const midX = (prevX + x) / 2;

      return `Q ${midX} ${prevY} ${x} ${y}`;
    })
    .join(" ");

  // pie chart dinamis
  const datas = [
    { value: 40, color: "#FECD83" },
    { value: 30, color: "#47220F" },
    { value: 30, color: "#1D2E4C" },
  ];

  let start = 0;

  const gradient = `conic-gradient(
  ${datas.map((d) => {
      const from = start;
      const to = start + d.value;
      start = to;
      return `${d.color} ${from}% ${to}%`;
    })
    .join(",")}
)`;

  return (
    <div className="flex flex-col gap-10">
      {/* diagram ring */}
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
          <div className="text-3xl font-bold text-(--brown)">{value}</div>
        </div>
      </div>

      {/* diagram batang */}
      <div className="flex gap-4 items-end h-40">
        {data.map((value, i) => (
          <div
            key={i}
            className="w-20 bg-(--brown) rounded-t-md"
            style={{ height: `${value}%` }}
          />
        ))}
      </div>

      {/* diagram garis */}
      <div className="flex gap-4 items-end ">
        {points.map((p, i) => (
          <div key={i} className="flex flex-col items-center h-40">
            <div
              className="w-3 bg-(--brown) rounded-full"
              style={{ height: `${p}%` }}
            />
          </div>
        ))}
      </div>

      {/* diagram pie statis */}
      <div
        className="w-32 h-32 rounded-full"
        style={{
          background:
            "conic-gradient(red 0% 40%, blue 40% 70%, green 70% 100%)",
        }}
      />

      {/* pie chart dinamis */}
      <div
        className="w-32 h-32 rounded-full"
        style={{ background: gradient }}
      />

      {/* Diagram PROGRESS BAR (Horizontal) */}
      <div className="w-full h-4 bg-gray-200 rounded-full">
        <div
          className="h-full bg-(--brown) rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Diagram STACKED BAR */}
      <div className="w-50 h-40 flex flex-col">
        <div className="bg-red-400 h-1/2" />
        <div className="bg-blue-400 h-1/2" />
      </div>

      <svg width={width} height={height} className="mx-auto">
        <path
          d={pathD}
          fill="none"
          stroke="var(--brown)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
