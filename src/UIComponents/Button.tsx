import Link from "next/link";
type ButtonProps = {
  url: string;
  label: string;
  type?: string;
  color?: string;
};

const Button = ({ url, label, type, color }: ButtonProps) => {
  const buttonType = type ? type : "button";

  return (
    <Link href={url}>
      <button className={`${buttonType} ${color}`}>{label}</button>
    </Link>
  );
};

export default Button;
