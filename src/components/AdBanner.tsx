import React from 'react';
import AdSense from 'react-adsense';

export const AdBanner = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-2 bg-transparent">
      <AdSense.Google
        client="ca-pub-XXXXXXXXXXXXXXXX" // Replace with your AdSense publisher ID
        slot="XXXXXXXXXX" // Replace with your ad unit ID
        style={{ display: 'block' }}
        format="auto"
        responsive="true"
      />
    </div>
  );
};