import { Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage, JokePage, PageNotFound } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/joke" element={<JokePage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
