import React, { useEffect } from 'react';

export const AdBanner = () => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log('AdSense error:', err);
    }
  }, []);

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