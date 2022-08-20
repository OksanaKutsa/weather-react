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
    </div>
  );
}

export default App;
