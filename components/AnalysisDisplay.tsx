
import React from 'react';
import { DownloadIcon } from './icons';
import { GtmExport } from '../types';
import { ImplementationOverview } from './ImplementationOverview';


interface JsonOutputProps {
    title: string;
    json: string;
}

const JsonOutput: React.FC<JsonOutputProps> = ({ title, json }) => {
    const handleDownload = () => {
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        const fileName = title.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '.json';
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="flex flex-col h-full bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-gray-300">{title}</h3>
                <button
                    onClick={handleDownload}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg text-sm transition-colors flex items-center gap-2"
                    aria-label={`Download ${title} as a JSON file`}
                >
                    <DownloadIcon />
                    Download .json
                </button>
            </div>
            <textarea
                value={json}
                readOnly
                className="flex-grow w-full p-4 bg-gray-900/50 text-gray-300 border-2 border-gray-700 rounded-lg focus:outline-none h-96 resize-none font-mono text-xs"
                aria-label={`${title} content`}
            />
        </div>
    );
}

const ImportInstructions: React.FC = () => (
    <div className="text-left text-gray-400 max-w-3xl mx-auto mb-8 bg-gray-800/50 p-6 rounded-lg border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-4">How to Import Your Containers</h3>
        <ol className="list-decimal list-inside space-y-4">
            <li>Download both the <code className="bg-gray-700 text-sm p-1 rounded">web-container.json</code> and <code className="bg-gray-700 text-sm p-1 rounded">server-container.json</code> files.</li>
            <li>Go to your Google Tag Manager workspace and navigate to the <span className="font-semibold text-gray-300">Admin</span> section.</li>
            <li>Under the 'Container' column, select <span className="font-semibold text-gray-300">Import Container</span>.</li>
            <li>Click <span className="font-semibold text-gray-300">Choose container file</span> and upload one of the downloaded JSON files.</li>
            <li>Choose the workspace you want to import into (usually 'Default Workspace').</li>
            <li className="font-bold text-amber-200 bg-amber-900/30 p-3 rounded-md border-l-4 border-amber-400">
                <span className="font-extrabold block mb-1">CRITICAL STEP:</span> Select the <span className="underline">Merge</span> import option, and then choose <span className="underline">Overwrite conflicting tags, triggers, and variables</span>. This is crucial to avoid deleting your existing setup and ensures the new CAPI tags work correctly.
            </li>
            <li>Review the summary of changes in the preview screen and click <span className="font-semibold text-gray-300">Confirm</span>.</li>
            <li>Repeat steps 3-7 for the other container file in its corresponding GTM workspace (Web or Server).</li>
            <li>Once both containers are imported, click the <span className="font-semibold text-white bg-blue-600 py-1 px-2 rounded-md text-sm">Submit</span> button in the top-right corner of GTM to publish your changes and make them live.</li>
        </ol>
    </div>
);


interface AnalysisDisplayProps {
  webJson: string;
  serverJson: string;
  webContainer: GtmExport;
  serverContainer: GtmExport;
}

export const AnalysisDisplay: React.FC<AnalysisDisplayProps> = ({ webJson, serverJson, webContainer, serverContainer }) => {
  return (
    <div className="mt-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-white">Your Files Are Ready!</h2>
        <ImportInstructions />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webJson && <JsonOutput title="Web Container JSON" json={webJson} />}
            {serverJson && <JsonOutput title="Server Container JSON" json={serverJson} />}
        </div>
        <ImplementationOverview webContainer={webContainer} serverContainer={serverContainer} />
    </div>
  );
};
