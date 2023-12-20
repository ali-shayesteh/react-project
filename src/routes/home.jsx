import avatar1 from "../assets/avatar1.png";
import shiraz from "../assets/shiraz-university-logo.png";

export default function Home() {
  return (
    <div className="flex-col md:flex-row flex gap-10 text-slate-700">
      <div className="basis-2/3">
        <h1 className="text-3xl w-5/6">
          Implementation, comparison and performance analysis of Reactjs and
          Vuejs frameworks
        </h1>
        <p className="text-slate-400 text-sm my-4 w-5/6">
          Comparing performance and implementation of web pages using modern
          JavaScript libraries by implementing the same pages including
          different web elements (sliders, charts, etc.) in reactjs and vuejs.
        </p>
        <div>December 2023</div>
        <div className="w-24 border-t border-slate-300 mt-2 mb-6" />
        <div className="flex gap-6 items-center">
          <div>
            <img src={shiraz} />
          </div>
          <div>
            <h3 className="text-xl">Shiraz university, Faulty of e-learning</h3>
            <h3 className="text-xl">Professor koorush ziarati</h3>
          </div>
        </div>
      </div>
      <div className="basis-1/3 flex gap-3">
        <div className="rounded-full border-slate-200 w-12 h-12 border-2 flex justify-center items-center">
          <img className="rounded-full" src={avatar1} />
        </div>
        <div>
          <div>
            <h3 className="text-lg">Ali Shayesteh Sadafian</h3>
            <div className="text-sm text-slate-400">
              Bachelor&apos;s student in software engineering
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
