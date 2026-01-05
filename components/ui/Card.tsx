import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}
