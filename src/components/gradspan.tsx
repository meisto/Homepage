// author: meisto
// date: 2024-03-06 16:24:58

type GradSpanProps = {
   children: React.ReactNode;
};

export default function GradSpan({ children }: GradSpanProps) {
   return (
      <span className="bg-gradient-to-br from-[#87AF87] to-green bg-clip-text text-transparent">
         {' '}
         {children}
      </span>
   );
}
