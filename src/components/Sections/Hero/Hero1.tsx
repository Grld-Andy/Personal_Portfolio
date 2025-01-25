import React from 'react'
import Background from '../../Background/Background'

const Hero1: React.FC = () => {
  return (
    <>
      <div className="absolute z-[-1] h-screen border">
        <Background />
      </div>
      <section className="relative px-4 h-[calc(100vh)] grid place-items-center">
        <div className='flex gap-5 flex-col'>
          <div className='text-center'>
            <h1 className='font-extrabold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600'>
              Hi,
            </h1>
            <h1 className='font-extrabold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600'>
              I'm Andy
            </h1>
            <h1 className='font-extrabold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600'>
              I build for the WEB
            </h1>
          </div>
          <p></p>
          <div className='flex gap-5 text-center items-center justify-center h-[45px]'>
            <button className="bg-[#7510F7] border border-[#7510F7] rounded-sm h-full w-[200px] text-white font-medium text-[18px] leading-[20px]">View my CV</button>
            <button className='border-2 border-[#7510F7] rounded-sm h-full w-[200px] font-medium text-[18px] leading-[20px]'>Projects</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero1