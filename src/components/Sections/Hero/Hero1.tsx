import React from 'react'
import Background from '../../Background/Background'

const Hero1: React.FC = () => {
  return (
    <>
      <div className="absolute z-[-1] h-screen border">
        <Background />
      </div>
      <section id='intro' className="relative px-4 h-[calc(100vh)] grid place-items-center">
      {/* <div className='absolute w-full h-screen z-[1]'>
        <div className='absolute w-full h-screen bg-radial from-transparent to-[#111]'></div>
        <img src='/images/hero-bg2.png' className='w-full h-full'/>
      </div> */}
        <div className='flex gap-5 flex-col z-[3]'>
          <div className='text-center'>
            <h1 className='font-extrabold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600'>
              Hi,
            </h1>
            <h1 className='font-extrabold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 leading-18'>
              I'm Andy
            </h1>
            <h1 className='font-extrabold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600'>
              I build for the WEB
            </h1>
          </div>
          <p></p>
          <div className='flex gap-5 text-center items-center justify-center h-[45px] text-white'>
            <button className="bg-[#7510F7] border border-[#7510F7] rounded-sm h-full w-[200px] font-medium text-[18px] leading-[20px]">View my CV</button>
            <button className='border-2 border-[#7510F7] rounded-sm h-full w-[200px] font-medium text-[18px] leading-[20px]'>Projects</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero1