import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderMain({children, settings}) {
  return (
    <Slider {...settings}>
     {children}
    </Slider>
  );
}