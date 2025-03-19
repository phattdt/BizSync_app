import {User2Icon, ArrowDown } from "lucide-react";
import './style.css';
const ClientCard = () => {
  return (
    <div className="dashboard-item bg-[#2C3A58] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="container_ic flex items-center justify-between">
        <div className="container_nd">
          <h2 className="font-bold text-gray-400">New Clients</h2>
          <p className="text-2xl font-bold text-white">-3,052</p>
        </div>
        <div className="p-3 rounded-full bg-green-500">
            <User2Icon className="text-white" size={24} />
        </div>
      </div>
      <div className="mt-4 flex items-center">
        <span className="text-sm text-green-400">
          <ArrowDown size={16} /> -25%
        </span>
        <span className="text-sm text-gray-400 ml-2">Since last month</span>
      </div>
    </div>
  );
};

export default ClientCard;