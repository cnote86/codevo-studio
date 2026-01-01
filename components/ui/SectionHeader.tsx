type SectionHeaderProps = {
  title: string;
  gradient?: string;
};

export default function SectionHeader({ 
  title, 
  gradient = "from-blue-500 to-teal-500" 
}: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-center gap-4 mb-6">
      <div className={`w-10 h-1 bg-gradient-to-r ${gradient} rounded-full`}></div>
      <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
      <div className={`w-10 h-1 bg-gradient-to-r ${gradient} rounded-full`}></div>
    </div>
  );
}