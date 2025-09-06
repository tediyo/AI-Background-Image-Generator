import React from 'react';

interface InputFormProps {
  name: string;
  setName: (name: string) => void;
  contactInfo: string;
  setContactInfo: (contact: string) => void;
  keywords: string;
  setKeywords: (keywords: string) => void;
}

const inputStyles = "w-full bg-gray-50 border border-gray-300 rounded-md shadow-sm py-2 px-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out";

const InputForm: React.FC<InputFormProps> = ({ name, setName, contactInfo, setContactInfo, keywords, setKeywords }) => {
  return (
    <div className="space-y-6 w-full">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-600 mb-2">
          Full Name
        </label>
        <input 
          type="text" 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          className={inputStyles}
          placeholder="e.g., Jane Doe"
        />
      </div>
      <div>
        <label htmlFor="contact" className="block text-sm font-medium text-slate-600 mb-2">
          Contact Info (Phone or Email)
        </label>
        <input 
          type="text" 
          id="contact" 
          value={contactInfo} 
          onChange={(e) => setContactInfo(e.target.value)} 
          className={inputStyles}
          placeholder="e.g., +1 123-456-7890"
        />
      </div>
      <div>
        <label htmlFor="keywords" className="block text-sm font-medium text-slate-600 mb-2">
          Skills & Keywords (one per line)
        </label>
        <textarea 
          id="keywords" 
          value={keywords} 
          onChange={(e) => setKeywords(e.target.value)} 
          rows={8} 
          className={inputStyles}
          placeholder="Leadership
Web Development
Public Speaking"
        />
      </div>
    </div>
  );
};

export default InputForm;