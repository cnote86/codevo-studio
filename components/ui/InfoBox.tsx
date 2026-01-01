import { ReactNode } from "react";

type InfoBoxProps = {
  children: ReactNode;
  className?: string;
};

export default function InfoBox({ children, className = "" }: InfoBoxProps) {
  return (
    <div className={`p-4 rounded-lg text-center ${className}`}>
      {children}
    </div>
  );
}