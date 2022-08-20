import Weather from "./Weather";
import "./MainCities.css";
export default function MainCities() {
  return (
    <div className="MainCities">
      <a href="/" onClick={() => Weather("lisbon")}>
        Lisbon
      </a>
      <a href="/" onClick={() => Weather("sofia")}>
        Sofia
      </a>
      <a href="/" onClick={() => Weather("warsaw")}>
        Warsaw
      </a>
      <a href="/" onClick={() => Weather("vilnius")}>
        Vilnius
      </a>
      <a href="/" onClick={() => Weather("riga")}>
        Riga
      </a>
    </div>
  );
}
