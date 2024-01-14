import { DocumentIcon } from "@heroicons/react/24/outline";

const HeadingTwo = ({ title }) => (
  <h2 className="text-slate-600 text-xl flex gap-1 items-center">
    <DocumentIcon className="w-5 h-5 text-slate-400 mt-1" /> {title}
  </h2>
);

export default HeadingTwo;
