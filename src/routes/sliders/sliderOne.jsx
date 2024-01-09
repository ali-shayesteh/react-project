import SliderMain from "../../components/slider/sliderMain";
import abstract01 from "../../assets/img/slider1/abstract01.jpg";
import abstract02 from "../../assets/img/slider1/abstract02.jpg";
import abstract03 from "../../assets/img/slider1/abstract03.jpg";
import abstract04 from "../../assets/img/slider1/abstract04.jpg";

const settings = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const slides = [abstract01, abstract02, abstract03, abstract04];

export default function SliderOne() {
  return (
    <div className="border rounded-lg p-10 bg-slate-200">
      <SliderMain settings={settings}>
        {slides.map((slide, idx) => (
          <div key={idx} className="w-full">
            <img className="mx-auto" src={slide} />
          </div>
        ))}
      </SliderMain>
    </div>
  );
}
