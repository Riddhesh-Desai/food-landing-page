import React from 'react';
import card1 from '../images/img/img-3.jpg';
import card2 from '../images/img/img-4.jpg';
import card3 from '../images/img/img-5.jpg';

export default function Explore() {
  return <section  id='Explore'>
      <div className="container-fluid ps-0 Explore-banner">
        <div className="container">
          <div className="explore-container  text-center">
              <h2 className="explore-tittle">
                explore our food
              </h2>
              <p className="explore-des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempore, eaque atque ex provident, quasi 
                aut voluptatem esse doles rependus autem. Molltia totam fuiat max enda,
                 iusto adipisci. Odio necessitatibus magnam perspiciatis perfedolores Lorem ipsum dolor sit.
              </p>
          </div>
          <div className="row">
              <div className="col-md-4 md-4 mt-4 mt-md-0">
                  <div className="card border-0">
                    <img src={card1} className="card-img-top card-Img" alt="..."/>
                    <div className="card-body px-0">
                        <p className="card-title">rainbow vegetable sandwitch</p>
                        <p className="card-text">Time: 15 - 20 Minutes | serves: 1</p>
                        <h4 className="price-band ">
                            $10.15<span className="ms-3">$11.70</span>
                        </h4>
                        <div className="under-line">

                        </div>
                        <div className="mt-4 ps-0">
                            <button type='button' className='main-btn'>Learn More</button>
                        </div>
                    </div>
                    </div>
              </div>
              <div className="col-md-4 mt-4 mt-md-0">
                  <div className="card border-0" >
                    <img src={card2} className="card-img-top card-Img" alt="..."/>
                    <div className="card-body px-0">
                    <p className="card-title">rainbow vegetable sandwitch</p>
                        <p className="card-text">Time: 15 - 20 Minutes | serves: 1</p>
                        <h4 className="price-band ">
                            $9.50<span className="ms-3">$14.60</span>
                        </h4>
                        <div className="under-line">

                        </div>
                        <div className="mt-4 ps-0">
                            <button type='button' className='main-btn'>Order Now</button>
                        </div>
                    </div>
                    </div>
              </div>
              <div className="col-md-4 md-4 mt-4 mt-md-0">
                  <div className="card border-0" >
                    <img src={card3} className="card-img-top card-Img" alt="..."/>
                    <div className="card-body px-0">
                    <p className="card-title">rainbow vegetable sandwitch</p>
                        <p className="card-text">Time: 15 - 20 Minutes | serves: 1</p>
                        <h4 className="price-band ">
                            $12.70<span className="ms-3">$10.50</span>
                        </h4>
                        <div className="under-line">

                        </div>
                        <div className="mt-4 ps-0">
                            <button type='button' className='main-btn'>Order Now</button>
                        </div>
                    </div>
                    </div>
              </div>
          </div>
        </div>
      </div>
  </section>
}
