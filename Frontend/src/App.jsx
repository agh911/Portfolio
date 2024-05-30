import { useState, useEffect } from 'react';
import GradientCursor from './components/GradientCursor.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import './App.css';

import { getProjects, getSkills, getUser } from '../utils/dataHandlers.js';

function App() {
  const [user, setUser] = useState([]);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUser();
        setUser(userData[0]);

        const skillsData = await getSkills();
        setSkills(skillsData[0].technicalSkills);

        const projectsData = await getProjects();
        setProjects(projectsData[0].projects);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : true;
  });

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`${isDarkMode ? 'dark' : 'light'} relative h-screen overflow-x-clip`}>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Home user={user} skills={skills} projects={projects} isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
      <GradientCursor />
    </div>
  )
}

export default App
