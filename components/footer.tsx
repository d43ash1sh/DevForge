'use client';

import Link from "next/link";
import { Github, Twitter, Code, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link 
              href="https://github.com/d43ash1sh" 
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="sr-only">GitHub</span>
              <Github className="h-5 w-5" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link 
              href="https://x.com/d43a_io" 
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="sr-only">X (Twitter)</span>
              <Twitter className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
        <motion.div 
          className="mt-8 md:order-1 md:mt-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center md:justify-start">
            <Code className="h-5 w-5 text-primary mr-2" />
            <span className="text-sm font-medium">DevForge</span>
          </div>
          <p className="mt-2 text-center text-xs leading-5 text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} DevForge. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}