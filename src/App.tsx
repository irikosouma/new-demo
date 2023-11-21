import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import HomePage from "./features/home";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <div>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <Footer />
      </div>
    </div>
  );
}

export default App;
