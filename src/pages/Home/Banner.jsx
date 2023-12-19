import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../../assets/img2.webp";
import img2 from "../../assets/5fec5607e2161_json_image_1609324039.webp";

import img3 from "../../assets/img4.webp";
const Banner = () => {
  return (
    <Carousel
      showThumbs={false}
      autoPlay={true}
      interval={1500}
      infiniteLoop={true}
    >
      <div>
        <img src={img3} />
      </div>
      <div>
        <img src={img1} />
      </div>
      <div>
        <img src={img2} />
      </div>
    </Carousel>
  );
};

export default Banner;
