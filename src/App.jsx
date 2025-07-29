import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import NotFoundPage from "./page/NotFoundPage";
import ProfilePage from "./page/ProfilePage";
import RegisterPage from "./page/RegisterPage";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/me" element={<ProfilePage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
