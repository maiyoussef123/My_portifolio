import React from 'react';
import TextType from '../Writing/Writing.jsx';
import './About.css';
import Imge from '../../assets/mai.png';

export default function About() {
  return (
    <div className='bg-dark'>
      <div className="container about d-flex flex-column flex-md-row justify-content-between align-items-center py-5">

        <div className="left mb-4 mb-md-0" data-aos="fade-left">
          <img src={Imge} alt="Mai Youssef" className="img-fluid" />
        </div>

        <div className="right text-white ms-md-5" data-aos="fade-right">
          <h2>About Me</h2>
          <h2 className="mt-3">Software Developer</h2>

          <h2 className="mt-3">
            <TextType 
              text={["Hello, I'm", "MAI YOUSSEF", "Front-End Developer"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              deletingSpeed={50}
            />
          </h2>

          <p className="mt-3 col-md-8">
            I build modern and responsive web applications using React, JavaScript, HTML, and CSS, with a strong focus on clean UI, smooth user experience, and writing well-structured code.
          </p>

          <div className="mt-4">
            <a href="/Cv/Mai_Youssef_CV_Professional.pdf" download>
              <button className="button">Download CV</button>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
