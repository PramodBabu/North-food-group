import React from "react";
import Slider from "react-slick";

const CarouselBanner = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img 
                src='https://lh3.googleusercontent.com/rTxh5Ncr_oxuTbtb9wS70QOO7aP30F9a3ggBXkeKdDGCDq3IEn9mNgdLB4qLcvq_tENiPNASFTSSSdO7rGSjR6Bd2hID2RTdErtqRVGKRK6guaWvpcUSIKA11GgKnmWKnzxoLsmO' 
                width="100%"
                class="img-responsive"
            />
          </div>
          <div>
            <img 
                src='https://lh3.googleusercontent.com/rTxh5Ncr_oxuTbtb9wS70QOO7aP30F9a3ggBXkeKdDGCDq3IEn9mNgdLB4qLcvq_tENiPNASFTSSSdO7rGSjR6Bd2hID2RTdErtqRVGKRK6guaWvpcUSIKA11GgKnmWKnzxoLsmO' 
                width="100%"
                class="img-responsive"
            />
          </div>
          <div>
            <img 
                src='https://lh3.googleusercontent.com/rTxh5Ncr_oxuTbtb9wS70QOO7aP30F9a3ggBXkeKdDGCDq3IEn9mNgdLB4qLcvq_tENiPNASFTSSSdO7rGSjR6Bd2hID2RTdErtqRVGKRK6guaWvpcUSIKA11GgKnmWKnzxoLsmO' 
                width="100%"
                class="img-responsive"
            />
          </div>
        </Slider>
      </div>
    );
  }

export default CarouselBanner;