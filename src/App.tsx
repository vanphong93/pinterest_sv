import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import SingIn from "./pages/SingIn";
import LoginUser from "./pages/Login";
import UserPage from "./pages/UserPage";
import DetailPage from "./pages/DetailPage";
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/sign-in" element={<SingIn />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<LoginUser />} />
        </Routes>
        <Routes>
          <Route path="/user" element={<UserPage />} />
        </Routes>
        <Routes>
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
