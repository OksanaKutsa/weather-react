import "./App.css";
import SearchEngine from "./SearchEngine";
import Forecast from "./Forecast";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className="container">
      <Container className="p-3">
        <Container className="p-5 mb-4 bg-light rounded-3">
          <SearchEngine />
          <Forecast />
        </Container>
      </Container>
    </div>
  );
}

export default App;
