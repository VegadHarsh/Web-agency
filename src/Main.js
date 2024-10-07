import React from 'react';
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Login from './pages/Login';
import Registration from './pages/Registration';
import UserList from './components/Admin-structure/UserList';
import ProjectList from './components/Admin-structure/ProjectList';
import Settings from './components/Admin-structure/Settings';
import AdminPage from './components/Admin-structure/Adminpage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Route>
      <Route path='/registration' element={<Registration />} />
      <Route path='/login' element={<Login />} />
      <Route path='/adminpage' element={<AdminPage />} />
      <Route path="/userlist" element={<UserList />} />
      <Route path='/projectlist' element={<ProjectList />} />
      <Route path='/settings' element={<Settings />} />
    </>
  )
);

const Main = () => {
  return <RouterProvider router={router} />;
};

export default Main;
