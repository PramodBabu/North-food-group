import React, { Component } from "react";
import Slider from "react-slick";
import meat from '../assets/dummy.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red", borderRadius: '20px' }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red",  borderRadius: '20px'}}
        onClick={onClick}
      />
    );
  }

const Responsive = () =>  {

    const cardsInfo = [1,2,3,4,5,6,7,8];

    const cardStyle = {
        border: '2px solid black'
    }

    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div>
        <Slider {...settings}>
          {
            cardsInfo.map(item => (
                <div>
                    <div style={{ border: '2px solid black', margin: '10px' }} className="text-center">
                        <h1>{item}</h1>
                    </div>
                </div>
            ))
        }
        </Slider>
      </div>
    );
}

export default Responsive;