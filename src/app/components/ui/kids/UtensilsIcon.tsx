// components/icons/UtensilsIcon.tsx
const UtensilsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
          <path d="M7 2v20" />
          <path d="M21 15V2a5 5 0 0 0-5 5v6a2 2 0 0 0 2 2h3z" />
          <path d="M21 15v7" />
        </svg>
      );
    };
    
    export default UtensilsIcon;
    