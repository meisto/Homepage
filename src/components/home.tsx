// author: meisto
// date: 2024-03-07 23:30:28

import Heading from "./headings";
import GradSpan from "./gradspan";

export default function HomePane() {
    return (
        <>
            <div>
                <Heading heading="h2">
                    <span className="text-gray-300/50">meisto</span>
                </Heading>
                <Heading heading="h1">
                    <GradSpan colorscheme="mine">Entwickler</GradSpan>
                    <br />
                    <span className="text-gray-300/50 mx-1">&amp;</span>
                    <GradSpan colorscheme="mine">Enthusiast</GradSpan>
                </Heading>
                <p className="w-3/4">
                    Hallo und herzlich wilkommen auf meiner Webseite. Ich bin
                    ein Softwareentwickler aus{" "}
                    <em>
                        <GradSpan colorscheme="mine">
                            Baden-Württemberg
                        </GradSpan>
                    </em>
                    .
                </p>
            </div>
        </>
    );
}
