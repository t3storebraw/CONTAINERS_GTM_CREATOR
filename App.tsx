
import React, { useState } from 'react';
import { Header } from './components/Header';
import { JsonInput } from './components/JsonInput';
import { AnalysisDisplay } from './components/AnalysisDisplay';
import { GtmExport } from './types';
import { PRESET_WEB_JSON, PRESET_SERVER_JSON } from './constants';

const App: React.FC = () => {
  const [metaPixelId, setMetaPixelId] = useState('');
  const [serverContainerUrl, setServerContainerUrl] = useState('');
  const [metaApiToken, setMetaApiToken] = useState('');
  const [fbTestId, setFbTestId] = useState('');

  const [generatedWebJson, setGeneratedWebJson] = useState<string>('');
  const [generatedServerJson, setGeneratedServerJson] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleGenerate = () => {
    setError('');
    setGeneratedWebJson('');
    setGeneratedServerJson('');

    if (!metaPixelId || !serverContainerUrl || !metaApiToken || !fbTestId) {
      setError('Please fill in all the required fields.');
      return;
    }

    try {
      // --- Web Container ---
      const webContainer: GtmExport = JSON.parse(PRESET_WEB_JSON);
      const webPixelIdVar = webContainer.containerVersion.variable?.find(v => v.name === 'const - meta pixel id');
      if (webPixelIdVar) webPixelIdVar.parameter[0].value = metaPixelId;

      const serverUrlVar = webContainer.containerVersion.variable?.find(v => v.name === 'const - server_container_url');
      if (serverUrlVar) serverUrlVar.parameter[0].value = serverContainerUrl;
      setGeneratedWebJson(JSON.stringify(webContainer, null, 2));

      // --- Server Container ---
      const serverContainer: GtmExport = JSON.parse(PRESET_SERVER_JSON);
      const serverPixelIdVar = serverContainer.containerVersion.variable?.find(v => v.name === 'const - meta pixel id');
      if (serverPixelIdVar) serverPixelIdVar.parameter[0].value = metaPixelId;

      const apiTokenVar = serverContainer.containerVersion.variable?.find(v => v.name === 'const - meta api token');
      if (apiTokenVar) apiTokenVar.parameter[0].value = metaApiToken;
      
      const testIdVar = serverContainer.containerVersion.variable?.find(v => v.name === 'LT - Map | Debug Mode --> FB Test ID');
      if (testIdVar && testIdVar.parameter?.[1]?.list?.[0]?.map?.[1]) {
         testIdVar.parameter[1].list[0].map[1].value = fbTestId;
      }
      setGeneratedServerJson(JSON.stringify(serverContainer, null, 2));

    } catch (e) {
      if (e instanceof Error) {
        setError(`Failed to generate files: ${e.message}. Check if the preset JSON is valid.`);
      } else {
        setError('An unknown error occurred during generation.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-8">
          Enter your Facebook & GTM details below to generate ready-to-import container files for a complete CAPI implementation.
        </p>

        <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg border border-gray-700 shadow-xl">
          <div className="space-y-6">
            <JsonInput title="Meta Pixel ID" value={metaPixelId} onChange={e => setMetaPixelId(e.target.value)} placeholder="e.g., 123456789012345" helpText="Used in both Web & Server containers." />
            <JsonInput title="GTM Server Container URL" value={serverContainerUrl} onChange={e => setServerContainerUrl(e.target.value)} placeholder="e.g., https://gtm.yourdomain.com" helpText="The URL for your server-side tagging endpoint." />
            <JsonInput title="Meta API Access Token" value={metaApiToken} onChange={e => setMetaApiToken(e.target.value)} placeholder="e.g., EAA..." helpText="Generated in Facebook Events Manager for the Conversions API." />
            <JsonInput title="Facebook Test ID" value={fbTestId} onChange={e => setFbTestId(e.target.value)} placeholder="e.g., TEST12345" helpText="Found in the 'Test Events' tab in Facebook Events Manager." />
          </div>
           <div className="text-center mt-8">
            <button
              onClick={handleGenerate}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 w-full sm:w-auto"
            >
              Generate GTM Files
            </button>
          </div>
        </div>
        
        {error && <div className="text-center bg-red-900/50 text-red-300 p-4 rounded-lg my-6 max-w-2xl mx-auto">{error}</div>}
        
        {(generatedWebJson || generatedServerJson) && (
          <AnalysisDisplay 
            webJson={generatedWebJson} 
            serverJson={generatedServerJson} 
          />
        )}
      </main>
    </div>
  );
};

export default App;
