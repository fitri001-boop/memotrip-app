// ini contoh aja tapi sebaiknya kalau cuman barang 1 kali pakai lebih baik langsung taruh di page asalnya aja
// beginian di pakai kalau misalnya popup kayak gini di pakai di berbagai halaman sehingga ribet kalo harus 
// nulis code panjang

// ini contohnya kalo di taruh di file lain alias di panggil sebagai component:
//  <Popup
//       isOpen={isOpen}
//       data={selectedData}
//       onClose={() => setOpen(false)}
//     />


import Image from "next/image";


  type foto = {
    id: number;
    img_bg: string;
    img_profile: string;
    bg_profile: string;
    nama: string;
    w_profile: string;
    alamat: string;
  };

type PopupDetail = {
  isOpen: boolean;
  data: foto | null;
  onClose: () => void;
};

export default function PopupDetail({isOpen,data,onClose,}: PopupDetail) {
  if (!isOpen || !data) return null;

  return (
    <div
          onClick={onClose}
          className="fixed inset-0 bg-white/20 backdrop-blur-2xl z-20 grid px-5 h-screen place-items-center"
        >
          <div className="shadow-[0_2px_8px_rgba(0,0,0,0.5)] h-auto w-auto rounded-3xl overflow-hidden">
            <div
              className={`w-full h-18 bg-linear-to-r ${data.bg_profile} p-5`}
            >
              <div className="flex gap-3 h-full w-full items-center ">
                <Image
                  src={data.img_profile}
                  alt="image"
                  width={10}
                  height={10}
                  className="w-12 h-12 border-2 border-white rounded-full"
                />
                <div>
                  <p className="font-bold">{data.nama}</p>
                  <p className="text-[11px]">{data.alamat}</p>
                </div>
              </div>
            </div>
            <Image
              src={data.img_bg}
              alt="popup"
              width={100}
              height={100}
              className="object-cover h-full w-full"
            />
          </div>

          <div className="w-80 h-21 grid grid-cols-4 place-items-center shadow-[0_2px_8px_rgba(0,0,0,0.5)] bg-white rounded-2xl self-start justify-self-start">
            <i className="ri-heart-3-line text-3xl text-(--body-color) grid place-items-center">
              <p
                style={{ fontFamily: "Poppins" }}
                className="text-sm font-semibold"
              >
                Like
              </p>
            </i>
            <i className="ri-message-3-line text-3xl text-(--body-color) grid place-items-center">
              <p
                style={{ fontFamily: "poppins" }}
                className="text-sm font-semibold"
              >
                Comment
              </p>
            </i>
            <i className="ri-share-2-line text-3xl text-(--body-color) grid place-items-center">
              <p
                style={{ fontFamily: "poppins" }}
                className="text-sm font-semibold"
              >
                Share
              </p>
            </i>
            <i className="ri-repeat-2-line text-3xl text-(--body-color) grid place-items-center">
              <p
                style={{ fontFamily: "poppins" }}
                className="text-sm font-semibold"
              >
                Repost
              </p>
            </i>
          </div>
        </div>
  );
}
