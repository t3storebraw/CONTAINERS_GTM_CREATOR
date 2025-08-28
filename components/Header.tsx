
import React from 'react';

export const Header: React.FC = () => (
  <header className="bg-gray-900/50 backdrop-blur-sm shadow-lg sticky top-0 z-10">
    <div className="container mx-auto px-4 py-4">
      <h1 className="text-3xl font-bold text-center text-white">
        <span className="text-indigo-400">GTM</span> CAPI Assistant
      </h1>
      <p className="text-center text-indigo-300 text-sm">AI-Powered Facebook CAPI Implementation Analyzer</p>
    </div>
  </header>
);
