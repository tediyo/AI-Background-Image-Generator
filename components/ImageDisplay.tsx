import React from 'react';

interface ImageDisplayProps {
  imageData: string;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageData }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageData;
    link.download = 'linkedin-background.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-3xl animate-fade-in">
      <h2 className="text-2xl font-semibold text-gray-200 mb-4">Your Generated Background</h2>
      <div className="w-full aspect-[16/9] bg-gray-900 rounded-lg shadow-2xl overflow-hidden border-2 border-gray-700">
        <img src={imageData} alt="Generated LinkedIn Background" className="w-full h-full object-cover" />
      </div>
      <button
        onClick={handleDownload}
        className="mt-6 px-8 py-3 bg-orange-600 text-white font-semibold rounded-full shadow-lg hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-orange-500 transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        Download Image
      </button>
    </div>
  );
};

export default ImageDisplay;