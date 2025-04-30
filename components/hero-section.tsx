"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-4 text-center">
          <motion.div 
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 dark:from-blue-400 dark:to-primary">
              Build. Preview. Deploy.
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              A modern platform for developers to instantly build, preview, and run components or code.
            </p>
          </motion.div>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Button asChild size="lg" className="h-12 px-8">
              <Link href="/components">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8">
              <Link href="/playground">
                Try Playground
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Background gradient effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-primary/20 to-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 translate-x-1/2 translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-blue-500/20 to-primary/20 blur-3xl" />
      </div>
    </section>
  );
}