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
            Relevant <span className="text-purple-primary">Coursework</span>
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
              className="bg-card p-5 rounded-lg shadow-sm border border-border hover:border-purple-primary hover:shadow-md transition-all duration-300 flex items-center"
            >
              <BookOpen className="h-5 w-5 mr-3 text-purple-primary flex-shrink-0" />
              <span>{course}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 