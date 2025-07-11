import React from 'react';

const StructuredData: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Lexipath",
    "alternateName": "Lexipath: Your Path to Better Vocabulary",
    "description": "Lexipath: your path to better vocabulary. Revolutionary AI-powered vocabulary learning app with 7 proven exercises and spaced repetition.",
    "slogan": "Your path to better vocabulary",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web, iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "ComingSoon"
    },
    "author": {
      "@type": "Organization",
      "name": "Lexipath",
      "slogan": "Your path to better vocabulary",
      "url": "https://lexipath.xyz"
    },
    "keywords": "Lexipath, vocabulary learning, Smart word groups, Smart word lists, Custom lists, language app, AI vocabulary, better vocabulary, vocabulary path, spaced repetition, vocabulary building",
  };

  React.useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default StructuredData;