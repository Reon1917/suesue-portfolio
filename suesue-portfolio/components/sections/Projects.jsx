"use client";

import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { Github, ExternalLink } from "lucide-react";

const projectData = [
  {
    title: "Referral Program for Paso Robles Food Cooperative",
    description: "Developed a full-stack referral system with backend APIs using Next.js, Supabase, and Prisma ORM. Created responsive frontend forms with React.js and MUI, integrated MySQL and automated email notifications.",
    techs: ["Next.js", "React.js", "Supabase", "Prisma ORM", "Docker"],
    image: "/projects/cooperative.jpg",
    github: "#",
    live: "#",
    color: "from-purple-primary to-purple-secondary"
  },
  {
    title: "Roommate Chores Tracker",
    description: "Built a backend API for chore and bill tracking using FastAPI and SQLAlchemy, designed relational database with CRUD endpoints. Added optimizations to handle 1M simulated users including database indexing.",
    techs: ["Python", "PostgreSQL", "FASTAPI", "SQLAlchemy", "Docker"],
    image: "/projects/chores.jpg",
    github: "#",
    live: "#",
    color: "from-purple-secondary to-pink-accent"
  },
  {
    title: "POS System for Grocery Store",
    description: "Created a point-of-sale system for checkout, sales tracking, and inventory management. Built both user and admin interfaces with JavaFX and used MySQL for database management.",
    techs: ["Java", "JavaFX", "MySQL"],
    image: "/projects/pos.jpg",
    github: "#",
    live: "#",
    color: "from-pink-accent to-purple-primary"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-purple-primary to-pink-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills and experience in different technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg overflow-hidden shadow-custom hover:shadow-lg transition-all duration-300 border border-border h-full flex flex-col group"
            >
              <div className={`h-48 bg-gradient-to-r ${project.color} flex items-center justify-center p-6 relative overflow-hidden transition-all duration-500 group-hover:h-52`}>
                <span className="text-2xl font-bold text-white relative z-10">{project.title.split(" ")[0]}</span>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 group-hover:bg-gradient-to-r group-hover:from-purple-primary group-hover:to-pink-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techs.map((tech, i) => (
                    <Badge key={i} variant="outline" className="bg-card hover:bg-gradient-to-r hover:from-purple-primary/20 hover:to-pink-accent/20 border border-purple-secondary/30 text-foreground transition-all duration-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-purple-primary transition-colors duration-200"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-pink-accent transition-colors duration-200"
                    aria-label={`Live demo for ${project.title}`}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 