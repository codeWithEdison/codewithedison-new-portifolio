
import React, { useEffect, useState } from 'react';
import { GlassCard } from './ui/glassmorphism';
import { motion, AnimatePresence } from 'framer-motion';

type Skill = {
  category: string;
  name: string;
  level: number;
  icon: string;
  color: string;
};

const skills: Skill[] = [
  { category: "Frontend", name: "React", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
  { category: "Frontend", name: "Next.js", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "#000000" },
  { category: "Frontend", name: "TypeScript", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6" },
  { category: "Frontend", name: "Tailwind CSS", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", color: "#06B6D4" },
  
  { category: "Backend", name: "Node.js", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933" },
  { category: "Backend", name: "Python", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "#3776AB" },
  { category: "Backend", name: "Java", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", color: "#007396" },
  { category: "Backend", name: "PostgreSQL", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "#336791" },
  
  { category: "AI/ML", name: "TensorFlow", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", color: "#FF6F00" },
  { category: "AI/ML", name: "PyTorch", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", color: "#EE4C2C" },
  { category: "AI/ML", name: "NLP", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", color: "#013243" },
  { category: "AI/ML", name: "Computer Vision", level: 65, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg", color: "#5C3EE8" },
  
  { category: "Blockchain", name: "Solidity", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg", color: "#363636" },
  { category: "Blockchain", name: "Web3.js", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
  { category: "Blockchain", name: "Smart Contracts", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ethereum/ethereum-original.svg", color: "#3C3C3D" },
  { category: "Blockchain", name: "DeFi Development", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitcoin/bitcoin-original.svg", color: "#F7931A" },
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

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0]);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

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
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
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
        
        {/* Skills Display with Icons */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -10 }}
          >
            {skills
              .filter(skill => skill.category === activeCategory)
              .map((skill) => (
                <motion.div 
                  key={skill.name} 
                  variants={itemVariants}
                  whileHover="hover"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <GlassCard className={`p-6 dark:bg-gray-800/60 dark:border-gray-700/50 h-full relative overflow-hidden group transition-all duration-300 hover:shadow-lg ${
                    hoveredSkill === skill.name ? 'ring-2 ring-opacity-50' : ''
                  }`}
                  style={{
                    boxShadow: hoveredSkill === skill.name ? `0 10px 25px -5px ${skill.color}33` : '',
                    // Removed ringColor property here
                  }}>
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-violet-400 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                        <img 
                          src={skill.icon} 
                          alt={skill.name} 
                          className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-lg mb-2">{skill.name}</h4>
                      <span className={`text-sm font-medium px-2.5 py-0.5 rounded bg-gradient-to-r from-blue-500 to-violet-500 text-white`}>
                        {getLevelDescription(skill.level)}
                      </span>
                      
                      <div className="w-full mt-4">
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                          <motion.div 
                            className="h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                          ></motion.div>
                        </div>
                      </div>
                      
                      <motion.div 
                        className="mt-3 text-sm text-gray-600 dark:text-gray-400 absolute bottom-0 left-0 right-0 bg-white/90 dark:bg-gray-800/90 p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                        initial={{ opacity: 0 }}
                        animate={hoveredSkill === skill.name ? { opacity: 1 } : { opacity: 0 }}
                      >
                        Experience with {skill.name} for {Math.floor(skill.level / 10)} years
                      </motion.div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>
        
        {/* Interactive Skill Spotlight */}
        <motion.div 
          className="max-w-4xl mx-auto mt-16 p-8 rounded-xl bg-white dark:bg-gray-800/80 shadow-xl dark:shadow-blue-900/5 border border-gray-100 dark:border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <h4 className="text-xl font-bold dark:text-white">Expertise Breakdown</h4>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Hover over categories to see detailed experience</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {skillCategories.map((category) => {
              const categorySkills = skills.filter(skill => skill.category === category);
              const averageSkillLevel = Math.round(
                categorySkills.reduce((acc, curr) => acc + curr.level, 0) / categorySkills.length
              );
              
              return (
                <motion.div
                  key={category}
                  className="relative group cursor-pointer"
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="p-5 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-600 transition-all duration-300 h-full flex flex-col items-center justify-center text-center">
                    <h5 className="font-bold text-gray-800 dark:text-white mb-3">{category}</h5>
                    <div className="w-24 h-24 relative mb-4">
                      <div className="absolute inset-0 rounded-full bg-blue-100 dark:bg-blue-900/30"></div>
                      <svg className="w-full h-full" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#E5E7EB"
                          strokeWidth="3"
                          strokeDasharray="100, 100"
                          className="dark:stroke-gray-600"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="url(#gradient)"
                          strokeWidth="3"
                          strokeDasharray={`${averageSkillLevel}, 100`}
                          className="drop-shadow-md"
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3B82F6" />
                            <stop offset="100%" stopColor="#8B5CF6" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xl font-bold text-blue-600 dark:text-blue-400">{averageSkillLevel}%</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{categorySkills.length} technologies</p>
                    
                    {/* Hover details */}
                    <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center z-10">
                      <h5 className="font-bold text-gray-800 dark:text-white mb-2">{category} Stack</h5>
                      <ul className="text-sm space-y-1 text-left">
                        {categorySkills.slice(0, 4).map((skill) => (
                          <li key={skill.name} className="flex items-center gap-2">
                            <img src={skill.icon} alt={skill.name} className="w-4 h-4" />
                            <span className="dark:text-gray-300">{skill.name}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-xs text-blue-600 dark:text-blue-400 mt-2 font-medium">
                        {getLevelDescription(averageSkillLevel)} Level
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
