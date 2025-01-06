import React from 'react';
import AdSense from 'react-adsense';

export const AdBanner = () => {
  return (
    <div className="w-full max-w-xs mx-auto px-2 py-1 bg-transparent">
      <AdSense.Google
        client="ca-pub-1110021047603661"
        slot="996-138-8471"
        style={{ display: 'block' }}
        format="auto"
        responsive="true"
      />
    </div>
  );
};