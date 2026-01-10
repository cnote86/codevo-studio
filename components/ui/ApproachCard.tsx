type ApproachCardProps = {
  title: string;
  description: string;
  color?: 'blue' | 'teal' | 'purple' | 'green';
};

export default function ApproachCard({
  title,
  description,
}: ApproachCardProps) {
  return (
    <div className="p-4 border border-gray-200 text-center">
      <h3 className="font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}