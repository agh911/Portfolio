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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [userData, skillsData, projectsData] = await Promise.all([getUser(), getSkills(), getProjects()]);

        setUser(userData[0]);
        setSkills(skillsData[0].technicalSkills);
        setProjects(projectsData[0].projects);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
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
    <div className={`${isDarkMode ? 'dark' : 'light'} bg-customBg relative h-screen overflow-x-clip`}>
      < Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      {loading ? (
        <div className={`${isDarkMode ? 'dark' : 'light'} flex flex-col justify-center bg-customBg text-center h-screen`}>
          <div className={`${isDarkMode ? 'dark' : 'light'} flex justify-center`}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-headline animate-spin h-5 w-5 mr-3"><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" /></svg>
            <h5 className="np-font text-headline">Loading portfolio data...</h5>
          </div>
          <p className="text-paragraph mt-5">This might take a few seconds. Thank you for your patience!</p>
        </div>
      ) :
        (
          <>
            <Home user={user} skills={skills} projects={projects} isDarkMode={isDarkMode} />
            <Footer isDarkMode={isDarkMode} />
          </>
        )}
      <GradientCursor />
    </div>
  )
}

export default App
