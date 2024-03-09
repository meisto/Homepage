import { useRef } from 'react';

import PortfolioPane from './components/portfolio';
import ContactPane from './components/contact';
import HomePane from './components/home';
import AboutPane from './components/about';
import Navbar from './components/navbar';

import { useIsVisible } from './hooks/visible';

export default function App() {
   const refHome = useRef<any>(null);
   const refAbout = useRef<any>(null);
   const refPortfolio = useRef<any>(null);
   const refContact = useRef<any>(null);

   const isHomeIntersecting = useIsVisible(refHome);
   const isAboutIntersecting = useIsVisible(refAbout);
   const isPortfolioIntersecting = useIsVisible(refPortfolio);
   const isContactIntersecting = useIsVisible(refContact);

   const paneDefaultClass = 'snap-center w-full flex flex-col ';
   const transition = 'transition-all duration-500 delay-100 ease-in-out ';

   const transitionMode1 = 'opacity-100 translate-x-0';
   const transitionMode2 = 'opacity-0 -translate-x-5';

   // const background = 'bg-[#292929]';
   // const background = "bg-gradient-to-br from-[#333333] to-[#4C5C51]"
   const background = 'my-background';

   return (
      <>
         <Navbar
            homeActive={isHomeIntersecting}
            aboutActive={isAboutIntersecting}
            portfolioActive={isPortfolioIntersecting}
            contactActive={isContactIntersecting}
         />

         <main
            className={
               'scroll-smooth snap-mandatory snap-y w-screen h-screen overflow-scroll text-white/70 sm:p-10 p-4 z-100 ' +
               background
            }
         >
            <div className="flex flex-col gap-[50vh] w-full">
               <div
                  ref={refHome}
                  className={
                     paneDefaultClass +
                     transition +
                     'h-screen justify-center ' +
                     (isHomeIntersecting ? transitionMode1 : transitionMode2)
                  }
                  id="home"
               >
                  <HomePane />
               </div>

               <div
                  ref={refAbout}
                  className={
                     paneDefaultClass +
                     transition +
                     (isAboutIntersecting ? transitionMode1 : transitionMode2)
                  }
                  id="section-ueber"
               >
                  <AboutPane />
               </div>

               <div
                  ref={refPortfolio}
                  className={
                     paneDefaultClass +
                     transition +
                     'justify-center ' +
                     (isPortfolioIntersecting
                        ? transitionMode1
                        : transitionMode2)
                  }
                  id="section-portfolio"
               >
                  <PortfolioPane />
               </div>

               <div
                  ref={refContact}
                  className={
                     paneDefaultClass +
                     transition +
                     'h-screen justify-center items-center ' +
                     (isContactIntersecting ? transitionMode1 : transitionMode2)
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
