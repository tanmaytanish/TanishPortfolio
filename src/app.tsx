import { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar, SectionLoader } from "./components";

// Lazy loading components
const Hero = lazy(() =>
  import("./components/hero").then((module) => ({ default: module.Hero })),
);
const About = lazy(() =>
  import("./components/about").then((module) => ({ default: module.About })),
);
const Experience = lazy(() =>
  import("./components/experience").then((module) => ({
    default: module.Experience,
  })),
);
const Tech = lazy(() =>
  import("./components/tech").then((module) => ({ default: module.Tech })),
);
const Works = lazy(() =>
  import("./components/works").then((module) => ({ default: module.Works })),
);
const Feedbacks = lazy(() =>
  import("./components/feedbacks").then((module) => ({
    default: module.Feedbacks,
  })),
);
const Contact = lazy(() =>
  import("./components/contact").then((module) => ({
    default: module.Contact,
  })),
);
const StarsCanvas = lazy(() =>
  import("./components/canvas/stars").then((module) => ({
    default: module.default,
  })),
);
const Footer = lazy(() => import("./components/footer"));

// App
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Suspense fallback={<SectionLoader />}>
            <Hero />
          </Suspense>
        </div>
        <Suspense fallback={<SectionLoader />}>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
          <Footer />
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
