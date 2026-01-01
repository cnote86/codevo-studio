import Card from "@/components/ui/Card";
import BulletListItem from "@/components/ui/BulletListItem";

type TrainingProjectCardProps = {
  title: string;
  url: string;
  focusItems: string[];
};

export default function TrainingProjectCard({
  title,
  url,
  focusItems
}: TrainingProjectCardProps) {
  return (
    <Card>
      <h3 className="font-bold text-xl mb-4 text-center">
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          {title}
        </a>
      </h3>
      <div className="p-4 bg-blue-50 rounded-lg text-center">
        <h4 className="font-semibold text-gray-700 mb-2">Focus:</h4>
        <ul className="text-gray-700 space-y-1 inline-block">
          {focusItems.map((item, index) => (
            <BulletListItem key={index} color="blue">{item}</BulletListItem>
          ))}
        </ul>
      </div>
    </Card>
  );
}