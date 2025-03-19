import { DollarSign, ArrowDown, ArrowUp,  User2Icon } from "lucide-react";
import './style.css';
const UsersCard = () => {
  const changePercentage = 5;
  const isIncrease = changePercentage > 0;
  const changeAbsolute = Math.abs(changePercentage);
  return (
    <div className="dashboard-item bg-[#2C3A58] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="container_ic flex items-center justify-between">
        <div className="container_nd">
          <h2 className="font-bold text-gray-400">Today's Users</h2>
          <p className="text-2xl font-bold text-white">2,300</p>
        </div>
        <div className="p-3 rounded-full bg-green-500">
            <User2Icon className="text-white" size={24} />
        </div>
      </div>
      <div className="mt-4 flex items-center">
      <span className={`text-sm ${isIncrease ? 'text-green-400' : 'text-red-400'}`}>
      {isIncrease ? <ArrowUp size={16} /> : <ArrowDown size={16} />} {changeAbsolute}%
        </span>
        <span className="text-sm text-gray-400 ml-2">Since last month</span>
      </div>
    </div>
  );
};

export default UsersCard;