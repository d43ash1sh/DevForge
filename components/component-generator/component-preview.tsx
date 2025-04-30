"use client"

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ComponentPreviewProps {
  previewCode: string;
}

export function ComponentPreview({ previewCode }: ComponentPreviewProps) {
  return (
    <Card className={cn(
      "flex w-full h-full items-center justify-center p-6 overflow-hidden",
      "bg-[url('/grid.svg')] dark:bg-[url('/grid-dark.svg')]",
      "bg-muted/40 dark:bg-muted/20"
    )}>
      <div className="w-full max-w-full mx-auto" dangerouslySetInnerHTML={{ __html: previewCode }} />
    </Card>
  );
}