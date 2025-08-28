
import React from 'react';

interface JsonInputProps {
  title: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  helpText: string;
}

export const JsonInput: React.FC<JsonInputProps> = ({ title, value, onChange, placeholder, helpText }) => (
  <div>
    <label className="block text-lg font-semibold text-gray-300 mb-2">{title}</label>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full p-3 bg-gray-700/50 text-gray-300 border-2 border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors font-mono text-sm"
    />
    <p className="text-sm text-gray-400 mt-2">{helpText}</p>
  </div>
);
