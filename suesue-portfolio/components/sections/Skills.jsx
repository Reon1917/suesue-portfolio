"use client";

import { motion } from "framer-motion";
import { Badge } from "../ui/badge";

const skillsData = {
  languages: [
    "Python", "Java", "C", "C++", "JavaScript", "TypeScript", "MySQL", 
    "PostgreSQL", "HTML/CSS"
  ],
  frameworks: [
    "React", "Node.js", "Next.js", "FastAPI", "Prisma", "SQLAlchemy", 
    "Express", "MongoDB", "PyTorch", "TensorFlow"
  ],
  tools: [
    "Git", "GitHub", "VS Code", "PyCharm", "Eclipse", "Docker", 
    "Dbeaver", "Postman", "Supabase", "AWS", "Figma"
  ]
};

const SkillCategory = ({ title, skills }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-primary to-pink-accent bg-clip-text text-transparent">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
            viewport={{ once: true }}
          >
            <Badge className="px-3 py-1 text-sm bg-card hover:bg-gradient-to-r hover:from-purple-primary/20 hover:to-pink-accent/20 border border-purple-secondary/30 text-foreground transition-all duration-300 shadow-sm hover:shadow-custom">
              {skill}
            </Badge>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-purple-primary to-pink-accent bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My technical toolkit encompasses various languages, frameworks, and tools that I've
            mastered throughout my academic and practical experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-card p-6 rounded-lg shadow-custom border border-border"
          >
            <SkillCategory title="Languages" skills={skillsData.languages} />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card p-6 rounded-lg shadow-custom border border-border"
          >
            <SkillCategory title="Frameworks & Libraries" skills={skillsData.frameworks} />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-card p-6 rounded-lg shadow-custom border border-border lg:col-span-1 md:col-span-2"
          >
            <SkillCategory title="Tools & Platforms" skills={skillsData.tools} />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 