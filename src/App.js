import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { NhostClient, NhostProvider } from '@nhost/react'
import { NhostApolloProvider } from '@nhost/react-apollo'

import ProtectedRoute from './components/ProtectedRoute'
import Layout from './components/Layout';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

import Exercise_blog from './pages/Exercise_blog';

import Home from './pages/Videocall/Home';
import Room from './pages/Videocall/Room';


const nhost = new NhostClient({
  subdomain: process.env.REACT_APP_NHOST_SUBDOMAIN,
  region: process.env.REACT_APP_NHOST_REGION,
});
function App() {
  return (
    <>
      <NhostProvider nhost={nhost}>
        <NhostApolloProvider nhost={nhost}>

          <BrowserRouter>
            <Routes>
              <Route path="sign-up" element={<SignUp />} />
              <Route path="sign-in" element={<SignIn />} />
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Layout />
                  </ProtectedRoute>
                }
              >
                <Route path="video" element={<Home/>}/>
                <Route path="/room/:roomID" element={<Room/>}/>
                <Route index element={<Dashboard />} />
                <Route path="profile" element={<Profile />} />
                <Route path="exercises" element={<Exercise_blog />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </NhostApolloProvider>
      </NhostProvider>
      <Toaster />
    </>
  );
}

export default App;
