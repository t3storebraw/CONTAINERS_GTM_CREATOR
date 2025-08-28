
import React from 'react';
import { QuestionMarkCircleIcon } from './icons';

interface JsonInputProps {
  title: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  helpText: string;
  error?: string;
  tooltipText: string;
}

export const JsonInput: React.FC<JsonInputProps> = ({ title, value, onChange, placeholder, helpText, error, tooltipText }) => (
  <div>
    <div className="flex items-center mb-2">
      <label htmlFor={title} className="block text-lg font-semibold text-gray-300">{title}</label>
      <div className="relative group ml-2">
        <QuestionMarkCircleIcon />
        <span 
          role="tooltip"
          className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 p-3 bg-gray-700 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 shadow-lg pointer-events-none text-center"
        >
          {tooltipText}
        </span>
      </div>
    </div>
    <input
      id={title}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full p-3 bg-gray-700/50 text-gray-300 border-2 rounded-lg focus:outline-none focus:ring-2 transition-colors font-mono text-sm ${error ? 'border-red-500 ring-red-500' : 'border-gray-600 focus:border-indigo-500 focus:ring-indigo-500'}`}
      aria-invalid={!!error}
      aria-describedby={error ? `${title}-error` : `${title}-help`}
    />
    {error ? (
        <p id={`${title}-error`} className="text-sm text-red-400 mt-2">{error}</p>
    ) : (
        <p id={`${title}-help`} className="text-sm text-gray-400 mt-2">{helpText}</p>
    )}
  </div>
);
