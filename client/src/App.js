import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Input from "./pages/Input";
import Home from "./pages/Home";
import Auth from "./pages/Auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/jobs" element={<Home />} />
        <Route path="/input" element={<Input />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
