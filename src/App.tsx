import { useState, useEffect } from 'react';

function App() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'LeadMark.AI';

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 150);

    return () => clearInterval(intervalId);
  }, []);

  const renderText = () => {
    const leadMarkText = displayedText.slice(0, 8);
    const aiText = displayedText.slice(8);

    return (
      <>
        <span className="text-black">{leadMarkText}</span>
        <span className="text-yellow-500">{aiText}</span>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-4xl w-full text-center space-y-24">
        <div className="space-y-2">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight min-h-[4rem] md:min-h-[6rem]">
            {renderText()}
            {displayedText.length < fullText.length && (
              <span className="animate-pulse">|</span>
            )}
          </h1>

          {displayedText.length === fullText.length && (
            <p className="text-xl md:text-2xl text-black font-light max-w-2xl mx-auto animate-fade-in">
              Leaders in Transformation with Automation
            </p>
          )}
        </div>

        {displayedText.length === fullText.length && (
          <div className="flex justify-center animate-fade-in">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-yellow-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <button className="relative px-10 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-lg font-semibold rounded-full shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105">
                Launching Soon
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
