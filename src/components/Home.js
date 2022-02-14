import React from 'react';

export default function Home() {
  return <section id='Home'>
      <div className="container-fluid ps-0 top-banner">
        <div className="container">
            <div className="row">
                <div className="col-12 col-10 col-lg-5">
                    <h1 className="banner-title">
                        Good food choices are
                        good investment
                    </h1>
                    <p className="banner_subtittle">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex debitis 
                        voluptates at, officiis.
                    </p>
                    <div className="btn-banner-section mt-5 ">
                        <button type='button' className='main-btn'>Order Now <span className='ms-2'><i className="fas fa-shopping-basket"></i></span></button>
                        <button type='button' className='white-btn ms-3 ms-sm-4'>Order Now <span className='ms-2'><i className="fas fa-chevron-right"></i></span></button>
                    </div>

                </div>
            </div>
        </div>
      </div>
        <div className="container-fluid ps-0 banner-number">
            <div className="container ">
                <div className="row">
                    <div className="col-lg-3 number-container">
                        <h3 className="number">1520+</h3>
                        <p className="number-des">savings</p>
                    </div>
                    <div className="col-lg-3 number-container">
                        <h3 className="number">8990+</h3>
                        <p className="number-des">Photos</p>
                    </div>
                    <div className="col-lg-3 number-container">
                        <h3 className="number">5400+</h3>
                        <p className="number-des">rocket</p>
                    </div>
                    <div className="col-lg-3 number-container">
                        <h3 className="number">1399+</h3>
                        <p className="number-des">Global</p>
                    </div>
                </div>
            </div>

        </div> 
      

  </section>
}
