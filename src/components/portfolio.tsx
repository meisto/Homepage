// author: meisto
// date: 2024-03-07 23:18:42

type Project = {
    name: string;
    link: string;
    description: string;
    tags: string[];
};

const myProjects: Project[] = [
    {
        name: "Sample Project 1",
        link: "http://t-online.de",
        description: "A sample project.",
        tags: [],
    },
    {
        name: "Sample Project 1",
        link: "http://t-online.de",
        description: "A sample project.",
        tags: [],
    },
    {
        name: "DnD State Tracker",
        link: "http://t-online.de",
        description: "A sample project.",
        tags: ["Python", "Svelte", "FastAPI"],
    },
];

function ProjectCard({ project }) {
    return (
        <div className="sm:w-[clamp(350px,45%,400px)] sm:aspect-[3/2] w-full sm:px-4 sm:py-2 sm:rounded-lg sm:border sm:shadow-lg border-[#87AF87]/75 h-fit select-none transition-transform hover:translate-y-1 flex flex-col justify-between">
            <h4 className="font-bold sm:text-lg text-sm">{project.name}</h4>
            <p className="sm:text-base text-sm grow">{project.description}</p>

            <div className="flex flex-row justify-between items-center">
                <ul className="flex flex-row gap-2 justify-center flex-wrap mt-2">
                    {project.tags.map((x) => (
                        <li className="p-1 bg-[#58729e] rounded-lg italic text-sm">
                            {x}
                        </li>
                    ))}
                </ul>
                <a href={project.link} className="mx-1 hover:underline">
                    &rarr; Link
                </a>
            </div>
        </div>
    );
}

export default function PortfolioPane() {
    return (
        <>
            <h2 className="sm:text-3xl text-2xl font-bold tracking-tighter text-center">
                Portfolio
            </h2>
            <p className="text-center">Dies sind einige meiner Projekte.</p>

            <div className="flex flex-row gap-y-4 gap-x-4 justify-center w-full flex-wrap mt-4 w-full">
                {myProjects.map((x) => (
                    <ProjectCard project={x} />
                ))}
            </div>
        </>
    );
}
