// Assuming you place this in your icons directory
const ExpandIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
      return (
        <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      );
    };
    
    export default ExpandIcon;
    