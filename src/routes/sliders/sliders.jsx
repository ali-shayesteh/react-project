import { DocumentArrowUpIcon } from "@heroicons/react/24/outline";
import PageLayout from "../../layouts/pageLayout";
import SliderOne from "./sliderOne";
import SliderTwo from "./sliderTwo";

const Sliders = () => {
  return (
    <PageLayout title={"Sliders"} Icon={DocumentArrowUpIcon}>
      <SliderOne />
      <SliderTwo />
    </PageLayout>
  );
};

export default Sliders;
