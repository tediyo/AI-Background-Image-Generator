import React, { useState, useCallback } from 'react';
import { generateLinkedInBackground } from './services/geminiService';
import Header from './components/Header';
import ImageDisplay from './components/ImageDisplay';
import LoadingSpinner from './components/LoadingSpinner';
import GenerateButton from './components/GenerateButton';
import InputForm from './components/InputForm';

const App: React.FC = () => {
  const [name, setName] = useState<string>('Alemnew Shumye');
  const [contactInfo, setContactInfo] = useState<string>('+251 91 834 0358');
  const [keywords, setKeywords] = useState<string>([
    "Education and Training",
    "Leadership and Management",
    "Vocational Training",
    "Skills Development",
    "Public–Private partnerships",
    "VGCS Service",
    "Quality and Relevance",
    "Cooperative Training",
    "Apprenticeship",
    "TVET Policy and Strategy",
    "Job Fairs",
    "Consulting"
  ].join('\n'));
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [imageData, setImageData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setImageData(null);
    try {
      const keywordsArray = keywords.split('\n').map(k => k.trim()).filter(k => k);
      if (!name || !contactInfo || keywordsArray.length === 0) {
        throw new Error("Please fill in all fields before generating.");
      }
      const generatedImage = await generateLinkedInBackground(name, contactInfo, keywordsArray);
      setImageData(generatedImage);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'An unexpected error occurred. Please check the console.');
    } finally {
      setIsLoading(false);
    }
  }, [name, contactInfo, keywords]);

  return (
    <div className="min-h-screen bg-gray-100 text-slate-800 flex flex-col items-center p-4 sm:p-6 md:p-8 font-sans">
      <div className="w-full max-w-6xl mx-auto">
        <Header />
        <p className="mt-4 text-center text-lg text-slate-500 max-w-3xl mx-auto">
          Create a bespoke, professional LinkedIn background. Just enter your details, and let our AI design the perfect banner for you.
        </p>

        <main className="mt-12 w-full grid md:grid-cols-2 md:gap-12 items-start">
          <div className="flex flex-col gap-8 bg-white p-8 rounded-xl shadow-md">
            <InputForm
              name={name}
              setName={setName}
              contactInfo={contactInfo}
              setContactInfo={setContactInfo}
              keywords={keywords}
              setKeywords={setKeywords}
            />
            <GenerateButton onClick={handleGenerate} isLoading={isLoading} />
          </div>

          <div className="mt-8 md:mt-0 flex flex-col items-center justify-center min-h-[400px] bg-white p-8 rounded-xl shadow-md">
            {isLoading && <LoadingSpinner />}
            
            {error && !isLoading && (
              <div className="w-full p-4 bg-red-100 border border-red-400 text-red-800 rounded-lg text-center">
                <p className="font-bold text-lg">Generation Failed</p>
                <p className="mt-1">{error}</p>
              </div>
            )}

            {imageData && !isLoading && <ImageDisplay imageData={imageData} />}
            
            {!isLoading && !imageData && !error && (
               <div className="text-center text-slate-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  <p className="mt-4 text-lg">Your generated background will appear here.</p>
               </div>
            )}
          </div>
        </main>
        
        <footer className="mt-12 text-center text-slate-500 text-sm">
          <p>Powered by the Google Gemini API. Image generation can take a few moments.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;