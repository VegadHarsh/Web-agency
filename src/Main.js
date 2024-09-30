import React from 'react';
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route />
    </Route>
  )
);

const Main = () => {
  return <RouterProvider router={router} />;
};

export default Main;
