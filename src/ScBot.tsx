import React from 'react';

function ScBot() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">Script Bot</h1>
      <div className="w-full max-w-4xl h-[600px] border-2 border-indigo-500 rounded-xl overflow-hidden">
        <iframe
          src="/sc/sc.html" // file di public/sc/sc.html
          className="w-full h-full"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
}

export default ScBot;
