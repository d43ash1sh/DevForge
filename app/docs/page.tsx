"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Braces, Code, Sparkles, Layers, GitBranch, Cpu } from "lucide-react";

export default function DocsPage() {
  const sections = [
    {
      title: "Application Overview",
      content: `DevForge is a modern development platform that combines powerful code editing capabilities with real-time preview functionality. It's designed to help developers prototype and test components and code snippets efficiently.`,
      icon: Sparkles
    },
    {
      title: "Feature List",
      content: [
        "Component Generator with AI assistance",
        "Real-time Code Playground",
        "Multi-language support (JavaScript, HTML, CSS)",
        "Live Preview with instant updates",
        "Theme switching (Light/Dark mode)",
        "Responsive design testing",
        "Code sharing and export"
      ],
      icon: Layers
    },
    {
      title: "How to Use",
      content: [
        "1. Sign in with your GitHub account",
        "2. Choose between Component Generator or Code Playground",
        "3. Write or generate code in the editor",
        "4. See instant preview of your changes",
        "5. Copy the code or export components",
        "6. Share your creations with others"
      ],
      icon: Code
    },
    {
      title: "Tech Stack",
      content: [
        "Next.js 13 with App Router",
        "TypeScript for type safety",
        "Tailwind CSS for styling",
        "Framer Motion for animations",
        "Monaco Editor for code editing",
        "NextAuth.js for authentication",
        "Shadcn UI components"
      ],
      icon: Braces
    },
    {
      title: "Use Cases",
      content: `DevForge is ideal for:
        • Frontend developers prototyping UI components
        • Students learning web development
        • UI/UX designers creating interactive mockups
        • Teams collaborating on component libraries
        • Developers testing cross-browser compatibility`,
      icon: GitBranch
    },
    {
      title: "Performance",
      content: `Built with performance in mind:
        • Instant preview updates
        • Optimized code compilation
        • Efficient state management
        • Responsive across all devices
        • Fast authentication flow`,
      icon: Cpu
    }
  ];

  return (
    <div className="container py-8 space-y-8">
      <motion.div 
        className="space-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold">Documentation</h1>
        <p className="text-muted-foreground">
          Everything you need to know about DevForge
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card className="p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <section.icon className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">{section.title}</h2>
              </div>
              <div className="text-muted-foreground">
                {Array.isArray(section.content) ? (
                  <ul className="list-disc list-inside space-y-2">
                    {section.content.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="whitespace-pre-line">{section.content}</p>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}