import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "grey", borderRadius: '20px' }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "grey",  borderRadius: '20px'}}
        onClick={onClick}
      />
    );
  }

const Responsive = () =>  {

    const cardsInfo = [
      ['Beef','https://i.pinimg.com/originals/4a/b8/36/4ab836fad95a717bc5d356d8961fdbbc.jpg'],
      ['Pork','https://www.icon0.com/static2/preview2/stock-photo-sausage-icon-94642.jpg'],
      ['Poultry','https://i.pinimg.com/originals/66/10/b5/6610b5f3c0a3f9edf59de6f91241b0b6.png'],
      ['Seafood','https://mammamiarochester.co.uk/images/prodotti/seafood.svg'],
      ['Lamb','https://i.pinimg.com/originals/90/00/17/9000177dc02215d70ada3d1b9d0ea6fe.png'],
      ['CannedFood','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8RMgHayXbgsQLFAOKzlhsHoSSJ1boLP6-Sg&usqp=CAU'],
      ['Vegetable','https://png.pngtree.com/png-vector/20190701/ourmid/pngtree-vegetables-icon-for-your-project-png-image_1532868.jpg'],
      ['Fruit','https://static.thenounproject.com/png/2684115-200.png']
    ];

    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
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
            dots: false
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
      <div style={{justifyContent: 'center', textAlign: 'center'}}>
        <Slider {...settings}>
          {
            cardsInfo.map(item => (
                <div>
                    <div 
                      style={{
                        height:'150px',
                        backgroundColor: 'white',
                        borderRadius: '20px',
                        boxShadow: '0 0 3px #777',
                        margin: '10px 10px 10px 10px'
                      }} 
                        className="text-center">
                        <img 
                          src={item[1]} 
                          alt="gg"
                          // width="70px" 
                          // height="100%"
                          style={{ height: '100%', padding: '30px',display: 'block',
                          marginLeft: 'auto',
                          marginRight: 'auto'}}
                        />
                    </div>
                    <p style={{fontSize: '20px'}}>{item[0]}</p>
                </div>
            ))
        }
        </Slider>
      </div>
    );
}

export default Responsive;