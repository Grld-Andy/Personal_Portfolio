import {useState, useEffect, useRef} from 'react';
import './App.css';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { FaLinkedin, FaGithub, FaTwitter} from 'react-icons/fa';
import Typed from 'typed.js';
import Lottie from 'react-lottie';
import dudeAnimationLight from './lotties/dude_coding_light.json'
import dudeAnimationDark from './lotties/dude_coding_dark.json'


function App() {
  let prevMode = sessionStorage.getItem('prevMode') ?
  sessionStorage.getItem('prevMode') :
  'light_mode'
  const [mode, setMode] = useState(prevMode);
  
  const el = useRef(null)
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Web Developer', 'Programmer'],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
      showCursor: false
    })

    return () => {
      typed.destroy()
    }
  }, [])

  const animation = mode === 'light_mode'? dudeAnimationLight : dudeAnimationDark;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

  const changeTheme = () => {
    if (mode === 'light_mode'){
      setMode('dark_mode');
      sessionStorage.setItem("prevMode", "dark_mode");
    }else{
      setMode('light_mode');
      sessionStorage.setItem("prevMode", "light_mode")
    }
  }

  return (
    <div className={`App ${mode}`}>
      <header>
        <div className='navigation'>
          <h1>Ansong <span>Andy</span></h1>
          <div className='links'>
            <ul>
              <li><a href='#projects'>Projects</a></li>
              <li><a href='#exp'>Experience</a></li><br/>
              <li><a href='#about'>About</a></li>
              <li><a href='#contact'>Contact</a></li><br/>
              <li id='theme' onClick={changeTheme}><span>Change</span> Theme</li>
            </ul>
          </div>
        </div>
        <div className='hero'>
          <div className='grid'>
            <div className='col'>
              <div className='lottie'>
                <Lottie
                  options={defaultOptions}
                  height={400}
                  width={400}/>
              </div>
            </div>
            <div className='col'>
              <p id='greeting'>Hi, I'm</p>
              <h1>Andy Ansong</h1>
              <p id='prof' ref={el}></p>
              <div className='links1'>
                <a href="https://www.linkedin.com/in/andy-ansong-780a4b317" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={30} />
                </a>
                <div className='space'></div>
                <a href="https://github.com/Grld-Andy" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={30} />
                </a>
                <div className='space'></div>
                <a href="https://twitter.com/Gerald_Codez" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Projects/>
      <Experience/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
