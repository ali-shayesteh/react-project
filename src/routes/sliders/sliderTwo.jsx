import SliderMain from "../../components/slider/sliderMain";
import abstract01 from "../../assets/img/slider1/abstract01.jpg";
import abstract02 from "../../assets/img/slider1/abstract02.jpg";
import abstract03 from "../../assets/img/slider1/abstract03.jpg";
import abstract04 from "../../assets/img/slider1/abstract04.jpg";

const settings = {
  className: "slider-center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 3,
  speed: 500
};

const slides = [abstract01, abstract02, abstract03, abstract04];

export default function SliderTwo() {
  return (
    <div className="border rounded-lg p-10 bg-slate-200">
      <SliderMain settings={settings}>
        {slides.map((slide, idx) => (
          <div key={idx}>
            <img src={slide} />
          </div>
        ))}
      </SliderMain>
    </div>
  );
}