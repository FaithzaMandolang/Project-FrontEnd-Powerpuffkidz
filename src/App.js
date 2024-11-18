import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components";
import Reservation from "./components/reservasi";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
    </Router>
  );
}

export default App;
