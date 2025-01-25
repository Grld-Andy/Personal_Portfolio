import React from 'react'
import { skills } from '../../../constants/skills'

const Skills: React.FC = () => {
  return (
    <div id='skills' className='grid grid-cols-2 px-5 py-5'>
      <div>
        <h1 className='text-3xl font-semibold leading-8 mb-4'>The Technologies that I work with</h1>
        <p className='font-light'>
          Here is a list of the technologies, languages, libraries, frameworks and services that I know and wish to offer.
          <br/>
          I am of course open to working with new technologies to feed my hunger for knowledge.
        </p>
      </div>
      <div className="flex flex-row flex-wrap gap-3 items-center justify-center">
        {
          skills.map((skill, index) => (
            <div title={skill.name} key={index} className="flex flex-col items-center justify-around rounded-md w-[100px] h-[100px] bg-linear-to-t from-[rgba(38,133,255,0.3)] border border-[rgba(38,133,255,0.3)] to-transparent shadow-md shadow-[rgba(38,133,255,0.3)] backdrop-blur-md">
              <div className='w-[60px] h-[60px]'>
                <img src={skill.image} className='w-full h-full'/>
              </div>
              <p className="smooth-sans font-semibold text-[1.1em]">{skill.name}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Skills