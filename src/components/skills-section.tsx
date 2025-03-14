
import React, { useEffect, useState } from 'react';
import { Progress } from './ui/progress';
import { GlassCard } from './ui/glassmorphism';
import { motion } from 'framer-motion';

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

// Skill level descriptors
const getLevelDescription = (level: number): string => {
  if (level >= 90) return "Expert";
  if (level >= 80) return "Advanced";
  if (level >= 70) return "Proficient";
  if (level >= 60) return "Intermediate";
  return "Familiar";
};

// Get color for skill level
const getSkillColor = (level: number): string => {
  if (level >= 90) return "from-indigo-500 to-violet-600";
  if (level >= 80) return "from-blue-500 to-indigo-500";
  if (level >= 70) return "from-cyan-500 to-blue-500";
  if (level >= 60) return "from-emerald-500 to-teal-500";
  return "from-amber-500 to-orange-500";
};

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
      }, index * 150);
    });
    
  }, [activeCategory]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

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
        
        {/* Category Tabs - Modernized */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {skillCategories.map((category) => (
            <button
              key={category}
              className={`px-5 py-2.5 rounded-xl transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/20 dark:shadow-blue-800/30 scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-100 hover:scale-105 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              <span className="font-medium">{category}</span>
            </button>
          ))}
        </div>
        
        {/* Skills Display - Enhanced with Glass Cards */}
        <motion.div 
          className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skills
            .filter(skill => skill.category === activeCategory)
            .map((skill) => (
              <motion.div key={skill.name} variants={itemVariants}>
                <GlassCard className="p-6 dark:bg-gray-800/60 dark:border-gray-700/50 h-full">
                  <div className="mb-2">
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-lg">{skill.name}</h4>
                      <span className={`text-sm font-medium px-2.5 py-0.5 rounded bg-gradient-to-r ${getSkillColor(skill.level)} text-white`}>
                        {getLevelDescription(skill.level)}
                      </span>
                    </div>
                    <div className="mt-4 mb-2">
                      <Progress
                        value={animatedSkills[skill.name] ? skill.level : 0}
                        className="h-2 bg-gray-200 dark:bg-gray-700"
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                      <span>Beginner</span>
                      <span>Advanced</span>
                      <span>Expert</span>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
        </motion.div>
        
        {/* Tech Stack Section - Modernized with hexagon-like shapes */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-center mb-12 dark:text-white">Technology Ecosystem</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Frontend */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-lg h-full z-10">
                <h4 className="font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Frontend</h4>
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
            </div>
            
            {/* Backend */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-lg h-full z-10">
                <h4 className="font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Backend</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                    <span className="dark:text-gray-300">Node.js/Express</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                    <span className="dark:text-gray-300">Python/Django</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                    <span className="dark:text-gray-300">PostgreSQL/MongoDB</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                    <span className="dark:text-gray-300">GraphQL/REST APIs</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* AI/ML */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-lg h-full z-10">
                <h4 className="font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">AI/ML</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    <span className="dark:text-gray-300">TensorFlow/PyTorch</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    <span className="dark:text-gray-300">Natural Language Processing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    <span className="dark:text-gray-300">Computer Vision</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    <span className="dark:text-gray-300">Machine Learning Ops</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Blockchain */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-lg h-full z-10">
                <h4 className="font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600 dark:from-pink-400 dark:to-rose-400">Blockchain</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                    <span className="dark:text-gray-300">Solidity/Smart Contracts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                    <span className="dark:text-gray-300">Ethereum/Web3.js</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                    <span className="dark:text-gray-300">DeFi Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                    <span className="dark:text-gray-300">Tokenomics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
