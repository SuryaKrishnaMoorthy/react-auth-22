import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import Authpage from "./pages/AuthPage";
import HomePage from './pages/HomePage';

function App() {
  return (
    <Routes>
      <Layout>
        <Route path='/' element={HomePage} />
      </Layout>
    </Routes>
  );
}

export default App;
