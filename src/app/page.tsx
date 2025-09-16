import { Hero } from "@/sections/Hero";
import Introduction from "@/sections/introduction";

import LogoTicker from "@/sections/logoticker";
import { Navbar } from "@/sections/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <LogoTicker />
      <Introduction />
    </div>
  );
}
