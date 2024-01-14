import SliderMain from "../../components/slider/sliderMain";

import slider1 from "../../assets/img/slider2/slider1.jpg";
import slider2 from "../../assets/img/slider2/slider2.jpg";
import slider3 from "../../assets/img/slider2/slider3.jpg";

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const slides = [slider1, slider2, slider3];

export default function SliderOne() {
  return (
    <div className="bg-white">
      <SliderMain settings={settings}>
        {slides.map((slide, idx) => {
          return (
            <div key={idx}>
              <div
                style={{
                  background: `url('${slide}') center center no-repeat`,
                  backgroundSize: "cover",
                }}
                className={`w-full h-96 rounded`}
              />
            </div>
          );
        })}
      </SliderMain>
    </div>
  );
}
