import { CardProps } from "./Card.types";

export default function Card({
  children,
  className = "",
  ...props
}: CardProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}
