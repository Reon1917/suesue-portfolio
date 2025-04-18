"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-4 md:mb-0"
          >
            <span className="font-bold text-lg">
              Sue<span className="text-purple-primary">Sue</span>
            </span>
            <p className="text-sm text-muted-foreground mt-1">
              &copy; {currentYear} All rights reserved
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-4"
          >
            <Link 
              href="https://github.com/suesuee" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-purple-primary transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link 
              href="https://linkedin.com/in/sue-sue" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-purple-primary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link 
              href="mailto:29suesue@gmail.com"
              className="text-foreground hover:text-purple-primary transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
} 