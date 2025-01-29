import { ITexteProps }  from "./Texte.props";

export const Texte: React.FC<ITexteProps> = ({  value }) => {

  return (
    <p>{value}</p>
  );
};