import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="bg-dark text-center text-white">

      <div className="container p-4 ">

        {/* Social Media Buttons */}
       <section className="mb-4 b">
  <a className="btn btn-floating m-1 btn-facebook bg-light" href="#!" role="button">
    <i className="fab fa-facebook-f"></i>
  </a>
  <a className="btn btn-floating m-1 btn-twitter bg-light" href="#!" role="button">
    <i className="fab fa-twitter"></i>
  </a>
  <a className="btn btn-floating m-1 btn-google bg-light" href="#!" role="button">
    <i className="fab fa-google"></i>
  </a>
  <a className="btn btn-floating m-1 btn-instagram bg-light" href="#!" role="button">
    <i className="fab fa-instagram"></i>
  </a>
  <a className="btn btn-floating m-1 btn-linkedin bg-light" href="#!" role="button">
    <i className="fab fa-linkedin-in"></i>
  </a>
  <a className="btn btn-floating m-1 btn-github bg-light" href="#!" role="button">
    <i className="fab fa-github"></i>
  </a>
</section>


        {/* Newsletter Form */}
        <section>
          <form>
            <div className="row d-flex justify-content-center align-items-center">

              <div className="col-auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>

              <div className="col-md-5 col-12">
                <div className="form-outline mb-4">
                  <input type="email" id="form5Example24" className="form-control" />
                  <label className="form-label" htmlFor="form5Example24">Email address</label>
                </div>
              </div>

              <div className="col-auto">
                <button type="submit" className="btn btn-outline mb-4">Subscribe</button>
              </div>

            </div>
          </form>
        </section>

        {/* Description */}
        <section className="mb-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
            repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam eum
            harum corrupti dicta, aliquam sequi voluptate quas.
          </p>
        </section>

        {/* Links */}
        <section>
          <div className="row">
            {Array(4).fill(0).map((_, idx) => (
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0" key={idx}>
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled mb-0">
                  {Array(4).fill(0).map((__, i) => (
                    <li key={i}>
                      <a className="text-body" href="#!">Link {i + 1}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Copyright */}
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2026 Copyright:
        <a className="text-reset fw-bold ms-1" href="https://mdbootstrap.com/" target="_blank" rel="noreferrer">
        <a>   MAI YOUSSEF 🎬<span className='cl-danger'> Mov</span> ies</a>
        </a>
      </div>

    </footer>
  );
}
