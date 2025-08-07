// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MenuPage from "./components/MenuPage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route id="menupage" path="/menu" element={<MenuPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
