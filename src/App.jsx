import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Services1 from "./components/services/Services1";
import Portfolio from "./components/portfolio/Portfolio";

import { SpeedInsights } from "@vercel/speed-insights/react";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Services1 />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">Contact</section>
      <SpeedInsights />
    </div>
  );
};

export default App;
