// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MenuPage from "./components/MenuPage";
import AboutPage from "./pages/AboutPage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer
      />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
