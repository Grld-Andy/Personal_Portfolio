import React from 'react'
import './style.css'
import { FaStar } from 'react-icons/fa';

const Experience = () => {

    const icon_size = 10;

  return (
    <div className='exp' id='exp'>
        <h1 id='e_head'>
            Experience
        </h1>
        <div className='e_grid'>
            <div className='e_cell'>
                <h1>Frontend Develpment</h1>
                <div className='content'>
                        <p><FaStar size={icon_size}/>CSS</p>
                        <p><FaStar size={icon_size}/>REACT</p>
                        <p><FaStar size={icon_size}/>JAVASCRIPT</p>
                        <p><FaStar size={icon_size}/>HTML</p>
                        <p><FaStar size={icon_size}/>SASS</p>
                        <p><FaStar size={icon_size}/>THREE.JS</p>
                </div>
            </div>
            <div className='e_cell'>
                <h1>Backend Develpment</h1>
                <div className='content'>
                        <p><FaStar size={icon_size}/>DJANGO</p>
                        <p><FaStar size={icon_size}/>FLASK</p>
                        <p><FaStar size={icon_size}/>PHP</p>
                        <p><FaStar size={icon_size}/>NODE</p>
                </div>
            </div>
            <div className='e_cell'>
                <h1>MACHINE LEARNING AND DATABASE</h1>
                <div className='content'>
                        <p><FaStar size={icon_size}/>SCIKIT_LEARN</p>
                        <p><FaStar size={icon_size}/>PYTORCH</p>
                        <p><FaStar size={icon_size}/>MYSQL</p>
                        <p><FaStar size={icon_size}/>MONGODB</p>
                </div>
            </div>
            <div className='e_cell'>
                <h1>OTHERS</h1>
                <div className='content'>
                        <p><FaStar size={icon_size}/>GIT</p>
                        <p><FaStar size={icon_size}/>BLENDER</p>
                        <p><FaStar size={icon_size}/>AZURE DEVOPS</p>
                        <p><FaStar size={icon_size}/>AZURE STORAGE EXPLORER</p>
                        <p><FaStar size={icon_size}/>DOCKER</p>
                        <p><FaStar size={icon_size}/>ANDROID STUDIO</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience