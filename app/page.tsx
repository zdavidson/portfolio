import { Container } from "@mui/material";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Link from "next/link";
import Hero from "./components/homepage/Hero";
import AboutMe from "./components/homepage/AboutMe";
import ContactMe from "./components/homepage/ContactMe";

export default function Home() {
  return (
    <>
      <Container>
        <header>
          <Navigation />
        </header>
        <main>
          <Link href="/" />
          <Link href="/portfolio" />
          <>
            <Hero />
            <AboutMe />
            <ContactMe />
          </>
        </main>
      </Container>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
