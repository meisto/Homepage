// author: meisto
// date: 2024-03-08 00:18:48

import { Terminal } from 'lucide-react';

interface NavbarNavigationButtonProps {
   target: string;
   active: boolean;
   children: React.ReactNode;
}

function NavbarNavigationButton({
   children,
   target,
   active,
}: NavbarNavigationButtonProps) {
   return (
      <>
         <a href={"#" + target} className="relative" >
            {children}
            <div className={"delay-200 relative bottom-[2px] -left-1 w-[calc(100%+0.5rem)] bg-[#87AF87] h-[3px] transition-transform " + (active ? "scale-x-1" : "scale-x-0")}>

            </div>
         </a>
      </>
   );
}

type NavbarProps = {
   homeActive: boolean;
   aboutActive: boolean;
   portfolioActive: boolean;
   contactActive: boolean;
};

export default function Navbar({
   homeActive,
   aboutActive,
   portfolioActive,
   contactActive,
}: NavbarProps) {
   return (
      <nav className="select-none w-screen flex flex-row py-2 px-4 justify-between items-center fixed top-0 backdrop-blur-sm bg-gray-200/5 drop-shadow-md z-50">
         <a href="#home"
            className="hover:translate-x-2 transition-transform"
         >
            <Terminal size={30} color="#87AF87" strokeWidth={3} />
         </a>
         <div className="flex flex-row gap-4 text-white/80 font-bold transition-all">
            <NavbarNavigationButton target="home" active={homeActive}>
               Home
            </NavbarNavigationButton>
            <NavbarNavigationButton target="section-ueber" active={aboutActive}>
               Über
            </NavbarNavigationButton>
            <NavbarNavigationButton
               target="section-portfolio"
               active={portfolioActive}
            >
               Portfolio
            </NavbarNavigationButton>
            <NavbarNavigationButton
               target="section-kontakt"
               active={contactActive}
            >
               Kontakt
            </NavbarNavigationButton>
         </div>
      </nav>
   );
}
