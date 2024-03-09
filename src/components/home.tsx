// author: meisto
// date: 2024-03-07 23:30:28

import { useState, useEffect } from "react"

import Heading from './headings';
import GradSpan from './gradspan';


const nomen = [
   "Programmierer",
   "Enthusiast",
   "Gestalter",
   "Nerd",
]

export default function HomePane() {

   const [description, setDescription] = useState<number>(0)
   const [showDescription, setShowDescription] = useState<boolean>(true)

   useEffect(() => {
      let index = 0
      let maxIteration = 100

      const interval = setInterval(() => {


         if (index == (maxIteration - 11)) {
            setShowDescription(false)
         } else if (index == maxIteration) {
            const i = Math.floor(Math.random() * nomen.length)
            setDescription((current) => (current != i) ? i : (i + 1) % nomen.length)
            setShowDescription(true)
            index = 0
         }

         index += 1
      }, 100)

      return () => clearInterval(interval)

   }, [])


   return (
      <>
         <div className="flex flex-row">
            <div>
               <Heading heading="h2">
                  <span className="text-gray-300/50">meisto</span>
               </Heading>
               <Heading heading="h1">
                  <GradSpan>Entwickler</GradSpan>
                  <br />
                  <GradSpan>
                     <span className="text-gray-300/50 mx-1">&amp;</span>
                     <span className={"transition-opacity duration-1000 " + (showDescription ? "opacity-100" : "opacity-0")}>{nomen[description]}</span>
                  </GradSpan>
               </Heading>
               <p className="w-3/4">
                  Hallo und herzlich wilkommen auf meiner Webseite. Ich bin
                  Tobias, ein Softwareentwickler aus
                  <em>
                     <GradSpan>Baden-Württemberg</GradSpan>
                  </em>
                  .
               </p>
            </div>
         </div>
      </>
   );
}
