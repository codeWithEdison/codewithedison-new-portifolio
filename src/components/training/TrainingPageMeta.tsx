// src/components/TrainingPageMeta.tsx
import { Helmet } from 'react-helmet-async'; // or 'react-helmet' if you're using that

const TrainingPageMeta = () => {
  return (
    <Helmet>
      <title>Web Development Training Program | CodeWithEdison - 3-Month Fullstack Bootcamp</title>
      <meta 
        name="description" 
        content="Join Edison's comprehensive 3-month Fullstack Web Development program. Learn HTML, CSS, JavaScript, React, Node.js and more through hands-on projects and personalized mentoring." 
      />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.codewithedison.com/training" />
      <meta property="og:title" content="Web Development Training Program | CodeWithEdison - 3-Month Fullstack Bootcamp" />
      <meta 
        property="og:description" 
        content="Transform your coding skills with Edison's 3-month Fullstack Web Development program. Perfect for beginners to intermediate developers looking to level up." 
      />
      <meta property="og:image" content="/training-og-image.png" /> {/* You'll need to create this image */}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@codewithedison" />
      <meta name="twitter:title" content="Web Development Training Program | CodeWithEdison - 3-Month Fullstack Bootcamp" />
      <meta 
        name="twitter:description" 
        content="Transform your coding skills with Edison's 3-month Fullstack Web Development program. Perfect for beginners to intermediate developers looking to level up." 
      />
      <meta name="twitter:image" content="/training-og-image.png" />
      
      {/* Structured Data for Course */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "Fullstack Web Development Program",
          "description": "A comprehensive 3-month program covering HTML, CSS, JavaScript, React, Node.js and more through hands-on projects",
          "provider": {
            "@type": "Organization",
            "name": "CodeWithEdison",
            "sameAs": "https://www.codewithedison.com"
          },
          "timeRequired": "P3M", // ISO 8601 duration format - 3 months
          "educationalLevel": "Beginner to Intermediate",
          "teaches": [
            "HTML", "CSS", "JavaScript", "TypeScript", "React", 
            "Node.js", "Express", "Databases", "Authentication", "Deployment"
          ],
          "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": ["onsite", "online"],
            "location": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kigali",
                "addressCountry": "Rwanda"
              }
            },
            "price": "600000",
            "priceCurrency": "RWF"
          }
        })}
      </script>
    </Helmet>
  );
};

export default TrainingPageMeta;