import React from 'react';

export default function Footer() {
  return <section id="FOOTER">
      <div className="footer-wraper">
          <div className="container text-center Footer-des-section">
              <h2 className="tittle">
                  hurry up! subscribe our newsletter And get 25% off
              </h2>
              <p className="des">limited time offer for this month.no credit card required</p>
              <div className="form-container d-flex align-content-center justify-content-center">
                <input type="text" class="form-control" placeholder='Email Address Here'/>
                <div className='ps-3'>
                    <button type='button' className='main-btn'>subscribe</button>
                </div>
              </div>
          </div>
          <div className="container-fluid Footer-section pt-5 text-center pb-4">
              <div className="Footer-name-link">
                  <a href="/">Register</a>
                  <a href="/">Forum</a>
                  <a href="/">Affiliate</a>
                  <a href="/">FAQ</a>
              </div>
              <div className="Footer-icon-link pb-5">
                  <a href="/"><i class="fab fa-facebook-f"></i></a>
                  <a href="/"><i class="fab fa-twitter"></i></a>
                  <a href="/"><i class="fab fa-youtube"></i></a>
                  <a href="/"><i class="fas fa-volleyball-ball"></i></a>
                  <a href="/"><i class="fab fa-linkedin-in"></i></a>
                  <a href="/"><i class="fab fa-instagram"></i></a>
              </div>
              <p className='footer-des pb-3'>
              &copy; 2021. Foodies. All right reserved.
              </p>

          </div>
      </div>
  </section>
}
