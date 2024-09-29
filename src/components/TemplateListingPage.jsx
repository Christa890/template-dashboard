import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TemplateListingPage.css'; 

const TemplateListingPage = ({ templates }) => {
  const navigate = useNavigate();

  const handleCreateTemplate = () => {
    navigate('/create'); // Redirect to the Template Creation Page
  };

  return (
    <div className="template-listing">
      <h1>Message Templates</h1>
      <button onClick={handleCreateTemplate} className="create-template-button">
        Create Template
      </button>
      <table className="template-table">
        <thead>
          <tr>
            <th>Template Name</th>
            <th>Category</th>
            <th>Type</th>
            <th>Header</th>
            <th>Body</th>
            <th>Footer</th>
            <th>Button</th>
          </tr>
        </thead>
        <tbody>
          {templates.length > 0 ? (
            templates.map((template, index) => (
              <tr key={index}>
                <td>{template.header || 'Untitled'}</td>
                <td>{template.category}</td>
                <td>{template.templateType}</td>
                <td>{template.header}</td>
                <td>{template.body}</td>
                <td>{template.footer}</td>
                <td>
                  {template.button.text && (
                    <a href={template.button.link} className="button">
                      {template.button.text}
                    </a>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No templates available. Create a new template!</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TemplateListingPage;
