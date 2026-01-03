"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/app/component/Navbar";
import Header from "@/app/component/Header";

export default function Home() {
  const icon = [
    { id: 1, isi: "ri-store-2-fill", text: "Usaha" },
    { id: 2, isi: "ri-landscape-ai-fill", text: "Tour" },
    { id: 3, isi: "ri-emotion-laugh-fill", text: "Mood" },
    { id: 4, isi: "ri-blogger-fill", text: "Blog" },
  ];

  const profile = [
    {
      id: 1,
      nama: "Rangga",
      img: "/assets/homepage/profile/image 9-1.png",
      color: "bg-white",
    },
    {
      id: 2,
      nama: "Luna",
      img: "/assets/homepage/profile/image 9-2.png",
      color: "bg-[#FECD83]",
    },
    {
      id: 3,
      nama: "Sintiya",
      img: "/assets/homepage/profile/image 9-3.png",
      color: "bg-[#47220F]",
    },
    {
      id: 4,
      nama: "Rakha",
      img: "/assets/homepage/profile/image 9-4.png",
      color: "bg-[#B0C1C8]",
    },
    {
      id: 5,
      nama: "Alice",
      img: "/assets/homepage/profile/image 9-5.png",
      color: "bg-[#1D2E4C]",
    },
    {
      id: 6,
      nama: "Manda",
      img: "/assets/homepage/profile/image 9.png",
      color: "bg-[#1D2E4C]",
    },
  ];

  const ingat = [
    {
      id: 1,
      bg: "bg-[#47220F]",
      bg_2: "bg-[#FECD83]",
      img: "/assets/homepage/profile/image 9-2.png",
      text: "text-[#47220F]",
      nama: "icaaa",
      pesan: "mari mari kesi marii yuk yukk gass",
    },
    {
      id: 2,
      bg: "bg-[#B0C1C8]",
      bg_2: "bg-(--body-color)",
      img: "/assets/homepage/profile/image 9-1.png",
      text: "text-(--body-color)",
      nama: "Fahriyy",
      pesan: "mari mari kesi marii yuk yukk gass",
    },
    {
      id: 3,
      bg: "bg-(--body-color)",
      bg_2: "bg-[#FECD83]",
      img: "/assets/homepage/profile/image 9-4.png",
      text: "text-(--body-color)",
      nama: "Kaysiaa",
      pesan: "mari mari kesi marii yuk yukk gass",
    },
  ];

  type foto = {
    id: number;
    img_bg: string;
    img_profile: string;
    bg_profile: string;
    nama: string;
    w_profile: string;
    alamat: string;
  };

  const g_kiri = [
    {
      id: 1,
      img_bg: "/assets/homepage/foto/IMG-20251105-WA0019.jpg",
      img_profile: "/assets/homepage/profile/image 9-3.png",
      bg_profile: "from-[#47220F] to-[#47220F]/20",
      nama: "Cici",
      w_profile: "border-[#FECD83]",
      alamat: "Exhibition Hall SMESCO, Jalan Gatot Subroto, Jakarta Selatan",
    },
    {
      id: 2,
      img_bg: "/assets/homepage/foto/IMG-20251206-WA0003.jpg",
      img_profile: "/assets/homepage/profile/image 9-4.png",
      bg_profile: "from-[#1D2E4C] to-[#1D2E4C]/20",
      nama: "Kaysia",
      w_profile: "border-[#1D2E4C]",
      alamat: "Exhibition Hall SMESCO, Jalan Gatot Subroto, Jakarta Selatan",
    },
    {
      id: 3,
      img_bg: "/assets/homepage/foto/IMG-20251209-WA0017.jpg",
      img_profile: "/assets/homepage/profile/image 9-5.png",
      bg_profile: "from-[#B0C1C8] to-[#B0C1C8]/20",
      nama: "Malaka",
      w_profile: "border-[#B0C1C8]",
      alamat: "Exhibition Hall SMESCO, Jalan Gatot Subroto, Jakarta Selatan",
    },
    {
      id: 4,
      img_bg: "/assets/homepage/foto/IMG-20251105-WA0019.jpg",
      img_profile: "/assets/homepage/profile/image 9-3.png",
      bg_profile: "from-[#47220F] to-[#47220F]/20",
      nama: "Cici",
      w_profile: "border-[#FECD83]",
      alamat: "Exhibition Hall SMESCO, Jalan Gatot Subroto, Jakarta Selatan",
    },
    {
      id: 5,
      img_bg: "/assets/homepage/foto/IMG-20251206-WA0003.jpg",
      img_profile: "/assets/homepage/profile/image 9-4.png",
      bg_profile: "from-[#1D2E4C] to-[#1D2E4C]/20",
      nama: "Kaysia",
      w_profile: "border-[#1D2E4C]",
      alamat: "Exhibition Hall SMESCO, Jalan Gatot Subroto, Jakarta Selatan",
    },
    {
      id: 6,
      img_bg: "/assets/homepage/foto/IMG-20251209-WA0017.jpg",
      img_profile: "/assets/homepage/profile/image 9-5.png",
      bg_profile: "from-[#B0C1C8] to-[#B0C1C8]/20",
      nama: "Malaka",
      w_profile: "border-[#B0C1C8]",
      alamat: "Exhibition Hall SMESCO, Jalan Gatot Subroto, Jakarta Selatan",
    },
  ] as foto[];

  const g_kanan: foto[] = [
    {
      id: 1,
      img_bg: "/assets/homepage/foto/IMG-20251209-WA0025.jpg",
      img_profile: "/assets/homepage/profile/image 9-2.png",
      bg_profile: "from-(--body-color) to-(--body-color)/20",
      nama: "Rakha",
      w_profile: "border-(--body-color)",
      alamat: "Exhibition Hall SMESCO, Jalan Gatot Subroto, Jakarta Selatan",
    },
    {
      id: 2,
      img_bg: "/assets/homepage/foto/IMG-20251212-WA0003.jpg",
      img_profile: "/assets/homepage/profile/image 9.png",
      bg_profile: "from-[#FECD83] to-[#FECD83]/20",
      nama: "Anchika",
      w_profile: "border-[#FECD83]",
      alamat: "Exhibition Hall SMESCO, Jalan Gatot Subroto, Jakarta Selatan",
    },
    {
      id: 3,
      img_bg: "/assets/homepage/foto/IMG-20251212-WA0004.jpg",
      img_profile: "/assets/homepage/profile/image 9-1.png",
      bg_profile: "from-[#1D2E4C] to-[#1D2E4C]/20",
      nama: "Milaa",
      w_profile: "border-[#1D2E4C]",
      alamat: "Exhibition Hall SMESCO, Jalan Gatot Subroto, Jakarta Selatan",
    },
    {
      id: 4,
      img_bg: "/assets/homepage/foto/IMG-20251209-WA0025.jpg",
      img_profile: "/assets/homepage/profile/image 9-2.png",
      bg_profile: "from-(--body-color) to-(--body-color)/20",
      nama: "Rakha",
      w_profile: "border-(--body-color)",
      alamat: "Exhibition Hall SMESCO, Jalan Gatot Subroto, Jakarta Selatan",
    },
    {
      id: 5,
      img_bg: "/assets/homepage/foto/IMG-20251212-WA0003.jpg",
      img_profile: "/assets/homepage/profile/image 9.png",
      bg_profile: "from-[#FECD83] to-[#FECD83]/20",
      nama: "Anchika",
      w_profile: "border-[#FECD83]",
      alamat: "Exhibition Hall SMESCO, Jalan Gatot Subroto, Jakarta Selatan",
    },
    {
      id: 6,
      img_bg: "/assets/homepage/foto/IMG-20251212-WA0004.jpg",
      img_profile: "/assets/homepage/profile/image 9-1.png",
      bg_profile: "from-[#1D2E4C] to-[#1D2E4C]/20",
      nama: "Milaa",
      w_profile: "border-[#1D2E4C]",
      alamat: "Exhibition Hall SMESCO, Jalan Gatot Subroto, Jakarta Selatan",
    },
  ];

  const [isOpen, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState<foto | null>(null);

  return (
    <div className="h-auto w-screen bg-white relative">
      <Navbar />
      <Header />

      <div>
        <div className="relative grid place-items-center">
          <Image
            src="/assets/homepage/bg_home.png"
            alt="image"
            height={100}
            width={100}
            className="object-cover w-screen h-110 rounded-b-[50px] mb-17"
          />

          <div className=" px-8 py-5 absolute h-55 w-70 border-2 backdrop-blur-sm border-white bg-white/15 top-25 rounded-2xl mx-auto">
            <div className="flex gap-3 mb-3 text-black  w-full items-center justify-center">
              <i className="ri-arrow-left-s-fill text-red-500"></i>
              <p className="font-bold text-[12px] text-center">Oktober 2025</p>
              <i className="ri-arrow-right-s-fill text-red-500"></i>
            </div>
            <div className="grid grid-cols-7 place-items-center mb-3 gap-2 text-black text-[11px] font-bold">
              <p>S</p> <p>M</p> <p>T</p> <p>W</p> <p>T</p> <p>F</p> <p>S</p>
            </div>
            <div className="grid grid-cols-7 gap-2 place-items-center self-end">
              {[...Array(31)].map((_, i) => (
                <div key={i} className="font-bold text-black text-[10px]">
                  {i + 1}
                </div>
              ))}
            </div>

            <div className="bg-blue-300 w-22 h-3 absolute -z-10 bottom-13 right-8 rounded-2xl"></div>
            <div className="bg-green-300 w-22 h-3 absolute -z-10 top-21.5 left-8 rounded-2xl"></div>

            {/* taruh stiker */}
            <div>
              <Image
                src="/assets/homepage/emoji/image 103.png"
                alt="image"
                height={100}
                width={100}
                className="object-cover w-10 h-10 absolute -top-5"
              />

              <Image
                src="/assets/homepage/emoji/image 104.png"
                alt="image"
                height={100}
                width={100}
                className="object-cover w-10 h-10 absolute top-10 -left-5"
              />

              <Image
                src="/assets/homepage/emoji/image 106.png"
                alt="image"
                height={100}
                width={100}
                className="object-cover w-10 h-10"
              />

              <Image
                src="/assets/homepage/emoji/image 107.png"
                alt="image"
                height={100}
                width={100}
                className="object-cover w-10 h-10 absolute -bottom-2 left-4"
              />

              <Image
                src="/assets/homepage/emoji/image 107.png"
                alt="image"
                height={100}
                width={100}
                className="object-cover w-10 h-10 absolute -bottom-5 left-13"
              />

              <Image
                src="/assets/homepage/emoji/image 109.png"
                alt="image"
                height={100}
                width={100}
                className="object-cover w-10 h-10 absolute top-33 -right-5"
              />

              <Image
                src="/assets/homepage/emoji/image 104.png"
                alt="image"
                height={100}
                width={100}
                className="object-cover w-5 h-5 absolute top-37 right-27"
              />

              <Image
                src="/assets/homepage/emoji/image 317.png"
                alt="image"
                height={100}
                width={100}
                className="object-cover w-7 h-7 absolute top-10 -right-3"
              />

              <Image
                src="/assets/homepage/emoji/image 318.png"
                alt="image"
                height={100}
                width={100}
                className="object-cover w-10 h-10 absolute top-20 -right-5"
              />

              <Image
                src="/assets/homepage/emoji/image 319.png"
                alt="image"
                height={100}
                width={100}
                className="object-cover w-10 h-10 absolute top-25 -left-5"
              />

              <Image
                src="/assets/homepage/emoji/image 320.png"
                alt="image"
                height={100}
                width={100}
                className="object-cover w-5 h-5 absolute top-20 left-28"
              />
            </div>
          </div>

          <div className="flex justify-center gap-2 h-23 w-70 py-3 px-3 shadow-xl absolute top-100 rounded-3xl backdrop-blur-xl bg-black/5">
            {icon.map((y) => (
              <i
                key={y.id}
                className={`grid place-items-center text-3xl bg-white w-14.5 text-(--body-color) h-full rounded-2xl ${y.isi}`}
              >
                <p
                  style={{ fontFamily: "Poppins" }}
                  className="text-sm font-semibold -translate-y-1 text-(--body-color)"
                >
                  {y.text}
                </p>
              </i>
            ))}
          </div>
          <div className="mt-3 h-10 mx-auto flex items-center text-gray-400 justify-between px-8 shadow-[inset_0_4px_5px_rgba(0,0,0,0.2),0_4px_5px_rgba(0,0,0,0.2)] rounded-xl">
            <input
              type="text"
              placeholder="Search"
              className="focus:outline-none w-65 sm:w-50 "
            />
            <i className="ri-search-2-line"></i>
          </div>
        </div>

        <p className="ml-8 mt-8 text-(--body-color) font-bold">
          Teman Teman Kamu Update!!
        </p>
        <div className="overflow-x-scroll w-screen h-auto">
          <div className="mt-5 pl-8 flex w-fit h-30 mb-10">
            {profile.map((index) => (
              <div
                key={index.id}
                className="flex flex-col gap-4 items-center justify-center mr-4"
              >
                <div
                  className={`${index.color}  h-20 w-20 rounded-full grid place-items-center shadow-[inset_0_4px_5px_rgba(0,0,0,0.2),0_4px_5px_rgba(0,0,0,0.2)]`}
                >
                  <img
                    src={`${index.img}`}
                    alt="image"
                    width={60}
                    height={60}
                  />
                </div>
                <p className="font-bold text-(--body-color)">{index.nama}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="ml-8 mt-5 text-(--body-color) font-bold">
        Jangan Sampai Ketinggalan!!
      </p>

      <div className="overflow-x-scroll w-screen">
        <div className="flex w-fit pl-10 h-[250px] ">
          {ingat.map((r) => (
            <div
              key={r.id}
              className={`${r.bg} mr-5 pr-4 pt-3 overflow-hidden flex relative w-85 h-45 shadow-[0_2px_10px_rgba(0,0,0,0.5)] rounded-2xl mt-5 mx-auto`}
            >
              <div className="absolute px-5 pr-8 gap-5 flex h-45 w-85 left-0 bottom-0 items-center rounded-tr-full bg-white">
                <div className="grid gap-2 place-items-center">
                  <div
                    className={`${r.bg} h-20 w-20 rounded-full grid place-items-center shadow-[inset_0_4px_5px_rgba(0,0,0,0.2),0_4px_5px_rgba(0,0,0,0.2)`}
                  >
                    <img src={`${r.img}`} alt="image" width={60} height={60} />
                  </div>
                  <p className={`${r.text} font-bold`}>{r.nama}</p>
                </div>

                <div className="grid place-items-center h-40">
                  <p
                    className={`${r.text} w-auto pr-4 h-auto font-bold text-sm self-end`}
                  >
                    {r.pesan}
                  </p>
                  <div className="flex gap-5 pr-5 ml-auto ">
                    <div
                      className={`${r.bg} grid place-items-center h-9 w-9 rounded-full`}
                    >
                      <i className="ri-chat-voice-fill text-2xl text-white"></i>
                    </div>
                    <div
                      className={`${r.bg_2} grid place-items-center h-9 w-9 rounded-full`}
                    >
                      <i className="ri-thumb-up-fill text-2xl text-white"></i>
                    </div>
                  </div>
                </div>
              </div>
              <i className="ri-notification-4-fill ml-auto mb-auto text-white text-3xl right-0"></i>
            </div>
          ))}
        </div>
      </div>

      {/* isis foto */}
      <div className="grid grid-cols-2 gap-2 px-5 pb-30">
        {/* ini grid kiri */}
        <div className="grid gap-2">
          {g_kiri.map((kiri) => (
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
              <div
                className={`absolute w-20 h-8 bg-linear-to-r ${kiri.bg_profile} top-0 mt-5 rounded-tr-2xl flex gap-1 items-center justify-center`}
              >
                <Image
                  src={`${kiri.img_profile}`}
                  alt="image"
                  width={25}
                  height={25}
                  className={`border-2 ${kiri.w_profile} rounded-full`}
                />
                <p className="text-[12px] font-bold">{kiri.nama}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ini grid kanan */}
        <div className="grid gap-2">
          {g_kanan.map((kanan) => (
            <div
              onClick={() => {
                setOpen(true);
                setSelectedData(kanan);
              }}
              key={kanan.id}
              className="h-auto w-auto relative rounded-3xl overflow-hidden shadow-[0_2px_5px_rgba(0,0,0,1.5)]"
            >
              <Image
                src={`${kanan.img_bg}`}
                alt="image"
                width={50}
                height={50}
                className=" object-cover w-full h-full"
              />
              <div
                className={`absolute w-20 h-8 bg-linear-to-r ${kanan.bg_profile} top-0 mt-5 rounded-tr-2xl flex gap-1 items-center justify-center`}
              >
                <Image
                  src={`${kanan.img_profile}`}
                  alt="image"
                  width={25}
                  height={25}
                  className={`border-2 ${kanan.w_profile} rounded-full`}
                />
                <p className="text-[12px] font-bold">{kanan.nama}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* pop up */}
    {isOpen && selectedData && (
        <div  
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-white/20 backdrop-blur-2xl z-20 grid px-5 h-screen place-items-center"
        >
          <div className="shadow-[0_2px_8px_rgba(0,0,0,0.5)] h-auto w-auto rounded-3xl overflow-hidden">
            <div
              className={`w-full h-18 bg-linear-to-r ${selectedData.bg_profile} p-5`}
            >
              <div className="flex gap-3 h-full w-full items-center ">
                <Image
                  src={selectedData.img_profile}
                  alt="image"
                  width={10}
                  height={10}
                  className="w-12 h-12 border-2 border-white rounded-full"
                />
                <div>
                  <p className="font-bold">{selectedData.nama}</p>
                  <p className="text-[11px]">{selectedData.alamat}</p>
                </div>
              </div>
            </div>
            <Image
              src={selectedData.img_bg}
              alt="popup"
              width={100}
              height={100}
              className="object-cover h-full w-full"
            />
          </div>

          <div className="w-80 h-21 grid grid-cols-4 place-items-center shadow-[0_2px_8px_rgba(0,0,0,0.5)] bg-white rounded-2xl self-start justify-self-start">
            <i className="ri-heart-3-line text-3xl text-(--body-color) grid place-items-center">
              <p style={{ fontFamily: "Poppins" }} className="text-sm font-semibold">
                Like
              </p>
            </i>

            <i className="ri-message-3-line text-3xl text-(--body-color) grid place-items-center">
              <p style={{ fontFamily: "poppins" }} className="text-sm font-semibold">
                Comment
              </p>
            </i>

            <i className="ri-share-2-line text-3xl text-(--body-color) grid place-items-center">
              <p style={{ fontFamily: "poppins" }}className="text-sm font-semibold">
                Share
              </p>
            </i>

            <i className="ri-repeat-2-line text-3xl text-(--body-color) grid place-items-center">
              <p style={{ fontFamily: "poppins" }} className="text-sm font-semibold">
                Repost
              </p>
            </i>
            
          </div>
        </div>
      )}

    </div>
  );
}
