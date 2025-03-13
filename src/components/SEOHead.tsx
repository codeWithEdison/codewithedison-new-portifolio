// SEOHead.tsx - A reusable SEO component for React
import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  canonicalUrl?: string;
  structuredData?: Record<string, unknown>;
}

const SEOHead: React.FC<SEOProps> = ({
  title = 'Edison Uwihanganye | CodeWithEdison - Fullstack Developer & AI Mentor',
  description = 'Expert Fullstack Developer and AI/Blockchain Enthusiast. Mentoring 500+ developers, creating innovative tech solutions in Web Development, Machine Learning, and Blockchain technologies.',
  keywords = [
    'Edison Uwihanganye',
    'code with Edison',
    'codewithedison',
    'Fullstack Developer',
    'Computer Scientist',
    'AI Enthusiast',
    'Blockchain Developer',
    'Web Development',
    'Machine Learning',
    'Software Engineering',
    'Tech Mentorship',
    'Rwanda Developer',
    'Next.js Developer',
    'React Developer',
    'TypeScript Expert',
    'kigali developers',
    'Rwanda developers community',
    'kigali tech community',
  ],
  ogImage = '/og-image.png',
  ogType = 'profile',
  twitterCard = 'summary_large_image',
  canonicalUrl = 'https://www.codewithedison.com',
  structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    'name': 'Edison Uwihanganye',
    'jobTitle': 'Fullstack Developer & AI/Blockchain Enthusiast',
    'worksFor': {
      '@type': 'Organization',
      'name': 'CodeWithEdison'
    },
    'alumni': {
      '@type': 'EducationalOrganization',
      'name': 'University of Rwanda'
    },
    'skills': [
      'Web Development',
      'React',
      'Next.js',
      'TypeScript',
      'Machine Learning',
      'Blockchain',
      'Solidity',
      'Node.js'
    ],
    'url': 'https://www.codewithedison.com',
    'sameAs': [
      'https://www.linkedin.com/in/uwihanganye-edison-7b2970236/',
      'https://github.com/codeWithEdison',
      'https://x.com/codewithedison'
    ]
  }
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content="Edison Uwihanganye" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="CodeWithEdison" />
      
      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@codewithedison" />
      <meta name="twitter:creator" content="@codewithedison" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Favicons */}
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;