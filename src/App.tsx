import { useRef } from "react";

import PortfolioPane from "./components/portfolio";
import ContactPane from "./components/contact";
import HomePane from "./components/home";
import AboutPane from "./components/about";
import Navbar from "./components/navbar";

import { useIsVisible } from "./hooks/visible";

export default function App() {
    const refHome = useRef();
    const refAbout = useRef();
    const refPortfolio = useRef();
    const refContact = useRef();

    const isHomeIntersecting = useIsVisible(refHome);
    const isAboutIntersecting = useIsVisible(refAbout);
    const isPortfolioIntersecting = useIsVisible(refPortfolio);
    const isContactIntersecting = useIsVisible(refContact);

    const paneDefaultClass = "snap-center w-full flex flex-col ";

    return (
        <>
            <Navbar
                homeActive={isHomeIntersecting}
                aboutActive={isAboutIntersecting}
                portfolioActive={isPortfolioIntersecting}
                contactActive={isContactIntersecting}
            />

            <main className="snap-mandatory snap-y w-screen h-screen overflow-scroll dark:bg-[#333333] dark:text-white/70 sm:p-10 p-4">
                <div className="flex flex-col gap-[50vh] w-full">
                    <div
                        ref={refHome}
                        className={paneDefaultClass + "h-screen justify-center"}
                        id="home"
                    >
                        <HomePane />
                    </div>

                    <div
                        ref={refAbout}
                        className={
                            paneDefaultClass +
                            "transition-all duration-500 delay-100 ease-in-out " +
                            (isAboutIntersecting
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 -translate-x-5")
                        }
                        id="section-ueber"
                    >
                        <AboutPane />
                    </div>

                    <div
                        ref={refPortfolio}
                        className={paneDefaultClass + "justify-center"}
                        id="section-portfolio"
                    >
                        <PortfolioPane />
                    </div>

                    <div
                        ref={refContact}
                        className={
                            paneDefaultClass +
                            "h-screen justify-center items-center"
                        }
                        id="section-kontakt"
                    >
                        <ContactPane />
                    </div>
                </div>
            </main>
        </>
    );
}
