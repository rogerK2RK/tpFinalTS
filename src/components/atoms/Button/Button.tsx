import { IButtonProps } from "./Button.props";


export const Button: React.FC<IButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
    >
      {label}
    </button>
  );
};
