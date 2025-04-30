"use client"

import { useRef, useEffect } from 'react';
import { Editor } from '@monaco-editor/react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

interface MonacoEditorProps {
  defaultLanguage?: string;
  value?: string;
  onChange?: (value: string | undefined) => void;
  height?: string;
  className?: string;
}

const languageMap: { [key: string]: string } = {
  'javascript': 'javascript',
  'python': 'python',
  'cpp': 'cpp',
  'ruby': 'ruby',
  'html': 'html',
  'css': 'css'
};

export function MonacoEditor({
  defaultLanguage = 'javascript',
  value,
  onChange,
  height = '500px',
  className,
}: MonacoEditorProps) {
  const editorRef = useRef<any>(null);
  const { theme } = useTheme();

  const handleEditorDidMount = (editor: any) => {
    editorRef.current = editor;
  };

  return (
    <Card className={cn("overflow-hidden border-0 rounded-none shadow-none", className)}>
      <Editor
        height={height}
        defaultLanguage={languageMap[defaultLanguage] || defaultLanguage}
        value={value}
        onChange={onChange}
        onMount={handleEditorDidMount}
        theme={theme === 'dark' ? 'vs-dark' : 'light'}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          wordWrap: 'on',
          scrollBeyondLastLine: false,
          automaticLayout: true,
          padding: { top: 16, bottom: 16 },
          lineNumbers: 'on',
          glyphMargin: false,
          folding: true,
          lineDecorationsWidth: 0,
          lineNumbersMinChars: 3,
          suggest: {
            showKeywords: true,
            showSnippets: true,
          },
          quickSuggestions: true,
          tabSize: 2,
        }}
      />
    </Card>
  );
}