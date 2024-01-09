import { DocumentIcon } from "@heroicons/react/24/outline";

export default function PageLayout({ title, children, Icon }) {
  return (
    <>
      <h1 className="text-3xl text-slate-700 mb-4 flex items-center gap-2">
        <span className=" rounded-full bg-slate-200 p-2">
        {Icon ? (
          <Icon className="w-6 h-6 " />
        ) : (
          <DocumentIcon className="w-6 h-6 " />
        )}</span>
        {" "}{title}
      </h1>
      <div className="border border-slate-300 rounded-xl p-8 mt-4 flex flex-col gap-6">
        {children}
      </div>
    </>
  );
}
