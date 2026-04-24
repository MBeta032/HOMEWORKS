interface Props {
  text: string;
  type: "submit" | "button";
  onClick?: () => void;
}

export const Button = ({ text, type, onClick }: Props) => {
  return (
    <button type={type} onClick={onClick} className="button">
      {text}
    </button>
  );
};