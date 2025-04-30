"use client"

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MonacoEditor } from "@/components/editor/monaco-editor";
import { CodePreview } from "@/components/component-generator/code-preview";
import { ComponentPreview } from "@/components/component-generator/component-preview";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Code, FileJson, FileType } from "lucide-react";

export default function PlaygroundPage() {
  const [htmlCode, setHtmlCode] = useState(
    `<div class="flex flex-col items-center justify-center p-6 max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
  <div class="shrink-0">
    <img class="h-12 w-12 rounded-full" src="https://images.pexels.com/photos/207583/pexels-photo-207583.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Logo" />
  </div>
  <div class="text-center mt-4">
    <div class="text-xl font-medium text-black dark:text-white">Interactive Playground</div>
    <p class="mt-2 text-slate-500 dark:text-slate-400">Edit code and see changes in real-time!</p>
  </div>
  <button id="changeColorBtn" class="mt-4 px-4 py-2 text-sm font-medium text-white bg-primary rounded-full hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
    Change Color
  </button>
</div>`
  );
  
  const [cssCode, setCssCode] = useState(
    `.animated-btn {
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.animated-btn::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s;
}

.animated-btn:hover::after {
  transform: translateX(100%);
}`
  );
  
  const [jsCode, setJsCode] = useState(
    `document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('changeColorBtn');
  
  if (button) {
    button.classList.add('animated-btn');
    
    button.addEventListener('click', () => {
      // Generate a random color with good contrast
      const hue = Math.floor(Math.random() * 360);
      const color = \`hsl(\${hue}, 70%, 50%)\`;
      button.style.backgroundColor = color;
      
      // Add ripple effect
      const ripple = document.createElement('div');
      ripple.style.position = 'absolute';
      ripple.style.borderRadius = '50%';
      ripple.style.backgroundColor = 'rgba(255,255,255,0.3)';
      ripple.style.transform = 'scale(0)';
      ripple.style.animation = 'ripple 0.6s linear';
      button.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    });
  }
});

// Add ripple animation to stylesheet
const style = document.createElement('style');
style.textContent = \`
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
\`;
document.head.appendChild(style);`
  );

  const [activeTab, setActiveTab] = useState("html");
  const [previewCode, setPreviewCode] = useState("");

  const updatePreview = () => {
    const combinedCode = `
<!DOCTYPE html>
<html>
<head>
  <style>${cssCode}</style>
</head>
<body class="bg-background text-foreground">
  ${htmlCode}
  <script>${jsCode}</script>
</body>
</html>`;
    setPreviewCode(combinedCode);
  };

  return (
    <div className="container py-8 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Code Playground</h1>
        <p className="text-muted-foreground">
          Write, edit, and preview HTML, CSS, and JavaScript in real-time.
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <Card className="overflow-hidden border rounded-lg">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex items-center justify-between p-2 border-b bg-muted/40">
                <TabsList className="grid grid-cols-3 w-[300px]">
                  <TabsTrigger value="html" className="flex items-center gap-2">
                    <FileType className="h-4 w-4" />
                    HTML
                  </TabsTrigger>
                  <TabsTrigger value="css" className="flex items-center gap-2">
                    <FileJson className="h-4 w-4" />
                    CSS
                  </TabsTrigger>
                  <TabsTrigger value="js" className="flex items-center gap-2">
                    <Code className="h-4 w-4" />
                    JS
                  </TabsTrigger>
                </TabsList>
                <Button 
                  onClick={updatePreview}
                  size="sm"
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Run
                </Button>
              </div>
              
              <TabsContent value="html" className="m-0">
                <MonacoEditor 
                  defaultLanguage="html"
                  value={htmlCode}
                  onChange={(value) => setHtmlCode(value || "")}
                  height="400px"
                />
              </TabsContent>
              <TabsContent value="css" className="m-0">
                <MonacoEditor 
                  defaultLanguage="css"
                  value={cssCode}
                  onChange={(value) => setCssCode(value || "")}
                  height="400px"
                />
              </TabsContent>
              <TabsContent value="js" className="m-0">
                <MonacoEditor 
                  defaultLanguage="javascript"
                  value={jsCode}
                  onChange={(value) => setJsCode(value || "")}
                  height="400px"
                />
              </TabsContent>
            </Tabs>
          </Card>
          
          <div className="space-y-3">
            <h2 className="text-xl font-bold">Combined Output</h2>
            <CodePreview code={previewCode} language="html" />
          </div>
        </div>
        
        <div className="space-y-3">
          <h2 className="text-xl font-bold">Live Preview</h2>
          <Card className="h-[600px] overflow-hidden">
            <ComponentPreview previewCode={htmlCode} />
          </Card>
        </div>
      </div>
    </div>
  );
}