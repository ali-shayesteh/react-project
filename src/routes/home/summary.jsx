import avatar1 from "../../assets/avatar1.png";
import shiraz from "../../assets/shiraz-university-logo.png";
import { TEXT_HOME as TEXT } from "../../constants/texts";

const Summary = () => {
  return (
    <div className="flex-col md:flex-row flex gap-10 text-slate-700">
      <div className="basis-2/3">
        <h1 className="text-3xl w-5/6">{TEXT.title}</h1>
        <p className="text-slate-400 text-sm my-4 w-5/6">{TEXT.description}</p>
        <div>{TEXT.date}</div>
        <div className="w-24 border-t border-slate-300 mt-2 mb-6" />
        <div className="flex gap-6 items-center">
          <div>
            <img src={shiraz} />
          </div>
          <div>
            <h3 className="text-xl">{TEXT.university}</h3>
            <h3 className="text-xl">{TEXT.professor}</h3>
          </div>
        </div>
      </div>
      <div className="basis-1/3 flex gap-3">
        <div className="rounded-full border-slate-200 w-12 h-12 border-2 flex justify-center items-center">
          <img className="rounded-full" src={avatar1} />
        </div>
        <div>
          <div>
            <h3 className="text-lg">{TEXT.name}</h3>
            <div className="text-sm text-slate-400">{TEXT.myTitle}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
