import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Layers, Terminal } from "lucide-react";
import { TextRevealCard } from "@/components/text-reveal-card";
import { FeaturesGrid } from "@/components/features-grid";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />
      
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Interactive Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Tools Built for Developers
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform offers a comprehensive suite of development tools to streamline your workflow.
              </p>
            </div>
          </div>
          
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
            <Link href="/components" className="group">
              <TextRevealCard
                text="Component Generator"
                revealText="Create UI components with a simple description and get instant code."
                icon={<Layers className="h-6 w-6" />}
              />
            </Link>
            <Link href="/playground" className="group">
              <TextRevealCard
                text="Code Playground"
                revealText="Experiment with code and see the results in real-time as you type."
                icon={<Code className="h-6 w-6" />}
              />
            </Link>
            <Link href="/ide" className="group">
              <TextRevealCard
                text="Multi-language IDE"
                revealText="Write and run code in JavaScript, Python, and C with instant output."
                icon={<Terminal className="h-6 w-6" />}
              />
            </Link>
          </div>
        </div>
      </section>
      
      <FeaturesGrid />
      
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Start Building?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of developers who are already using our platform to build better software.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/components">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}