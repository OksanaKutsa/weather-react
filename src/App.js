import "./App.css";
import Weather from "./Weather";
import Container from "react-bootstrap/Container";
import MainCities from "./MainCities";

function App() {
  return (
    <div className="container">
      <Container className="p-3">
        <Container className="p-5 mb-4 bg-light rounded-3">
          <Weather defaultCity="Kyiv" />
          <MainCities />
        </Container>
      </Container>
      <footer>
        <a
          href="https://github.com/OksanaKutsa/weather-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>{" "}
        by Oksana Kutsa
      </footer>
    </div>
  );
}

export default App;
