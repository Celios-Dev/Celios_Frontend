import Footer from '@/components/footer'
import Header from '@/components/our-desk/header'
import React from 'react'

export default function OurDesk() {
  return (
    <>
      <Header />
      <div className="bg-gradient-to-t from-[#7CB937] to-[#ffff] w-full h-[552px]">
        <div className=" bg-[url('/images/background.png')] w-full h-[552px] " />
      </div>
      <Footer />
    </>
  );
}