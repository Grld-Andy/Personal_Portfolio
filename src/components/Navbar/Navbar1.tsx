import React from 'react'

const Navbar1: React.FC = () => {
  return (
    <nav 
    className={`z-10 shadow-md shadow-[#fff3] smooth-sans text-[1.3em] font-medium text-white bg-linear-to-t from-[#fff3]
    to-[#fff1] fixed flex items-center justify-between rounded-full p-5 px-10 md:px-16 w-[calc(100%-20px)] mx-[10px] my-5 backdrop-blur-sm`}>
      <div className='relative h-[30px] w-[30px]'>
        <img src="/images/logos/a_50px.png" className='w-[30px] absolute left-0 top-0 brightness-[5]'/>
      </div>
      <div className="flex gap-3">
          <a href='#intro'>Intro</a>
          <a href='#projects'>Projects</a>
          <a href='#skills'>Skills</a>
          <a href='#experience'>Experience</a>
      </div>
      <div>
        <a href='#contact-me'>
          <button className='bg-blue-700 px-3 rounded-2xl shadow-sm shadow-blue-500 relative hover:shadow-md hover:translate-y-[-2px] transition-all duration-200 active:brightness-125 active:shadow-sm active:translate-y-[0px] cursor-pointer'>Contact me</button>
        </a>
      </div>
    </nav>
  )
}

export default Navbar1