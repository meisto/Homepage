// author: meisto
// date: 2024-03-07 23:33:01

import { Check } from 'lucide-react';

import Heading from './headings';

const itemsFrontend = ['TypeScript', 'HTML, CSS, JavaScript', 'React', 'Svelte'];
const itemsBackend = ['Linux', 'Python', 'FastAPI', 'Go'];
const itemsDevOps = ['Docker (Compose)', 'Ansible', 'GitHub Actions']

interface ListProps {
   heading?: string;
   items: string[];
}

function ListItem({ content }: {content: string}) {
   return (
      <li className="flex gap-2 m-2">
         <Check color="#87AF87" />
         <span className="font-bold">{content}</span>
      </li>
   );
}

function List({ items, heading }: ListProps) {
   return (
      <div className="w-full w-fit">
         {heading && <h2 className="w-full font-bold text-xl">{heading}</h2>}
         <ul>
            {items.map((x) => (
               <ListItem content={x} />
            ))}
         </ul>
      </div>
   );
}

export default function AboutPane() {
   return (
      <>
         <Heading heading="h2" className="text-2xl text-center">
            Über
         </Heading>
         <p className="py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar
            elementum integer enim neque volutpat ac tincidunt vitae semper.
            Faucibus et molestie ac feugiat sed lectus vestibulum. Lectus mauris
            ultrices eros in cursus turpis massa. Lacus laoreet non curabitur
            gravida arcu ac tortor dignissim. Neque laoreet suspendisse interdum
            consectetur libero id faucibus. Egestas sed sed risus pretium. In
            ante metus dictum at tempor commodo ullamcorper. Libero nunc
            consequat interdum varius sit. Tellus in metus vulputate eu. Quam
            lacus suspendisse faucibus interdum. Ultrices neque ornare aenean
            euismod elementum nisi quis. Mus mauris vitae ultricies leo integer.
            Curabitur gravida arcu ac tortor dignissim. Adipiscing bibendum est
            ultricies integer quis. Cras ornare arcu dui vivamus arcu. Ut
            tristique et egestas quis. Mi eget mauris pharetra et ultrices neque
            ornare.
         </p>
         <div className="flex flex-row justify-around items-start w-full flex-wrap">
            <List items={itemsFrontend} heading="Frontend" />
            <List items={itemsBackend} heading="Backend" />
            <List items={itemsDevOps} heading="DevOps" />
         </div>
      </>
   );
}
