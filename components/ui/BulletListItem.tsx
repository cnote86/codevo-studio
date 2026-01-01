import { ReactNode } from "react";

type BulletListItemProps = {
  children: ReactNode;
  color?: 'blue' | 'purple' | 'green' | 'teal';
};

export default function BulletListItem({ 
  children, 
  color = 'blue' 
}: BulletListItemProps) {
  const textColor = `text-${color}-500`;
  
  return (
    <li className="flex items-start gap-3">
      <span className={`${textColor} font-bold mt-1`}>•</span>
      <span className="text-gray-700">{children}</span>
    </li>
  );
}