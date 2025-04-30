"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CodePreview } from "@/components/component-generator/code-preview";
import { ComponentPreview } from "@/components/component-generator/component-preview";
import { Wand, Loader2 } from "lucide-react";

// Sample component templates
const componentTemplates = {
  navbar: {
    code: `import React from 'react';
import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold">Logo</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="#" className="border-indigo-500 text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Home
              </Link>
              <Link href="#" className="border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Features
              </Link>
              <Link href="#" className="border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Pricing
              </Link>
              <Link href="#" className="border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                About
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}`,
    preview: `<div className="w-full bg-white dark:bg-gray-900 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold">Logo</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a href="#" className="border-primary text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Home
              </a>
              <a href="#" className="border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Features
              </a>
              <a href="#" className="border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Pricing
              </a>
              <a href="#" className="border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                About
              </a>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button className="px-4 py-2 text-sm font-medium text-white bg-primary border border-transparent rounded-md shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>`
  },
  card: {
    code: `import React from 'react';

export function Card({ title, description, imageUrl }) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800">
      {imageUrl && (
        <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800 dark:text-white">{title}</div>
        <p className="text-gray-600 dark:text-gray-300 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Learn More
        </button>
      </div>
    </div>
  );
}`,
    preview: `<div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800">
      <img className="w-full h-48 object-cover" src="https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800 dark:text-white">Card Title</div>
        <p className="text-gray-600 dark:text-gray-300 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="px-4 py-2 text-sm font-medium text-white bg-primary border border-transparent rounded-md shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
          Learn More
        </button>
      </div>
    </div>`
  },
  button: {
    code: `import React from 'react';

export function Button({ children, variant = 'primary', size = 'medium', onClick }) {
  const baseClasses = "font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md";
  
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  };
  
  const sizes = {
    small: "px-3 py-1.5 text-xs",
    medium: "px-4 py-2 text-sm",
    large: "px-5 py-2.5 text-base",
  };
  
  const variantClasses = variants[variant] || variants.primary;
  const sizeClasses = sizes[size] || sizes.medium;
  
  return (
    <button
      className={\`\${baseClasses} \${variantClasses} \${sizeClasses}\`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}`,
    preview: `<div className="space-y-4">
      <div className="flex gap-4">
        <button className="px-4 py-2 text-sm font-medium text-white bg-primary border border-transparent rounded-md shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
          Primary Button
        </button>
        <button className="px-4 py-2 text-sm font-medium bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2">
          Secondary Button
        </button>
        <button className="px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
          Danger Button
        </button>
      </div>
      <div className="flex gap-4 items-center">
        <button className="px-3 py-1.5 text-xs font-medium text-white bg-primary border border-transparent rounded-md shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
          Small
        </button>
        <button className="px-4 py-2 text-sm font-medium text-white bg-primary border border-transparent rounded-md shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
          Medium
        </button>
        <button className="px-5 py-2.5 text-base font-medium text-white bg-primary border border-transparent rounded-md shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
          Large
        </button>
      </div>
    </div>`
  }
};

export function ComponentForm() {
  const [prompt, setPrompt] = useState("");
  const [componentType, setComponentType] = useState("navbar");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedComponent, setGeneratedComponent] = useState<any>(null);
  
  const handleGenerate = () => {
    setIsGenerating(true);
    
    // Simulate generation with a timeout
    setTimeout(() => {
      // Return a pre-defined component based on selection
      setGeneratedComponent(componentTemplates[componentType]);
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div>
          <Label htmlFor="component-type">Component Type</Label>
          <Select 
            value={componentType} 
            onValueChange={setComponentType}
          >
            <SelectTrigger className="mt-1.5">
              <SelectValue placeholder="Select component type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="navbar">Navigation Bar</SelectItem>
              <SelectItem value="card">Card Component</SelectItem>
              <SelectItem value="button">Button Component</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="prompt">Describe your component</Label>
          <Textarea
            id="prompt"
            placeholder="Describe your requirements (e.g., a responsive navbar with dropdown menus and a search box)"
            className="mt-1.5 min-h-[120px]"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>
        
        <Button 
          onClick={handleGenerate} 
          disabled={isGenerating || !componentType}
          className="w-full"
        >
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Wand className="mr-2 h-4 w-4" />
              Generate Component
            </>
          )}
        </Button>
        
        {generatedComponent && (
          <Tabs defaultValue="preview" className="mt-6">
            <TabsList className="mb-4">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <TabsContent value="preview">
              <ComponentPreview previewCode={generatedComponent.preview} />
            </TabsContent>
            <TabsContent value="code">
              <CodePreview code={generatedComponent.code} language="jsx" />
            </TabsContent>
          </Tabs>
        )}
      </div>
    </Card>
  );
}