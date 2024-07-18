import React from 'react'
import './style.css'

const Projects = () => {
  return (
    <div id='projects'>
        <h1 className='p_left'>
            <span>Here are some of</span><br/>
              My Projects
        </h1>
        <div className='p_right'>
            <div className='container'>
              <p>Game Showcase Website</p>
              <img src='hero_image.png' alt='game showcase'/>
              <div className='overlay'>
                <a href='https://game-showcase-website.vercel.app/' target='_blank' rel="noreferrer"><button>View Live</button></a>
                <a href='https://github.com/AndyGrld/game_showcase_website' target='_blank' rel="noreferrer"><button>View Github</button></a>
              </div>
            </div>
            <div className='container'>
              <p>Desktop / Web Music Application</p>
              <img src='Tune8.png' alt='Tune it(8)'/>
              <div className='overlay'>
                <a href='https://tune8.vercel.app/' target='_blank' rel="noreferrer"><button>View Live</button></a>
                <a href='https://github.com/Grld-Andy/Tune8' target='_blank' rel="noreferrer"><button>View Github</button></a>
              </div>
            </div>
            <div className='container'>
              <p>Loan Management Website</p>
              <img src='loan_manage.png' alt='loan management'/>
              <div className='overlay'>
                <a href='https://github.com/AndyGrld/Loan-System' target='_blank' rel="noreferrer"><button>View Github</button></a>
              </div>
            </div>
            <div className='container'>
              <p>Online Bookshop</p>
              <img src='book_shop.png' alt='online bookshop'/>
              <div className='overlay'>
                <p></p>
                <a href='https://github.com/AndyGrld/Bookstore' target='_blank' rel="noreferrer"><button>View Github</button></a>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Projects