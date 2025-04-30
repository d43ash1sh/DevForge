"use client"

import { useState } from "react";
import { MonacoEditor } from "@/components/editor/monaco-editor";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Loader2 } from "lucide-react";

const languageOptions = [
  { 
    id: 'javascript',
    name: 'JavaScript',
    defaultCode: 'console.log("Hello, Bhai ⚡️");'
  },
  {
    id: 'python',
    name: 'Python',
    defaultCode: 'print("Hello, Bro ⚡️")'
  },
  {
    id: 'cpp',
    name: 'C++',
    defaultCode: '#include <iostream>\n\nint main() {\n    std::cout << "Hello, Bhaiti ⚡️" << std::endl;\n    return 0;\n}'
  },
  {
    id: 'ruby',
    name: 'Ruby',
    defaultCode: 'puts "Hello, Bhau ⚡️"'
  }
];

export default function IDEPage() {
  const [activeLanguage, setActiveLanguage] = useState(languageOptions[0].id);
  const [code, setCode] = useState(languageOptions[0].defaultCode);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const handleLanguageChange = (language: string) => {
    setActiveLanguage(language);
    setCode(languageOptions.find(l => l.id === language)?.defaultCode || "");
    setOutput("");
  };

  const runCode = () => {
    setIsRunning(true);
    setOutput("Running...");

    // Simulate code execution
    setTimeout(() => {
      let result = "";

      switch (activeLanguage) {
        case "javascript":
          try {
            // Capture console.log output
            const logs: string[] = [];
            const originalConsoleLog = console.log;
            console.log = (...args) => {
              logs.push(args.map(arg => 
                typeof arg === 'object' ? JSON.stringify(arg, null, 2) : arg
              ).join(' '));
            };

            new Function(code)();
            console.log = originalConsoleLog;
            result = logs.join('\n');
          } catch (error: any) {
            result = `Error: ${error.message}`;
          }
          break;

        case "python":
          // Simulate Python output
          if (code.includes('print(')) {
            const printMatches = code.match(/print\((["'])(.*?)\1\)/g);
            if (printMatches) {
              result = printMatches
                .map(match => {
                  const content = match.match(/print\((["'])(.*?)\1\)/);
                  return content ? content[2] : '';
                })
                .join('\n');
            }
          }
          break;

        case "cpp":
          // Simulate C++ output
          if (code.includes('cout')) {
            const coutMatches = code.match(/cout\s*<<\s*(["'])(.*?)\1/g);
            if (coutMatches) {
              result = coutMatches
                .map(match => {
                  const content = match.match(/cout\s*<<\s*(["'])(.*?)\1/);
                  return content ? content[2] : '';
                })
                .join('\n');
            }
          }
          break;

        case "ruby":
          // Simulate Ruby output
          if (code.includes('puts')) {
            const putsMatches = code.match(/puts\s+(["'])(.*?)\1/g);
            if (putsMatches) {
              result = putsMatches
                .map(match => {
                  const content = match.match(/puts\s+(["'])(.*?)\1/);
                  return content ? content[2] : '';
                })
                .join('\n');
            }
          }
          break;
      }

      setOutput(result || 'No output');
      setIsRunning(false);
    }, 1000);
  };

  return (
    <div className="container py-8 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Code IDE</h1>
        <p className="text-muted-foreground">
          Write, edit and run code in multiple languages directly in your browser.
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="overflow-hidden border rounded-lg">
          <Tabs value={activeLanguage} onValueChange={handleLanguageChange}>
            <div className="flex items-center justify-between p-2 border-b bg-muted/40">
              <TabsList>
                {languageOptions.map(lang => (
                  <TabsTrigger 
                    key={lang.id}
                    value={lang.id}
                  >
                    {lang.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              <Button 
                onClick={runCode}
                disabled={isRunning}
                size="sm"
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                {isRunning ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Running
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-4 w-4" />
                    Run
                  </>
                )}
              </Button>
            </div>
            
            {languageOptions.map(lang => (
              <TabsContent key={lang.id} value={lang.id}>
                <MonacoEditor
                  defaultLanguage={lang.id}
                  value={code}
                  onChange={(value) => setCode(value || "")}
                  height="500px"
                />
              </TabsContent>
            ))}
          </Tabs>
        </Card>
        
        <Card className="overflow-hidden border rounded-lg">
          <div className="p-2 border-b bg-muted/40">
            <h2 className="font-semibold">Output</h2>
          </div>
          <div className="p-4 font-mono text-sm whitespace-pre-wrap h-[500px] overflow-auto bg-muted/30">
            {output}
          </div>
        </Card>
      </div>
    </div>
  );
}