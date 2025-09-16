import quantamLogo from "@/assets/images/quantum.svg";
import acmeLogo from "@/assets/images/acme-corp.svg";
import echoValleyLogo from "@/assets/images/echo-valley.svg";
import pulseLogo from "@/assets/images/pulse.svg";
import outsideLogo from "@/assets/images/outside.svg";
import apexLogo from "@/assets/images/apex.svg";
import celastiaLogo from "@/assets/images/celestial.svg";
import twiceLogo from "@/assets/images/twice.svg";
import Image from "next/image";

const logos = [
  { name: "Qunatam", image: quantamLogo },
  { name: "Acme Corp", image: acmeLogo },
  { name: "Echo Valley", image: echoValleyLogo },
  { name: "Pulse ", image: pulseLogo },
  { name: "Outside", image: outsideLogo },
  { name: "Apex", image: apexLogo },
  { name: "Celastia", image: celastiaLogo },
  { name: "Twice", image: twiceLogo },
];

export default function LogoTicker() {
  return (
    <section className="overflow-x-clip py-24">
      <div className="container mx-auto max-w-6xl">
        <h3 className="text-center text-xl text-white/50">
          Already chosen by these market leaders
        </h3>
        <div className="mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-24 pr-24">
            {logos.map((logo) => (
              <Image src={logo.image} key={logo.name} alt={logo.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
