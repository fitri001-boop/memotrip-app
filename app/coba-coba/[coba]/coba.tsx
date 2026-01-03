"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Popupp from "../../component/Popupp";
import { datafoto } from "@/app/data/datafoto";
import { useRouter } from "next/navigation";

export default function coba({ fotooo }: { fotooo: string }) {
  const album = datafoto[fotooo as keyof typeof datafoto];
  const [index, setIndex] = useState(0);
  const current = album?.[index];
  if (!album) return <p>Mapel nggak ada</p>;

  const totalFoto =
    (current?.g_kiri?.length ?? 0) + (current?.g_kanan?.length ?? 0);

  type foto = {
    id: number;
    img_bg: string;
    img_profile: string;
    bg_profile: string;
    nama: string;
    w_profile: string;
    alamat: string;
  };

  const [isOpen, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState<foto | null>(null);
  const router = useRouter();

  return (
    <div className="w-screen h-auto bg-white relative">
      {/* atas */}
      <img
        src="/assets/album/soris.png"
        alt="image"
        className="h-auto w-auto "
      />
      <i
        onClick={() => router.back()}
        className="ri-arrow-left-circle-line absolute text-(--body-color) font-black text-4xl top-10 left-6"
      ></i>
      <div className="absolute flex flex-col items-center justify-center gap-5 top-15 w-screen">
        <p className="text-(--body-color) font-bold text-4xl text-center w-50">
          {current.judul}
        </p>
        <p className="text-(--body-color) text-[12px] text-center -translate-y-3">
          {current.by}
        </p>

        <div className="relative rounded-full flex -space-x-2 bg-white shadow-[0_2px_4px_rgba(0,0,0,0.5)] py-2 px-4 items-center justify-center">
          <Image
            src={current.profile1}
            alt="image"
            width={100}
            height={100}
            className="h-10 w-10 border-3 border-(--body-color) rounded-full"
          />
          <Image
            src={current.profile2}
            alt="image"
            width={100}
            height={100}
            className="h-10 w-10 border-3 border-(--body-color) rounded-full"
          />
          <Image
            src={current.profile3}
            alt="image"
            width={100}
            height={100}
            className="h-10 w-10 border-3 border-(--body-color) rounded-full"
          />

          <div className="-top-1 left-0 grid place-items-center absolute rounded-full w-6 h-6 shadow-[0_2px_4px_rgba(0,0,0,0.5)] bg-white">
            <i className="ri-user-3-fill text-(--body-color) "></i>
          </div>
        </div>
      </div>

      <div className="flex px-10 justify-between items-center mt-10">
        <p className="text-(--body-color) text-sm">
          {totalFoto} Photos <i className="ri-edit-2-fill text-xl"></i>
        </p>
        <button className="px-5 rounded-xl bg-(--body-color) grid place-items-center">
          <i className="ri-equalizer-fill text-2xl"></i>
        </button>
      </div>

      {/* foto-foto */}
      <div className="grid grid-cols-2 gap-2 px-5 pb-30 mt-8">
        {/* ini grid kiri */}
        <div className="grid gap-2">
          {current.g_kiri.map((kiri) => (
            <div
              onClick={() => {
                setOpen(true);
                setSelectedData(kiri);
              }}
              key={kiri.id}
              className="h-auto w-auto relative rounded-3xl overflow-hidden shadow-[0_2px_5px_rgba(0,0,0,1.5)]"
            >
              <Image
                src={`${kiri.img_bg}`}
                alt="image"
                width={50}
                height={50}
                className=" object-cover w-full h-full"
              />
              <div className="h-full w-full flex py-3 items-end absolute top-0 left-0 justify-center">
                <div className="bg-white/50 rounded-full w-20 h-1"></div>
              </div>
            </div>
          ))}
        </div>

        {/* ini grid kanan */}
        <div className="grid gap-2">
          {current.g_kanan.map((kanan) => (
            <div
              onClick={() => {
                setOpen(true);
                setSelectedData(kanan);
              }}
              key={kanan.id}
              className="h-auto w-auto relative rounded-3xl overflow-hidden shadow-[0_2px_5px_rgba(0,0,0,1.5)]"
            >
              <Image
                src={kanan.img_bg}
                alt="image"
                width={50}
                height={50}
                className=" object-cover w-full h-full"
              />
              <div className="h-full w-full flex py-3 items-end absolute top-0 left-0 justify-center">
                <div className="bg-white/50 rounded-full w-20 h-1"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Popupp
        isOpen={isOpen}
        data={selectedData}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}
