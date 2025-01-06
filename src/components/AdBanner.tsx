import React, { useEffect, useState } from 'react';

export const AdBanner = () => {
  const [adError, setAdError] = useState<string | null>(null);

  useEffect(() => {
    // Wait for the adsense script to load
    const tryInitAd = () => {
      try {
        if (typeof window !== 'undefined' && window.adsbygoogle) {
          // @ts-ignore
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          console.log('AdSense initialized successfully');
        } else {
          console.log('Waiting for AdSense to load...');
          setTimeout(tryInitAd, 1000); // Retry after 1 second
        }
      } catch (err) {
        console.error('AdSense initialization error:', err);
        setAdError('Failed to load advertisement');
      }
    };

    tryInitAd();
  }, []);

  if (adError) {
    return null; // Don't show anything if there's an error
  }

  return (
    <div className="w-full max-w-[200px] mx-auto px-1 py-0.5 bg-transparent">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-1110021047603661"
        data-ad-slot="996-138-8471"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};