import React from 'react';

interface GenerateButtonProps {
  onClick: () => void;
  isLoading: boolean;
}

const GenerateButton: React.FC<GenerateButtonProps> = ({ onClick, isLoading }) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className="w-full px-10 py-4 bg-blue-600 text-white text-xl font-bold rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-500 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-md"
    >
      {isLoading ? 'Generating...' : '✨ Generate Background'}
    </button>
  );
};

export default GenerateButton;