import { ReactNode } from "react";

type ContentBoxProps = {
  children: ReactNode;
  color?: 'blue-50' | 'teal-50' | 'purple-50' | 'green-50' | 'blue' | 'purple' | 'green' | 'teal';
  border?: boolean;
};

export default function ContentBox({ 
  children, 
  color = "blue-50", 
  border = false 
}: ContentBoxProps) {
  const bgColor = color === 'blue-50' ? 'bg-blue-50' :
                color === 'teal-50' ? 'bg-teal-50' :
                color === 'purple-50' ? 'bg-purple-50' :
                color === 'green-50' ? 'bg-green-50' :
                color === 'blue' ? 'bg-gradient-to-r from-blue-50 to-blue-100' :
                color === 'purple' ? 'bg-gradient-to-r from-purple-50 to-purple-100' :
                color === 'green' ? 'bg-gradient-to-r from-green-50 to-green-100' :
                color === 'teal' ? 'bg-gradient-to-r from-teal-50 to-teal-100' : 'bg-blue-50';
  
  const borderClass = border ? 
    (color === 'blue' ? 'border border-blue-200' :
     color === 'purple' ? 'border border-purple-200' :
     color === 'green' ? 'border border-green-200' :
     color === 'teal' ? 'border border-teal-200' :
     'border border-blue-200') : '';
  
  return (
    <div className={`p-6 rounded-xl text-center ${bgColor} ${borderClass}`}>
      {children}
    </div>
  );
}