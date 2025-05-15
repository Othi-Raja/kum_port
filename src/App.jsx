import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import FooterMain from "./components/footer/FooterMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import HeroMain from "./components/heroSection/HeroMain";
import NavbarMain from "./components/navbar/NavbarMain";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";
import { Toaster } from 'react-hot-toast';
// import SubHeroMain from "./components/subHeroSection/SubHeroMain";

function App() {
  return (
    <main className="font-body text-light relative overflow-hidden">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      {/* <SubHeroMain /> */}
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      {/* <ExperienceMain /> */}
      <ProjectsMain />
      <ContactMeMain />
      <FooterMain />

      {/* Toast notification container */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 5000,
          style: {
            background: '#1e293b',
            color: '#f8fafc',
            border: '1px solid rgba(59, 130, 246, 0.2)',
          },
          success: {
            iconTheme: {
              primary: '#fb9718',
              secondary: '#f8fafc',
            },
          },
          error: {
            iconTheme: {
              primary: '#f87171',
              secondary: '#f8fafc',
            },
          },
        }}
      />
    </main>
  );
}

export default App;
