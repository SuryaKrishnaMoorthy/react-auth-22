import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
// import UserProfile from "./components/Profile/UserProfile";
import Authpage from "./pages/AuthPage";
import HomePage from './pages/HomePage';
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/auth' element={<Authpage />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
