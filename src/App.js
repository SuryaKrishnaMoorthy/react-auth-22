import { useContext } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
// import UserProfile from "./components/Profile/UserProfile";
 
import Authpage from "./pages/AuthPage";
import HomePage from './pages/HomePage';
import ProfilePage from "./pages/ProfilePage";
import AuthContext from './store/auth-context';

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/auth' element={<Authpage />} />
        {authCtx.isLoggedIn && <Route path='/profile' element={<ProfilePage />} />}
        <Route path='*' element={<Navigate replace to='/auth' />} />
      </Routes>
    </Layout>
  );
}

export default App;
