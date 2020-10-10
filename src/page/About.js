import React from 'react';
import aboutImage1 from '../assets/img/about_1.jpg';
import aboutImage2 from '../assets/img/about_2.jpg';
import aboutImage3 from '../assets/img/about_3.jpg';
import aboutImage4 from '../assets/img/about_4.jpg';

const About = () => {
  return (
    <div className="about">
      <div className="home-wrap">
        <div className="container-fluid">
          <div className="row">
            <div className="col-5">
              <img src={aboutImage1} alt="about" className="img-fluid w-100"/>
            </div>
            <div className="col-4 d-flex align-items-center">
              <div>
                <h3 className="caption-about">Еще один сайт<br/> о высоких технологиях?</h3>
                <p class="text text_description">Top Developer News - это место где ты сможешь узнать самые актуальные новости в мире ИТ.</p>
              </div>
            </div>
          </div>
          <div className="row mt-5 pt-5">
            <div className="col-4 offset-lg-3 d-flex align-items-center">
              <div className="pl-5">
                <h3 className="caption-about">Но есть же medium,<br/> habr, tpoger и другие!</h3>
                <p class="text text_description">Top Developer News - это место где ты сможешь узнать самые актуальные новости в мире ИТ.</p>
              </div>
            </div>
            <div className="col-5">
              <img src={aboutImage2} alt="about" className="img-fluid w-100"/>
            </div>
          </div>
          <div className="row mt-5 pt-5">
            <div className="col-5">
              <img src={aboutImage3} alt="about" className="img-fluid w-100"/>
            </div>
            <div className="col-4 d-flex align-items-center">
              <div>
                <h3 className="caption-about">Еще один сайт<br/> о высоких технологиях?</h3>
                <p class="text text_description">Top Developer News - это место где ты сможешь узнать самые актуальные новости в мире ИТ.</p>
              </div>
            </div>
          </div>
          <div className="row mt-5 pt-5">
            <div className="col-4 offset-lg-3 d-flex align-items-center">
              <div className="pl-5">
                <h3 className="caption-about">Но есть же medium,<br/> habr, tpoger и другие!</h3>
                <p class="text text_description">Top Developer News - это место где ты сможешь узнать самые актуальные новости в мире ИТ.</p>
              </div>
            </div>
            <div className="col-5">
              <img src={aboutImage4} alt="about" className="img-fluid w-100"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
