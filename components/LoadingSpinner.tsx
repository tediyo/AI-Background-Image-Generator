import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 animate-fade-in">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
      <h3 className="mt-6 text-xl font-semibold text-slate-700">Generating Your Background...</h3>
      <p className="text-slate-500 mt-2">The AI is crafting your professional banner. This may take a moment.</p>
    </div>
  );
};

export default LoadingSpinner;