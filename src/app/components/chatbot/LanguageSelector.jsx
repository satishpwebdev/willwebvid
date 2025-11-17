import { useState } from 'react';
import Avatar from './Avatar';

const LanguageSelector = ({ onSelect }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  
  const handleSelect = (language) => {
    setSelectedLanguage(language);
    onSelect(language);
  };
  
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center mb-3">
        <Avatar size="tiny" />
        <p className="ml-2 text-gray-700 font-medium">
          Please select a language for today's conversation.
        </p>
      </div>
      
      <div className="flex gap-2 mt-2">
        <button
          onClick={() => handleSelect('English')}
          disabled={selectedLanguage !== null}
          className={`px-4 py-2 rounded-full border transition-all focus:outline-none focus:ring-2 focus:ring-willo-primary ${
            selectedLanguage === 'English'
              ? 'bg-willo-primary text-white border-transparent'
              : 'bg-white text-gray-700 border-gray-300 hover:border-willo-primary'
          }`}
        >
          English
        </button>
        
        <button
          onClick={() => handleSelect('Hindi')}
          disabled={selectedLanguage !== null}
          className={`px-4 py-2 rounded-full border transition-all focus:outline-none focus:ring-2 focus:ring-willo-primary ${
            selectedLanguage === 'Hindi'
              ? 'bg-willo-primary text-white border-transparent'
              : 'bg-white text-gray-700 border-gray-300 hover:border-willo-primary'
          }`}
        >
          Hindi
        </button>
      </div>
    </div>
  );
};

export default LanguageSelector;