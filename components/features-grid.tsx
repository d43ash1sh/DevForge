"use client";

import { motion } from "framer-motion";
import { Sparkles, Braces, Terminal, PanelLeft, Layers, Cpu } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function FeaturesGrid() {
  const features = [
    {
      name: "Component Generator",
      description: "Describe your UI needs and instantly get coded components ready to use in your projects.",
      icon: Layers,
    },
    {
      name: "Instant Preview",
      description: "See your code and components come to life with real-time preview as you make changes.",
      icon: PanelLeft,
    },
    {
      name: "Multi-language Support",
      description: "Write and run code in JavaScript, Python, C and other languages without switching tools.",
      icon: Terminal,
    },
    {
      name: "Performant Execution",
      description: "Code execution happens instantly with optimized runtime environments for each language.",
      icon: Cpu,
    },
    {
      name: "Smart Components",
      description: "Intelligent component generation with AI-powered suggestions and optimizations.",
      icon: Braces,
    },
    {
      name: "Real-time Updates",
      description: "See your changes instantly with live preview and real-time compilation.",
      icon: Sparkles,
    },
  ];

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div 
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Powerful Features
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everything you need to accelerate your development workflow
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 mt-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature) => (
            <motion.div 
              key={feature.name} 
              className="relative overflow-hidden rounded-lg border bg-background p-2"
              variants={item}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex h-full flex-col justify-between rounded-md p-6">
                <div className="space-y-4">
                  <motion.div 
                    className="bg-primary/10 p-3 rounded-full w-fit"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-bold">{feature.name}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}