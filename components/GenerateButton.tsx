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
      className="w-full px-10 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xl font-bold rounded-full shadow-lg hover:shadow-yellow-500/30 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-yellow-500 transition-all duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 disabled:shadow-none"
    >
      {isLoading ? 'Generating...' : '✨ Generate Background'}
    </button>
  );
};

export default GenerateButton;