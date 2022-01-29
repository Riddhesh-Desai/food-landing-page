import React from 'react';
import foodImg1 from '../images/img/img-1.png';
import foodImg2 from '../images/img/img-2.png';

export default function About() {
  return <section id='About'>
      <div className="container-fluid ps-0 about-banner" >
          <div className="container">
              <div className="row">
                  <div className="col-lg-6 col-12" data-aos="zoom-out-right">
                      <div className="food-img-sec">
                        <img src={foodImg1} alt="Foodimage" className='img-fluid'/>
                      </div>
                  </div>
                  <div className="col-lg-6 col-12 food_des_section" data-aos="zoom-out-left">
                    <h2 className='food-tittle'>
                        we pride ourselves on <br/>
                        making real food from the<br/>
                        best ingrident
                    </h2>
                    <p className="food-des">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>voluptas consectetur. Sunt, veniam! A dolorem co <br/>
                        veritatis distinctio quisquam.
                    </p>
                    <div className="mt-4 ps-0">
                    <button type='button' className='main-btn'>Learn More</button>
                    </div>
                    
                  </div>
              </div>
          </div>
      </div>
      <div className="container-fluid ps-0 about-banner2">
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-12" data-aos="zoom-out-right">
                <h2 className='food-tittle2'>
                        we make everything by <br/>
                        hand with the best possible<br/>
                        ingrident
                    </h2>
                    <p className="food-des2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur fugiat quaerat ducimus impedit harum. <br /> et facere illum ipsa laudantiu accusantium iusto, illo autem exercitationem! Obcaecati ipsa facere laborum id nihil asperios is.
                    </p>
                    <p className="food-des2 mt-5 "><span className='me-2'><i className="fas fa-check"></i></span> Lorem ipsum dolor sit elit. <br />
                    <span className='me-2'><i className="fas fa-check"></i></span> auem exrcitnem! Obcati facere. <br />
                    <span className='me-2'><i className="fas fa-check"></i></span> has facere illum ipsa dff laudau.
                    </p>
                    <div className="mt-5 ps-0">
                    <button type='button' className='main-btn'>Learn More</button>
                    </div>

                </div>
                <div className="col-lg-7 col-12" data-aos="zoom-out-left">
                    <div className="food-img-sec2">
                        <img src={foodImg2} alt="Foodimage" className='img-fluid'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid ps-0 about-banner3" data-aos="zoom-out">
        <div className="container text-center">
            <div className="row">
                <div className="col-12">
                    <h2 className='food-tittle3'>
                        when a man stomach is full it makes no <br />
                        diffrence whether he is rich or poor.
                    </h2>
                    <p className="food-des3">
                        Lorem ipsum dolor sit amet consectetur adipisi accusamus! Incidunt molestiae ducimus eum eaque dolor <br />
                        Lorem ipsum dolor sit amet.
                    </p>
                    <div className="mt-5 ps-0">
                        <button type='button' className='main-btn'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

  </section>;
}
