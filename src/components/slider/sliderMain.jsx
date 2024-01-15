import { register } from "swiper/element/bundle";
register();

export default function SliderMain({ slides, settings }) {
  return (
    <swiper-container {...settings}>
      {slides.map((slide, index) => (
        <swiper-slide key={index}>
          <div
            style={{
              background: `url('${slide}') center center no-repeat`,
              backgroundSize: "cover",
            }}
            className="w-full h-96 rounded"
          />
        </swiper-slide>
      ))}
    </swiper-container>
  );
}
