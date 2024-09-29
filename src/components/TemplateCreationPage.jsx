import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TemplateCreationPage.css'; 

const TemplateCreationPage = ({ addTemplate }) => {
  const navigate = useNavigate();
  
  const [category, setCategory] = useState('Marketing');
  const [templateType, setTemplateType] = useState('');
  const [header, setHeader] = useState('');
  const [body, setBody] = useState('');
  const [footer, setFooter] = useState('');
  const [buttonText, setButtonText] = useState('');
  const [buttonLink, setButtonLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newTemplate = {
      category,
      templateType,
      header,
      body,
      footer,
      button: {
        text: buttonText,
        link: buttonLink,
      },
    };

    addTemplate(newTemplate); // Call the function to add the new template
    navigate('/'); // Redirect to the Template Listing Page
  };

  return (
    <div className="template-creation">
      <h1>Create Template</h1>
      <div className="template-setup">
        <h2>Set up your template</h2>
        <div className="category-selection">
          <label>
            <input 
              type="radio" 
              value="Marketing" 
              checked={category === 'Marketing'} 
              onChange={() => setCategory('Marketing')}
            />
            Marketing
          </label>
          <label>
            <input 
              type="radio" 
              value="Utility" 
              checked={category === 'Utility'} 
              onChange={() => setCategory('Utility')}
            />
            Utility
          </label>
          <label>
            <input 
              type="radio" 
              value="Authentication" 
              checked={category === 'Authentication'} 
              onChange={() => setCategory('Authentication')}
            />
            Authentication
          </label>
        </div>
        <h3>Type of message</h3>
        <div className="template-type-selection">
          <label>
            <input 
              type="radio" 
              value="Custom" 
              checked={templateType === 'Custom'} 
              onChange={() => setTemplateType('Custom')}
            />
            Custom
          </label>
          <label>
            <input 
              type="radio" 
              value="Catalog" 
              checked={templateType === 'Catalog'} 
              onChange={() => setTemplateType('Catalog')}
            />
            Catalog
          </label>
          <label>
            <input 
              type="radio" 
              value="Flows" 
              checked={templateType === 'Flows'} 
              onChange={() => setTemplateType('Flows')}
            />
            Flows
          </label>
          <label>
            <input 
              type="radio" 
              value="Order Details" 
              checked={templateType === 'Order Details'} 
              onChange={() => setTemplateType('Order Details')}
            />
            Order Details
          </label>
        </div>
      </div>
      
      <div className="template-preview">
        <h2>Template Preview</h2>
        <div className="preview-area">
          <h3>{header || 'Header'}</h3>
          <p>{body || 'This is the body of the message.'}</p>
          <p>{footer || 'Footer information goes here.'}</p>
          {buttonText && (
            <a href={buttonLink} className="button">
              {buttonText}
            </a>
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="template-form">
        <h2>Customize Your Template</h2>
        <div>
          <label>Header:</label>
          <input 
            type="text" 
            value={header} 
            onChange={(e) => setHeader(e.target.value)} 
            placeholder="Enter header text"
            required
          />
        </div>
        <div>
          <label>Body:</label>
          <textarea 
            value={body} 
            onChange={(e) => setBody(e.target.value)} 
            placeholder="Enter body text"
            required
          />
        </div>
        <div>
          <label>Footer:</label>
          <input 
            type="text" 
            value={footer} 
            onChange={(e) => setFooter(e.target.value)} 
            placeholder="Enter footer text"
            required
          />
        </div>
        <div>
          <label>Button Text:</label>
          <input 
            type="text" 
            value={buttonText} 
            onChange={(e) => setButtonText(e.target.value)} 
            placeholder="Enter button text"
            required
          />
        </div>
        <div>
          <label>Button Link:</label>
          <input 
            type="url" 
            value={buttonLink} 
            onChange={(e) => setButtonLink(e.target.value)} 
            placeholder="Enter button link"
            required
          />
        </div>
        <button type="submit">Submit for Review</button>
      </form>
    </div>
  );
};

export default TemplateCreationPage;
