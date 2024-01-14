import { TEXT_HOME as TEXT, HOME_TABLE } from "../../constants/texts";
import vue from "../../assets/vue.svg";
import react from "../../assets/react.svg";
import HeadingTwo from "../../components/typography/HeadingTwo";

const LibrariesTable = () => {
  return (
    <div className="border-t border-slate-300 pt-8 mt-8">
      <HeadingTwo title={TEXT.tableTitle} />
      <div className="mt-6 border rounded-lg overflow-hidden">
        <table className="lib-table">
          <tbody>
            <tr className="bg-slate-50">
              <td></td>
              <td>
                <img src={react} className="w-8 h-8" />
              </td>
              <td>
                <img src={vue} className="w-8 h-8" />
              </td>
            </tr>
            {HOME_TABLE.map((row) => (
              <tr key={row.heading}>
                <th>{row.heading}</th>
                {row.values.map((item, idx) => (
                  <td key={idx}>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={item.link}
                      className="text-fuchsia-700 flex items-center gap-1"
                    >
                      {item.name}
                    </a>
                    <span className="text-sm text-slate-500">{item.npm}</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LibrariesTable;
