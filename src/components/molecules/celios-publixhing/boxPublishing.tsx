import Image from 'next/image'
import React from 'react'

interface BoxPublishingProps {
  title: string;
  penulis: string;
  penerbit: string;
  isbn: string;
  cover: string;
  halaman: string;
  berat: string;
  ukuran: string;
  linkTokped: string;
  linkShoppe: string;
  image: any
}
export default function BoxPublishing({title, penulis, penerbit, isbn, cover, halaman, berat, ukuran, linkTokped, linkShoppe, image} : BoxPublishingProps) {
  const encodedImage = image ? image?.replace(/ /g, "%20") : null;
  const apiURL = process.env.NEXT_PUBLIC_API_URL;
  return (
    <div className=" navMobile:flex-row flex flex-col gap-[74px]  ">
      <div className="flex justify-center cxl:mb-0 mb-[30px] ">
        {/* <Image
          src="/images/imageGeo.png"
          alt="image-deo"
          width={512}
          height={800}
          className="rounded-[32px]"
        /> */}
        <img
          src={image ? apiURL + image : null}
          className=" cmd:w-[512px] csm:w-[412px] w-[312px] bg-cover object-cover h-auto rounded-[32px] "
        />
      </div>
      <div className=" bg-[#00130D] rounded-[32px] cmd:px-[66px] csm:px-[46px] h-fit px-[26px] csm:py-[46px] py-[26px] cxl:w-[950px] min-h-[800px] w-full ">
        <p className=" cxl:text-[20px] csm:text-[18px] text-[16px] font-semibold text-[#AAAAAA] ">
          CELIOS Book
        </p>
        <h1 className=" bg-gradient-to-r from-[#CFE3BE]  to-[#FFFFFF] inline-block text-transparent bg-clip-text font-bold cxxl:text-[26px] cxl:text-[26px] csm:text-[22px] text-[26px] tracking-[-2%] max-w-[792px] mt-[36px]   ">
          {title}
        </h1>
        <div className=" mt-[29px] ">
          <h1 className="cxl:text-[20px] csm:text-[18px] text-[16px] text-white  ">
            <span className="font-bold">Penulis :</span> {penulis}
          </h1>
          <h1 className="cxl:text-[20px] csm:text-[18px] text-[16px] text-white  ">
            <span className="font-bold">Penerbit :</span> {penerbit}
          </h1>
          <h1 className="cxl:text-[20px] csm:text-[18px] text-[16px] text-white  ">
            <span className="font-bold">ISBN :</span> {isbn}
          </h1>
          <h1 className="cxl:text-[20px] csm:text-[18px] text-[16px] text-white  ">
            <span className="font-bold">Cover :</span> {cover}
          </h1>
          <h1 className="cxl:text-[20px] csm:text-[18px] text-[16px] text-white  ">
            <span className="font-bold">Halaman :</span> {halaman}
          </h1>
          <h1 className="cxl:text-[20px] csm:text-[18px] text-[16px] text-white  ">
            <span className="font-bold">Berat :</span> {berat}
          </h1>
          <h1 className="cxl:text-[20px] csm:text-[18px] text-[16px] text-white  ">
            <span className="font-bold">Ukuran :</span> {ukuran}
          </h1>
          <div className=" mt-[46px] ">
            <h1 className=" text-[#CFE3BE] cxl:text-[26px] csm:text-[24px] text-[22px] font-semibold  ">
              👜 Link Pembelian
            </h1>
            <div className=" flex flex-row gap-[70px]  mt-[27px] ">
              <a target="_blank" href={linkShoppe}>
                <img
                  src="/icons/shoppe.png"
                  alt="shoppe"
                  className="w-auto cxl:h-[78px] csm:h-[76px] h-[56px] "
                />
              </a>
              <a target="_blank" href={linkTokped}>
                <img
                  src="/icons/tokped.png"
                  className="w-auto cxl:h-[78px] csm:h-[76px] h-[56px] "
                  alt="tokped"
                />
              </a>
              {/* <a target="_blank" href="https://www.instagram.com/celios_id/">
                <img
                  src="/icons/instagram.png"
                  className="w-auto cxl:h-[90px] csm:h-[76px] h-[56px] "
                  alt="instagram"
                />
              </a>
              <a
                target="_blank"
                href="https://wa.me/6282329191591
"
              >
                <img
                  src="/icons/whatsapp.png"
                  className="w-auto cxl:h-[88px] csm:h-[76px] h-[56px] "
                  alt="whatsapp"
                />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
