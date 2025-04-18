"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const courseworkData = [
  "Object-Oriented Analysis and Design",
  "Discrete Mathematics",
  "Linear Algebra",
  "Circuit Analysis",
  "Design and Analysis of Algorithms",
  "Database Systems",
  "Statistical Methods for Engineers",
  "UI/UX",
  "Intro to Software Engineering",
  "Systems Programming",
  "Artificial Intelligence (in-progress)",
];

export default function Coursework() {
  return (
    <section id="coursework" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Relevant <span className="bg-gradient-to-r from-purple-primary to-pink-accent bg-clip-text text-transparent">Coursework</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of coursework that has shaped my technical knowledge and approach to solving problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {courseworkData.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-card p-5 rounded-lg shadow-custom border border-border hover:border-purple-primary/40 hover:shadow-lg transition-all duration-300 flex items-center group"
            >
              <div className="mr-3 w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-primary/10 to-pink-accent/10 group-hover:from-purple-primary/20 group-hover:to-pink-accent/20 transition-all duration-300">
                <BookOpen className="h-4 w-4 text-purple-primary group-hover:text-pink-accent transition-all duration-300 flex-shrink-0" />
              </div>
              <span className="group-hover:bg-gradient-to-r group-hover:from-purple-primary group-hover:to-pink-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{course}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 