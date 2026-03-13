import { lazy, Suspense, useState, useEffect, useCallback } from "react";
import { BrowserRouter } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import { Navbar, SectionLoader } from "./components";
import { LoadingScreen } from "./components/loading-screen";

// Lazy loading components
const Hero = lazy(() =>
  import("./components/hero").then((module) => ({ default: module.Hero })),
);
const CursorCanvas = lazy(() =>
  import("./components/canvas/cursor")
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
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Called when the 3D model finishes loading
  const handleModelLoaded = useCallback(() => {
    // Quickly fill progress to 100% then dismiss
    setProgress(100);
    setTimeout(() => setIsLoading(false), 600);
  }, []);

  // Simulate progress while loading
  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        // Slowly creep up to 90%, then wait for actual model load
        if (prev >= 90) return prev;
        const increment = Math.random() * 8 + 2;
        return Math.min(prev + increment, 90);
      });
    }, 300);

    // Safety timeout: dismiss after 8 seconds even if model hasn't loaded
    const timeout = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setIsLoading(false), 600);
    }, 8000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [isLoading]);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05, // Lower lerp = smoother, heavier feel (default usually 0.1)
        duration: 1.5, // Total duration of the scroll animation
        smoothWheel: true,
        wheelMultiplier: 1, // How much the wheel scrolls
        touchMultiplier: 2, // Smoothness on touch devices
      }}
    >
      <BrowserRouter>
        <LoadingScreen isLoading={isLoading} progress={progress} />
        <Suspense fallback={null}>
          <CursorCanvas />
        </Suspense>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Suspense fallback={<SectionLoader />}>
              <Hero onModelLoaded={handleModelLoaded} />
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
    </ReactLenis>
  );
};

export default App;

