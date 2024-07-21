import { Routes, Route } from "react-router-dom";
import Detail from "./components/Detail";
import Ourteam from "./components/Ourteam";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Ourteam />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
  );
}

export default App;
