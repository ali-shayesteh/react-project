import SliderMain from "../../components/slider/sliderMain";

import slider1 from "../../assets/img/slider2/slider1.jpg";
import slider2 from "../../assets/img/slider2/slider2.jpg";
import slider3 from "../../assets/img/slider2/slider3.jpg";

const settings = {
  "slides-per-view": 1,
  "space-between": 10,
  "centered-slides": true,
  pagination: true,
  autoplay: true,
  delay: 2000,
};

const slides = [slider1, slider2, slider3];

export default function SliderOne() {
  return (
    <div className="bg-white">
      <SliderMain settings={settings} slides={slides} />
    </div>
  );
}
