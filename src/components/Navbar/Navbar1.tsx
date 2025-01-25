import React from 'react'

const Navbar1: React.FC = () => {
  return (
    <nav className="z-10 font-medium bg-linear-to-t from-[#0005] to-transparent fixed flex items-center justify-between border rounded-md p-5 w-[calc(100%-20px)] mx-[10px] my-5 backdrop-blur-xs">
        <div>Logo here</div>
        <div className="flex gap-3">
            <a href='#'>Intro</a>
            <a href='#'>Projects</a>
            <a href='#'>Skills</a>
            <a href='#'>Experience</a>
            <a href='#'>Projects</a>
        </div>
        <div>
            <button>Contact me</button>
        </div>
    </nav>
  )
}

export default Navbar1