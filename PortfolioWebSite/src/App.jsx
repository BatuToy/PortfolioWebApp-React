import React from "react";
import { Route, Routes } from "react-router-dom";
import { Flex } from "antd";

import Navbar from "./components/Navbar /Navbar.jsx";
import Main from './components/Main/Main.jsx'
import About from "./pages/About/About.jsx";
import ProfileCard from './components/ProfileCard/ProfileCard.jsx';
import Projects from './pages/Projects/Projects.jsx';
import Contact from './pages/Contact/Contact.jsx';

const App = () => {
  return (
      <Flex gap={20} className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<About />} />
            <Route path="projects" index element={<Projects/>} />
            <Route path="contact" index element={<Contact/>} />
          </Route>
        </Routes>
        <ProfileCard />
      </Flex>
  );
}

export default App;