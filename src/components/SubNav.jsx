import { NavLink } from "react-router";
import "./SubNav.css";

// Section tabs for multi-page projects (OpenFWI, E^FWI, ...).
//   <SubNav title="OpenFWI" items={[{ label: "Overview", to: "/projects/openfwi", end: true }, ...]} />
export default function SubNav({ title, items }) {
  return (
    <div className="subnav">
      <div className="container subnav-inner">
        <span className="subnav-title">{title}</span>
        <nav aria-label="Section">
          <ul>
            {items.map((it) => (
              <li key={it.to}>
                <NavLink
                  to={it.to}
                  end={it.end}
                  className={({ isActive }) => `subnav-link${isActive ? " is-active" : ""}`}
                >
                  {it.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
