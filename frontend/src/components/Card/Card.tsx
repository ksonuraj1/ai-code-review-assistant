interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
      {children}
    </div>
  );
}
