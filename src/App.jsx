import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TemplateListingPage from './components/TemplateListingPage';
import TemplateCreationPage from './components/TemplateCreationPage';
import './App.css';
import AppRoutes from './routes/Routes';


const App = () => {
  const [templates, setTemplates] = useState([]);

  const addTemplate = (newTemplate) => {
    setTemplates((prevTemplates) => [...prevTemplates, newTemplate]);
  };

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const response = await fetch('/templates.json'); // Fetch initial templates
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTemplates(data); // Set initial templates
      } catch (error) {
        console.error('Error fetching templates:', error);
      }
    };

    fetchTemplates();
  }, []);

  return (
      <div>
      <AppRoutes addTemplate={addTemplate} templates={templates} />
    </div>
  );
};

export default App;
