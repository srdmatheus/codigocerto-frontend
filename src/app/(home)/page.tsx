import { Line } from "@/components";

import {
  AboutSection,
  ContactSection,
  HeroSection,
  MotivationsSection,
  PersonalTasteSection
} from "./components";

export default function Home() {
  return (
    <main className="mx-auto max-w-[1300px] px-4">
      <HeroSection />
      <AboutSection />
      <PersonalTasteSection />
      <MotivationsSection />
      <ContactSection />

      <Line />
    </main>
  );
}
