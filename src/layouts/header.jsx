import { Link, useLocation } from "react-router-dom";
import { menu } from "../constants/menu";
import reactIcon from "../assets/react-icon.png"
import { classNames } from "../lib/functions";

export default function Header() {
  const location = useLocation()

  return (
    <header className="bg-slate-800 py-3">
      <div className="main-container px-6 flex justify-between text-white">
        <nav>
          <ul className="flex gap-8 items-center">
            {menu.map((m) => (
              <li key={m.href}>
                <Link className={classNames(location.pathname === m.href && "underline", "text-sm underline-offset-4")} to={m.href}>
                  {m.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <img src={reactIcon} />
          Reactjs
          </div>
      </div>
    </header>
  );
}
