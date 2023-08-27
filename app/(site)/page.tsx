import About from "@/components/About";
// import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <section className="px-4 divide-y sm:text-center sm:px-32 lg:px-64 xl:px-96 dark:divide-dotted">
      <Hero />
      <About />
      <Skills />
      <Work />
      {/* <Contact /> */}
    </section>
  )
}
