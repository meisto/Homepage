// author: meisto
// date: 2024-03-07 23:18:42
//
import Heading from './headings';

type Project = {
   name: string;
   link: string;
   description: string;
   tags: string[];
};

const myProjects: Project[] = [
   {
      name: 'Homepage',
      link: 'https://github.com/meisto/meisto.github.io',
      description: 'A sample project.',
      tags: ["React", "TailwindCSS", "vite"],
   },
   {
      name: 'Sample Project 1',
      link: 'http://t-online.de',
      description: 'A sample project.',
      tags: [],
   },
   {
      name: 'DnD Combat Tracker',
      link: 'https://github.com/meisto/DnD-Combat-Tracker',
      description: 'A sample project.',
      tags: ['Python', 'Svelte', 'FastAPI'],
   },
];

function ProjectCard({ project }: { project: Project }) {
   return (
      <div className="sm:w-[clamp(350px,45%,400px)] sm:aspect-[4/2] w-full sm:px-4 sm:py-2 sm:rounded-lg sm:border sm:shadow-lg border-[#87AF87]/75 h-fit select-none transition-transform hover:translate-y-1 flex flex-col justify-between hover:bg-green/20">
         <h4 className="font-bold sm:text-lg text-sm">{project.name}</h4>
         <p className="sm:text-base text-sm grow">{project.description}</p>

         <div className="flex flex-row justify-between items-center">
            <ul className="flex flex-row gap-2 justify-center flex-wrap mt-2">
               {project.tags.map((x: string) => (
                  <li className="p-1 bg-[#58729e] rounded-lg italic text-sm">
                     {x}
                  </li>
               ))}
            </ul>
            <a href={project.link} target="_blank" className="mx-1 hover:underline">
               &rarr; Link
            </a>
         </div>
      </div>
   );
}

export default function PortfolioPane() {
   return (
      <>
         <Heading heading="h2" className="text-center">
            Portfolio
         </Heading>
         <p className="text-center">Dies sind einige meiner persönlichen Projekte.</p>

         <div className="flex flex-row gap-y-4 gap-x-4 justify-center w-full flex-wrap mt-4 w-full">
            {myProjects.map((x) => (
               <ProjectCard project={x} />
            ))}
         </div>
      </>
   );
}
