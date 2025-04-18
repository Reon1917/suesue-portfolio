"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { DownloadIcon } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen pt-20 pb-10 flex items-center"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Hi, I'm{" "}
              <span className="text-purple-primary">Sue</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl mb-6 text-muted-foreground">
              Computer Science Student & Software Developer
            </h2>
            
            <p className="text-lg mb-8 max-w-lg">
              I'm passionate about building impactful software solutions and currently studying 
              Computer Science at Cal Poly, San Luis Obispo.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="/Sue_Resume.pdf" download>
                <Button className="group">
                  <DownloadIcon className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Download Resume
                </Button>
              </a>
              
              <a href="#contact">
                <Button variant="outline" className="border-purple-primary hover:bg-purple-primary/10">
                  Contact Me
                </Button>
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-primary"
          >
            <Image
              src="/profile pic/profile.png"
              alt="Sue Sue's profile picture"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 