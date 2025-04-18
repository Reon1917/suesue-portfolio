"use client";

import { useTheme } from "./ThemeProvider";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full w-10 h-10"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={{ opacity: 0, rotate: -90 }}
        animate={{ opacity: 1, rotate: 0 }}
        exit={{ opacity: 0, rotate: 90 }}
        transition={{ duration: 0.2 }}
        key={theme}
      >
        {theme === "light" ? (
          <Sun className="h-5 w-5 text-purple-primary" />
        ) : (
          <Moon className="h-5 w-5 text-purple-primary" />
        )}
      </motion.div>
    </Button>
  );
} 