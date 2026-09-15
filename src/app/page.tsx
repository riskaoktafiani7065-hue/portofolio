"use client";

import Navbar from "../component/navbar";
import Hero from "../component/hero";
import Skills from "../component/skills";
import About from "../component/about";
import Project from "../component/project";
import Contact from "../component/contact";
import Footer from "../component/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-clip pt-20 md:pt-24">

      {/* NAVBAR */}
      <Navbar />

      {/* HOME */}
      <section id="home">
        <Hero />
      </section>

      {/* SKILLS */}
      <section id="skills">
        <Skills />
      </section>

      {/* ABOUT */}
      <section id="about">
        <About />
      </section>

      {/* PROJECT */}
      <section id="projects">
        <Project />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <Contact />
      </section>

      {/* FOOTER */}
      <Footer />

    </main>
  );
}