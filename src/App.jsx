import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import Home from "./screens/home";
import Login from "./screens/login";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Home />} path={"/"} />
        <Route element={<Login />} path={"/login"} />
      </Routes>
    </div>
  );
}

export default App;
