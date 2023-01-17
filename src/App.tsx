import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import StorePage from "./components/StorePage/StorePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/store" element={<StorePage />} />
    </Routes>
  );
}

export default App;
