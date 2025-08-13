interface StatsCardProps {
  title: string;
  value: string;
  color: string;
  icon?: React.ReactNode;
}

export const StatsCard = ({ title, value, color, icon }: StatsCardProps) => (
  <div
    className={`bg-gradient-to-r ${color} p-6 rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
  >
    <div className="flex justify-between items-start">
      <div>
        <h2 className="text-lg font-medium">{title}</h2>
        <p className="text-2xl font-bold mt-2">{value}</p>
      </div>
      {icon && <div className="bg-white/20 p-3 rounded-lg">{icon}</div>}
    </div>
  </div>
);
