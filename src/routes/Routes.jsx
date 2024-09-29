import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TemplateListingPage from '../components/TemplateListingPage';
import TemplateCreationPage from '../components/TemplateCreationPage';

const AppRoutes = ({ addTemplate, templates }) => {
  return (
    <Routes>
      <Route path="/" element={<TemplateListingPage templates={templates} />} />
      <Route path="/create" element={<TemplateCreationPage addTemplate={addTemplate} />} />
    </Routes>
  );
};

export default AppRoutes;
