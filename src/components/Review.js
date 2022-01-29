import React from 'react';
import review1 from '../images/review/review-1.jpg';
import review2 from '../images/review/review-2.jpg';

export default function Review() {
  return <section id='Reviews'>
            <div className=" review-wrapper">
                <div className=" container text-center">
                    <div className=" review-tittle text-centre pb-5 ">
                        <h2>Textimonials</h2>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-lg-10 offset-lg-1">
                        <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="review-caption ">
                                            <img src={review1} alt="logo-img" />
                                            <p>
                                                "Far far away,behind the word mountain, far from the countries volkilas and consomatic, there live the blind texts."
                                            </p>
                                            <h5>Jonathan kyre - Web Developer</h5>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="review-caption">
                                            <img src={review2} alt="logo-img" />
                                            <p>
                                                "Far far away,behind the word mountain, far from the countries volkilas and consomatic, there live the blind texts."
                                            </p>
                                            <h5>Ajinkya joe - UX Designer</h5>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="review-caption">
                                            <img src={review1} alt="logo-img" />
                                            <p>
                                                "Far far away,behind the word mountain, far from the countries volkilas and consomatic, there live the blind texts."
                                            </p>
                                            <h5>Riddhesh desai- Front-end Developer</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
}
