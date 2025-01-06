import React from 'react';
import AdSense from 'react-adsense';

export const AdBanner = () => {
  return (
    <div className="w-full max-w-[200px] mx-auto px-1 py-0.5 bg-transparent">
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