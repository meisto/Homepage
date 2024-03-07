// author: meisto
// date: 2024-03-08 00:18:48

import { Terminal } from "lucide-react";

function NavbarNavigationButton({ children, target, active }) {
    const moveToFactory = (x: string) => () =>
        document.getElementById(x).scrollIntoView({ behavior: "smooth" });

    return (
        <>
            <li className="relative">
                <button className="" onClick={moveToFactory(target)}>
                    {children}
                </button>
                <div
                    className={
                        "scale-x-0 origin-center transition-all ease-in-out w-[calc(100%+0.5rem)] h-1 bg-[#87AF87] absolute -bottom-0 -left-1 " +
                        (active ? "scale-x-100" : "")
                    }
                ></div>
            </li>
        </>
    );
}

export default function Navbar({
    homeActive,
    aboutActive,
    portfolioActive,
    contactActive,
}) {
    const moveToFactory = (x: string) => () =>
        document.getElementById(x).scrollIntoView({ behavior: "smooth" });

    return (
        <nav className="w-screen flex flex-row py-2 px-4 justify-between items-center fixed top-0 backdrop-blur-sm bg-gray-200/5 drop-shadow-md">
            <button
                onClick={moveToFactory("home")}
                className="hover:translate-x-2 transition-transform"
            >
                <Terminal size={30} color="#87AF87" strokeWidth={3} />
            </button>
            <ul className="flex flex-row gap-4 text-white/80 font-bold transition-all">
                <NavbarNavigationButton target="home" active={homeActive}>
                    Home
                </NavbarNavigationButton>
                <NavbarNavigationButton
                    target="section-ueber"
                    active={aboutActive}
                >
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
            </ul>
        </nav>
    );
}
