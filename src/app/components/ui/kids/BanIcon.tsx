
const BanIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
          <circle cx="12" cy="12" r="10" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      );
    };
    
    export default BanIcon;
    