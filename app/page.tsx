import { About } from "@/components/about";
import { AgencyWork } from "@/components/agency-work";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-6 sm:px-10">
      <Hero />
      <Projects />
      <Experience />
      <About />
      <AgencyWork />
      <SiteFooter />
    </main>
  );
}
