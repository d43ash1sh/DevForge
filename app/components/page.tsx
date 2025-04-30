import { ComponentForm } from "@/components/component-generator/component-form";

export default function ComponentsPage() {
  return (
    <div className="container py-8 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Component Generator</h1>
        <p className="text-muted-foreground">
          Describe the component you need and get instant code ready to use in your project.
        </p>
      </div>
      
      <ComponentForm />
    </div>
  );
}