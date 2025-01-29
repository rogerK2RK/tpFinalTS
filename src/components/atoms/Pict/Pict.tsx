import { IPictProps }  from "./Pict.props";

export const Pict: React.FC<IPictProps> = ({  src, alt }) => {

  return (
    <img className="title" src={src} alt={alt}/>
  );
};