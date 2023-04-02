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
import BlogList from './components/Blog/BlogList';
import BlogPage from './pages/Blog/BlogPage';
import BlogPost from './components/Blog/BlogPost';
import UserBlog from './pages/Blog/UserBlog';
import WriteBlog from './pages/Blog/WriteBlog';

import Drconnect from './pages/Drconnect';
import Exercise_blog from './pages/Exercise_blog';

import Home from './pages/Videocall/Home';
import Room from './pages/Videocall/Room';
import Analysis from './pages/Analysis';


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
                <Route path="video" element={<Home />} />
                <Route path="/room/:roomID" element={<Room />} />
                <Route index element={<Dashboard />} />
                <Route path="profile" element={<Profile />} />

                <Route path="blog" element={<BlogPage />} />
                <Route path="blogpost/:id" element={<BlogPost />} />
                <Route path="userBlog/:userName" element={<UserBlog />} />
                <Route path='writeBlog' element={<WriteBlog />} />
                <Route path="chat" element={<Analysis />} />
                <Route path="exercises" element={<Exercise_blog />} />
                <Route path="/appointment" element={<Drconnect />} />

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
