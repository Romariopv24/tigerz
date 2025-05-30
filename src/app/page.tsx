import { FirstSection } from "./components/firstSection/FirstSection";
import { FourthySection } from "./components/fourthySection/FourthySection";
import { LayoutSection } from "./components/layaout/LayoutSection";
import { SecondSection } from "./components/secondSection/SecondSection";
import { ThirSection } from "./components/ThirdSection/ThirSection";

export default function Home() {
  return (
     <>
     <LayoutSection />
     <FirstSection />
     <SecondSection/>
     <ThirSection />
     <FourthySection />
     </>
  );
}



