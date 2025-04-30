"use client"

import { useTheme } from "next-themes";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";

interface CodePreviewProps {
  code: string;
  language?: string;
}

export function CodePreview({ code, language = "jsx" }: CodePreviewProps) {
  const { theme } = useTheme();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="relative overflow-hidden">
      <div className="absolute top-2 right-2 z-10">
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8 bg-muted/80 hover:bg-muted" 
          onClick={copyToClipboard}
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>
      <div className="overflow-x-auto p-4">
        <Highlight
          code={code}
          language={language}
          theme={theme === "dark" ? themes.nightOwl : themes.github}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={`${className} text-sm`} style={{ ...style, background: "transparent" }}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  <span className="mr-4 inline-block text-right w-6 select-none text-muted-foreground">
                    {i + 1}
                  </span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </Card>
  );
}