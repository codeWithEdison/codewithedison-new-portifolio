
import React, { useEffect, useState } from 'react';

type Skill = {
  category: string;
  name: string;
  level: number;
};

const skills: Skill[] = [
  { category: "Frontend", name: "React", level: 95 },
  { category: "Frontend", name: "Next.js", level: 90 },
  { category: "Frontend", name: "TypeScript", level: 90 },
  { category: "Frontend", name: "CSS/Tailwind", level: 85 },
  
  { category: "Backend", name: "Node.js", level: 90 },
  { category: "Backend", name: "Python", level: 85 },
  { category: "Backend", name: "Java", level: 80 },
  { category: "Backend", name: "PostgreSQL", level: 85 },
  
  { category: "AI/ML", name: "TensorFlow", level: 80 },
  { category: "AI/ML", name: "PyTorch", level: 75 },
  { category: "AI/ML", name: "NLP", level: 70 },
  { category: "AI/ML", name: "Computer Vision", level: 65 },
  
  { category: "Blockchain", name: "Solidity", level: 80 },
  { category: "Blockchain", name: "Web3.js", level: 75 },
  { category: "Blockchain", name: "Smart Contracts", level: 85 },
  { category: "Blockchain", name: "DeFi Development", level: 70 },
];

const skillCategories = Array.from(new Set(skills.map(skill => skill.category)));

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0]);
  const [animatedSkills, setAnimatedSkills] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    // Reset animations when category changes
    setAnimatedSkills({});
    
    // Stagger the animations
    const newAnimatedSkills: { [key: string]: boolean } = {};
    const filteredSkills = skills.filter(skill => skill.category === activeCategory);
    
    filteredSkills.forEach((skill, index) => {
      setTimeout(() => {
        setAnimatedSkills(prev => ({
          ...prev,
          [skill.name]: true
        }));
      }, index * 100);
    });
    
  }, [activeCategory]);

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-blue-600 dark:text-blue-400 font-medium mb-3">Skills</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">Technical Proficiencies</h3>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              My expertise spans multiple domains, from full stack development to specialized fields like AI/ML and blockchain.
            </p>
          </div>
        </div>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-md dark:bg-blue-500"
                  : "bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Skills Display */}
        <div className="max-w-4xl mx-auto">
          {skills
            .filter(skill => skill.category === activeCategory)
            .map((skill) => (
              <div key={skill.name} className="mb-6">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</h4>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-violet-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: animatedSkills[skill.name] ? `${skill.level}%` : '0%'
                    }}
                  ></div>
                </div>
              </div>
            ))}
        </div>
        
        {/* Tech Stack Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-10 dark:text-white">Tech Stack</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Frontend */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md dark:shadow-gray-900/30">
              <h4 className="font-bold mb-4 text-blue-600 dark:text-blue-400">Frontend</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span className="dark:text-gray-300">React/Next.js</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span className="dark:text-gray-300">TypeScript</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span className="dark:text-gray-300">Tailwind CSS</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span className="dark:text-gray-300">Framer Motion</span>
                </li>
              </ul>
            </div>
            
            {/* Backend */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md dark:shadow-gray-900/30">
              <h4 className="font-bold mb-4 text-blue-600 dark:text-blue-400">Backend</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span className="dark:text-gray-300">Node.js/Express</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span className="dark:text-gray-300">Python/Django</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span className="dark:text-gray-300">PostgreSQL/MongoDB</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span className="dark:text-gray-300">GraphQL/REST APIs</span>
                </li>
              </ul>
            </div>
            
            {/* AI/ML */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md dark:shadow-gray-900/30">
              <h4 className="font-bold mb-4 text-blue-600 dark:text-blue-400">AI/ML</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span className="dark:text-gray-300">TensorFlow/PyTorch</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span className="dark:text-gray-300">Natural Language Processing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span className="dark:text-gray-300">Computer Vision</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span className="dark:text-gray-300">Machine Learning Ops</span>
                </li>
              </ul>
            </div>
            
            {/* Blockchain */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md dark:shadow-gray-900/30">
              <h4 className="font-bold mb-4 text-blue-600 dark:text-blue-400">Blockchain</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span className="dark:text-gray-300">Solidity/Smart Contracts</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span className="dark:text-gray-300">Ethereum/Web3.js</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span className="dark:text-gray-300">DeFi Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span className="dark:text-gray-300">Tokenomics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
