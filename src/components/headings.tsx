// author: meisto
// date: 2024-03-06 16:00:39

import GradSpan from './gradspan';

interface HeadingProps {
   heading: string;
   children: React.ReactNode;
   className: string;
}

export default function Heading({
   heading,
   children,
   className,
}: HeadingProps) {
   const style = ' font-bold tracking-tighter font-didot ' + className;

   switch (heading) {
      case 'h1':
         return (
            <h1 className={'sm:text-6xl text-4xl' + style}>
               <GradSpan>{children}</GradSpan>
            </h1>
         );
      case 'h2':
         return (
            <h2 className={'sm:text-3xl text-2xl' + style}>
               <GradSpan>{children}</GradSpan>
            </h2>
         );
      case 'h3':
         return (
            <h3 className={'sm:text-xl text-lg' + style}>
               <GradSpan>{children}</GradSpan>
            </h3>
         );

      default:
         return <div>ERROR</div>;
   }
}
