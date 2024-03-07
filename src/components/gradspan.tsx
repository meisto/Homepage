// author: meisto
// date: 2024-03-06 16:24:58

export default function GradSpan({ children, colorscheme }) {
    const gradientStyles = {
        sunrise: " bg-gradient-to-b from-yellow-600 to-red-600",
        gunmetal: " bg-gradient-to-b from-gray-200 via-gray-400 to-gray-600",
        mine: " bg-gradient-to-b from-gray-200 via-[#87AF87] to-[#87AF87]",
    };
    const gradientStyle =
        gradientStyles[colorscheme in gradientStyles ? colorscheme : "core"];
    const background = " bg-clip-text text-transparent";

    return <span className={gradientStyle + background}>{children}</span>;
}
