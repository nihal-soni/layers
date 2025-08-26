"use client";

import Link from "next/link";
import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";
import Button from "@/components/Button";
import { Menu } from "lucide-react"; 
import { usePathname } from "next/navigation";

const navlinks = [
  { label: "Features", href: "/features" },
  { label: "Integrations", href: "/integrations" },
  { label: "FAQs", href: "/faqs" },
];

export const Navbar = () => {
  const path = usePathname();

  return (
    <section className="px-2 py-4 lg:py-8">
      <div className="container max-w-5xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-3 border border-white/15 rounded-2xl p-2 px-4 md:pr-2 items-center">
     
          <div>
            <Link href="/" aria-label="Go to homepage" className="flex items-center">
              <Image
                src={logoImage}
                alt="Layers logo"
                width={120}
                height={40}
                className="h-9 w-auto"
                priority
              />
            </Link>
          </div>

     
          <div className="lg:flex items-center justify-center hidden">
            <nav className="flex gap-6 font-medium text-lg">
              {navlinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.label}
                  aria-current={path === link.href ? "page" : undefined}
                  className={`transition-colors ${
                    path === link.href
                      ? "text-lime-300 font-semibold"
                      : "hover:text-gray-700"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

         
          <div className="flex justify-end gap-4 items-center">
           
            <button className="md:hidden p-2 rounded-md hover:bg-white/10" aria-label="Open menu">
              <Menu className="w-6 h-6" />
            </button>

         
            <Button variant="secondary" className="hidden md:inline-flex items-center">
              Log in
            </Button>
            <Button variant="primary" className="hidden md:inline-flex items-center">
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
