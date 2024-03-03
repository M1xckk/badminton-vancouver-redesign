
interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  return <input type="checkbox" {...props} className="form-checkbox" />;
};
