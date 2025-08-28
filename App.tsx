
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
  const [webContainer, setWebContainer] = useState<GtmExport | null>(null);
  const [serverContainer, setServerContainer] = useState<GtmExport | null>(null);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleGenerate = () => {
    setErrors({});
    let validationErrors: Record<string, string> = {};

    if (!metaPixelId) validationErrors.metaPixelId = 'Meta Pixel ID is required.';
    else if (!/^\d{15,16}$/.test(metaPixelId)) validationErrors.metaPixelId = 'Invalid Meta Pixel ID. It should be 15-16 digits long.';

    if (!serverContainerUrl) validationErrors.serverContainerUrl = 'GTM Server Container URL is required.';
    else {
      try {
        const url = new URL(serverContainerUrl);
        if (url.protocol !== 'https:') {
          validationErrors.serverContainerUrl = 'URL must use HTTPS.';
        }
        if (url.pathname !== '/' && url.pathname !== '') {
          validationErrors.serverContainerUrl = 'URL should not contain a path (e.g., /analytics).';
        }
      } catch (_) {
        validationErrors.serverContainerUrl = 'Please enter a valid URL.';
      }
    }

    if (!metaApiToken) validationErrors.metaApiToken = 'Meta API Access Token is required.';
    else if (!metaApiToken.startsWith('EAA')) validationErrors.metaApiToken = 'Invalid token format. It should start with "EAA...".';


    if (!fbTestId) validationErrors.fbTestId = 'Facebook Test ID is required.';
    else if (!fbTestId.startsWith('TEST')) validationErrors.fbTestId = 'For safety, the Test ID should start with "TEST".';


    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setGeneratedWebJson('');
      setGeneratedServerJson('');
      setWebContainer(null);
      setServerContainer(null);
      return;
    }

    try {
      // --- Web Container ---
      const webContainerData: GtmExport = JSON.parse(PRESET_WEB_JSON);
      const webPixelIdVar = webContainerData.containerVersion.variable?.find(v => v.name === 'const - meta pixel id');
      if (webPixelIdVar) webPixelIdVar.parameter[0].value = metaPixelId;

      const serverUrlVar = webContainerData.containerVersion.variable?.find(v => v.name === 'const - server_container_url');
      if (serverUrlVar) serverUrlVar.parameter[0].value = serverContainerUrl;
      setGeneratedWebJson(JSON.stringify(webContainerData, null, 2));
      setWebContainer(webContainerData);


      // --- Server Container ---
      const serverContainerData: GtmExport = JSON.parse(PRESET_SERVER_JSON);
      const serverPixelIdVar = serverContainerData.containerVersion.variable?.find(v => v.name === 'const - meta pixel id');
      if (serverPixelIdVar) serverPixelIdVar.parameter[0].value = metaPixelId;

      const apiTokenVar = serverContainerData.containerVersion.variable?.find(v => v.name === 'const - meta api token');
      if (apiTokenVar) apiTokenVar.parameter[0].value = metaApiToken;
      
      const testIdVar = serverContainerData.containerVersion.variable?.find(v => v.name === 'LT - Map | Debug Mode --> FB Test ID');
      if (testIdVar && testIdVar.parameter?.[1]?.list?.[0]?.map?.[1]) {
         testIdVar.parameter[1].list[0].map[1].value = fbTestId;
      }
      setGeneratedServerJson(JSON.stringify(serverContainerData, null, 2));
      setServerContainer(serverContainerData);

    } catch (e) {
      if (e instanceof Error) {
        setErrors({ general: `Failed to generate files: ${e.message}. Check if the preset JSON is valid.` });
      } else {
        setErrors({ general: 'An unknown error occurred during generation.' });
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
            <JsonInput title="Meta Pixel ID" value={metaPixelId} onChange={e => setMetaPixelId(e.target.value)} placeholder="e.g., 1234567890123456" helpText="Used in both Web & Server containers." error={errors.metaPixelId} tooltipText="You can find your 15 or 16-digit Pixel ID in the Facebook Events Manager under Data Sources." />
            <JsonInput title="GTM Server Container URL" value={serverContainerUrl} onChange={e => setServerContainerUrl(e.target.value)} placeholder="e.g., https://gtm.yourdomain.com" helpText="The URL for your server-side tagging endpoint." error={errors.serverContainerUrl} tooltipText="This is the URL of your tagging server, configured in your Google Cloud Platform or Stape.io account."/>
            <JsonInput title="Meta API Access Token" value={metaApiToken} onChange={e => setMetaApiToken(e.target.value)} placeholder="e.g., EAA..." helpText="Generated in Facebook Events Manager for the Conversions API." error={errors.metaApiToken} tooltipText="Generate this token in Events Manager > Settings > Conversions API. It's required for server-to-server communication."/>
            <JsonInput title="Facebook Test ID" value={fbTestId} onChange={e => setFbTestId(e.target.value)} placeholder="e.g., TEST12345" helpText="Found in the 'Test Events' tab in Facebook Events Manager." error={errors.fbTestId} tooltipText="Use this to test your CAPI setup without affecting your production data. Find it in Events Manager > Test Events."/>
          </div>
           <div className="text-center mt-8">
            <button
              onClick={handleGenerate}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 w-full sm:w-auto focus:outline-none focus:ring-4 focus:ring-indigo-500/50"
              aria-label="Generate Google Tag Manager files"
            >
              Generate GTM Files
            </button>
          </div>
        </div>
        
        {errors.general && <div className="text-center bg-red-900/50 text-red-300 p-4 rounded-lg my-6 max-w-2xl mx-auto">{errors.general}</div>}
        
        {generatedWebJson && generatedServerJson && webContainer && serverContainer && (
          <AnalysisDisplay 
            webJson={generatedWebJson} 
            serverJson={generatedServerJson} 
            webContainer={webContainer}
            serverContainer={serverContainer}
          />
        )}
      </main>
    </div>
  );
};

export default App;
