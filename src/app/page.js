import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import HeroSection from "./components/HeroSection";
import Portfolio from "./components/Portfolio";

const Page = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col bg-[#121212] ">
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <AboutSection />
          <Portfolio />
          <EmailSection />
        </div>
      </main>
    </>
  );
};

export default Page;
