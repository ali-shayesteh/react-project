import SliderMain from "../../components/slider/sliderMain";
import abstract01 from "../../assets/img/slider1/abstract01.jpg";
import abstract02 from "../../assets/img/slider1/abstract02.jpg";
import abstract03 from "../../assets/img/slider1/abstract03.jpg";
import abstract04 from "../../assets/img/slider1/abstract04.jpg";

const settings = {
  "slides-per-view": 2,
  "space-between": 10,
  "centered-slides": false,
  navigation: true,
  pagination: true,
  autoplay: true,
  delay: 2000,
};

const slides = [abstract01, abstract02, abstract03, abstract04];

export default function SliderTwo() {
  return (
    <div className="border rounded-lg p-10 bg-slate-200">
      <SliderMain settings={settings} slides={slides} />
    </div>
  );
}
