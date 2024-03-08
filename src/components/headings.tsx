// author: meisto
// date: 2024-03-06 16:00:39

interface HeadingProps {
   heading: string
   children: React.ReactNode
}

export default function Heading({ heading, children }: HeadingProps) {
    const style = " font-bold tracking-tighter";

    switch (heading) {
        case "h1":
            return (
                <h1 className={"sm:text-6xl text-4xl" + style}>{children}</h1>
            );
        case "h2":
            return (
                <h2 className={"sm:text-3xl text-2xl" + style}>{children}</h2>
            );
        case "h3":
            return <h3 className={"sm:text-xl text-lg" + style}>{children}</h3>;

        default:
            return <div>ERROR</div>;
    }
}
