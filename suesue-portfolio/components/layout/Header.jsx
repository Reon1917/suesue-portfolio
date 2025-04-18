"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="#hero">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold text-foreground"
          >
            Sue<span className="text-purple-primary">Sue</span>
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link 
                  href={item.href}
                  className="text-foreground hover:text-purple-primary transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
          <ThemeSwitcher />
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center md:hidden">
          <ThemeSwitcher />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="ml-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-background border-b border-border"
        >
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-foreground hover:text-purple-primary block py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </header>
  );
} 