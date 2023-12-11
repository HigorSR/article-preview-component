'use client'

import ImgDrawers from '@/components/img-drawers'
import TextSection from '@/components/text-section'

export default function Home() {
  

  return (
    <main className='flex items-center justify-center bg-stone-200'>
      <div className='h-screen'></div>
      <div className='flex flex-col w-[340px] bg-white rounded-lg lg:flex-row lg:w-fit'>
        <ImgDrawers />

        <TextSection />
      </div>
    </main>
  )
}
