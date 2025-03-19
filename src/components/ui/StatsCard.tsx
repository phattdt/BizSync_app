import { DollarSign, ArrowUp } from "lucide-react";
import './style.css';
const StatsCard = () => {
  return (
    <div className="dashboard-item bg-[#2C3A58] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="container_ic flex items-center justify-between">
        <div className="container_nd">
          <h2 className="font-bold text-gray-400">Today's Money</h2>
          <p className="text-2xl font-bold text-white">$53,000</p>
        </div>
        <div className="p-3 rounded-full bg-green-500">
          <DollarSign className="text-white" size={24} />
        </div>
      </div>
      <div className="mt-4 flex items-center">
        <span className="text-sm text-green-400">
          <ArrowUp size={16} /> +55%
        </span>
        <span className="text-sm text-gray-400 ml-2">Since last month</span>
      </div>
    </div>
  );
};

export default StatsCard;