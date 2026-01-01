type ApproachCardProps = {
  title: string;
  description: string;
  color: 'blue' | 'teal' | 'purple' | 'green';
};

export default function ApproachCard({
  title,
  description,
  color
}: ApproachCardProps) {
  const bgColor = color === 'blue' ? 'bg-blue-50' :
                color === 'teal' ? 'bg-teal-50' :
                color === 'purple' ? 'bg-purple-50' :
                color === 'green' ? 'bg-green-50' : 'bg-blue-50';
  
  return (
    <div className={`p-4 rounded-lg text-center ${bgColor}`}>
      <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  );
}