"use client"

import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealCardProps {
  text: string;
  revealText: string;
  icon?: ReactNode;
  className?: string;
}

export function TextRevealCard({ text, revealText, icon, className }: TextRevealCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className={cn(
        "relative h-60 w-full overflow-hidden rounded-xl border bg-card p-6 transition-all duration-300",
        isHovered && "shadow-lg border-primary/50",
        className
      )}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex h-full flex-col justify-between">
        <div className="p-2 bg-primary/10 rounded-full w-fit">
          {icon}
        </div>
        
        <div className="relative z-10">
          <motion.div
            className="text-xl font-semibold"
            initial={{ opacity: 1 }}
            animate={{ opacity: isHovered ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            {text}
          </motion.div>
          
          <motion.div
            className="text-muted-foreground absolute inset-0"
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 10
            }}
            transition={{ duration: 0.3 }}
          >
            {revealText}
          </motion.div>
        </div>
        
        <motion.div
          className="h-1.5 w-12 bg-primary rounded-full"
          initial={{ width: "12px" }}
          animate={{ width: isHovered ? "100%" : "12px" }}
          transition={{ duration: 0.3 }}
        />
      </div>
      
      {/* Background accent */}
      <motion.div
        className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-primary/10"
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{ 
          scale: isHovered ? 6 : 0.8, 
          opacity: isHovered ? 0.15 : 0.1 
        }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
}