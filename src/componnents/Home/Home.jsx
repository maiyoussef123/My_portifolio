import React from 'react'
import TextType from '../Writing/Writing.jsx';
import './Home.css';
import Imge from '../../assets/mai.png';

export default function Home() {
  return (
    <>
      <div className='bg-dark'>
        <div className="container home d-flex justify-content-between align-items-center">
          
          <div className="right text-white">
            <h2 data-aos="fade-up">Software Developer</h2>

            <p></p>

            <h2 className="text-warning"></h2>

           
            <h2>
              <TextType 
  text={["Hello, I'm 🤦‍♀️", "MAI YOUSSEF", "Front-End Developer"]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor
  cursorCharacter="_"
  texts={["Welcome to React Bits! Good to see you!","Build some amazing experiences!"]}
  deletingSpeed={50}
  variableSpeedEnabled={false}
  variableSpeedMin={60}
  variableSpeedMax={120}
  cursorBlinkDuration={0.5}
/>
            </h2>

 <p className="mt-3 col-md-8" data-aos="fade-up"> 
            I build modern and responsive web applications using React, JavaScript, HTML, and CSS, with a strong focus on clean UI, smooth user experience, and writing well-structured code. I’m always eager to learn and grow as a developer.
            </p>
            
            <div className="mt-4">
              <a href="/Cv/Mai_Youssef_CV_Professional.pdf" download>
                <button className="button">Download CV</button>
              </a>
            </div>
          </div>

          <div className="left">
         <img src={Imge} alt="Home Image" className="img-fluid" data-aos="fade-left"/>
                  
          </div>

        </div>
      </div>
    </>
  )
}
 