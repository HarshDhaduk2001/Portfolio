import Family from '@/components/Family'
import Hero from '@/components/Hero'
import Images from '@/components/Images'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 h-screen w-screen">
      <div className="fixed top-0 -z-10 h-full w-full"></div>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <Family />
        <Images />
      </div>
    </div>
  )
}

export default page