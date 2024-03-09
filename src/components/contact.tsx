// author: meisto
// date: 2024-03-07 23:22:34

import { Github, Mail, Linkedin } from 'lucide-react';

import Heading from './headings';
import GradSpan from './gradspan';

export default function ContactPane() {
   return (
      <>
         <Heading heading="h2">
            <GradSpan>Kontakt</GradSpan>
         </Heading>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis
            donec et odio pellentesque diam volutpat commodo sed egestas. Vitae
            turpis massa sed elementum tempus egestas sed sed. Phasellus
            vestibulum lorem sed risus ultricies tristique. Viverra suspendisse
            potenti nullam ac tortor vitae purus. At in tellus integer feugiat
            scelerisque varius morbi enim nunc. Mattis rhoncus urna neque
            viverra. Ipsum a arcu cursus vitae congue mauris. Enim sed faucibus
            turpis in eu mi. Tellus cras adipiscing enim eu turpis egestas.
            Lectus urna duis convallis convallis tellus id interdum velit
            laoreet. Interdum consectetur libero id faucibus. Sit amet mauris
            commodo quis imperdiet massa tincidunt nunc. Morbi leo urna molestie
            at elementum eu facilisis. Non pulvinar neque laoreet suspendisse
            interdum consectetur libero. Lobortis mattis aliquam faucibus purus
            in massa. Sodales ut eu sem integer vitae justo eget magna
            fermentum. Feugiat nibh sed pulvinar proin gravida hendrerit lectus.
            Nulla aliquet porttitor lacus luctus accumsan.
         </p>
         <Github />
         <Mail />
         <Linkedin />
      </>
   );
}
