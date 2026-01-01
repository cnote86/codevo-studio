import { ReactNode } from "react";
import Card from "@/components/ui/Card";

type ProjectCardProps = {
  title: string;
  url?: string;
  badge: string;
  badgeColor: string;
  role: string;
  description: string | ReactNode;
  additionalContent?: ReactNode;
};

export default function ProjectCard({
  title,
  url,
  badge,
  badgeColor,
  role,
  description,
  additionalContent,
}: ProjectCardProps) {
  const titleElement = url ? (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline"
    >
      {title}
    </a>
  ) : (
    <span className="text-gray-900">{title}</span>
  );

  return (
    <Card>
      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
        <h3 className="text-2xl font-bold text-center flex-1 min-w-[200px]">
          {titleElement}
        </h3>
        <span className={`px-4 py-2 bg-gradient-to-r ${badgeColor} text-white text-sm font-semibold rounded-full shadow-sm`}>
          {badge}
        </span>
      </div>
      
      <div className="mb-6 p-4 bg-blue-50 rounded-lg text-center">
        <h4 className="font-semibold text-gray-700 mb-2">Role:</h4>
        <p className="text-gray-700">{role}</p>
      </div>
      
      <div className="mb-6 text-center">
        <h4 className="font-semibold text-gray-700 mb-2">
          {typeof description === 'string' ? 'What I did:' : 'Description:'}
        </h4>
        {typeof description === 'string' ? (
          <p className="text-gray-700">{description}</p>
        ) : (
          <div className="text-left">{description}</div>
        )}
      </div>
      
      {additionalContent && <div className="text-center">{additionalContent}</div>}
    </Card>
  );
}