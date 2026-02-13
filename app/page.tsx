import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Hobbies } from "@/components/hobbies";
import { Projects } from "@/components/projects";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-5 sm:px-8 lg:px-12">
      <Hero />
      <Projects />
      <Experience />
      <About />
      <Hobbies />
      <SiteFooter />
    </main>
  );
}
