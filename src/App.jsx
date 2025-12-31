import { BrowserRouter, Routes, Route } from "react-router-dom";
import HappyNewYear from "./pages/HappyNewYear";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HappyNewYear />} />
        <Route path="/happy-new-year" element={<HappyNewYear />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
