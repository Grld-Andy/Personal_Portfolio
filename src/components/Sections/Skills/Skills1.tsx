import React from 'react'

const Skills: React.FC = () => {
  return (
    <div className='border'>
      <div>
        <h1>The Technologies that I work with</h1>
        <p>Here a list of the technologies, languages, libraries, frameworks and services that I know and wish to offer... I am of course open to working with new technologies to feed my hunger for knowledge.</p>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {
          Array.from({length: 9}).map((_item, index) => (
            <div className="border border-white rounded-md bg-blue-500">
              <p>Image here</p>
              <p>Name here</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Skills