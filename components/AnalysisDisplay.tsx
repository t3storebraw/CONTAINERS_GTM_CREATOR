
import React, { useState } from 'react';
import { CopyIcon } from './icons';

interface JsonOutputProps {
    title: string;
    json: string;
}

const JsonOutput: React.FC<JsonOutputProps> = ({ title, json }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(json);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex flex-col h-full">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-gray-300">{title}</h3>
                <button
                    onClick={handleCopy}
                    className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg text-sm transition-colors flex items-center gap-2"
                >
                    <CopyIcon />
                    {copied ? 'Copied!' : 'Copy JSON'}
                </button>
            </div>
            <textarea
                value={json}
                readOnly
                className="flex-grow w-full p-4 bg-gray-900/50 text-gray-300 border-2 border-gray-700 rounded-lg focus:outline-none h-96 resize-none font-mono text-xs"
            />
        </div>
    );
}

interface AnalysisDisplayProps {
  webJson: string;
  serverJson: string;
}

export const AnalysisDisplay: React.FC<AnalysisDisplayProps> = ({ webJson, serverJson }) => {
  return (
    <div className="mt-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-white">Generated Container Files</h2>
        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-8">
            Your container files are ready. Copy the content for each container and save it into a separate JSON file (e.g., <code className="bg-gray-700 text-sm p-1 rounded">web-container.json</code>). Then, import these files into your Google Tag Manager Web and Server workspaces.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webJson && <JsonOutput title="Web Container JSON" json={webJson} />}
            {serverJson && <JsonOutput title="Server Container JSON" json={serverJson} />}
        </div>
    </div>
  );
};
