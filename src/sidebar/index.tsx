import { Home, Box, ShoppingCart, ListChecks, Users, Settings } from "lucide-react";
import './style.css';
import SearchBar from "@/header/header";
const Sidebar = () => (
  <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
    <div className="header">
    <h2 className="text-xl font-bold mb-4">BizSync</h2>
    </div>
    <ul className="space-y-2">
      {[
        { icon: Home, name: "Dashboard" },
        { icon: Box, name: "Inventory" },
        { icon: ShoppingCart, name: "Orders" },
        { icon: ListChecks, name: "Tasks" },
        { icon: Users, name: "HR Management" },
        { icon: Settings, name: "Settings" },
      ].map(({ icon: Icon, name }) => (
        <li
          key={name}
          className="flex items-center gap-3 p-2 rounded-lg cursor-pointer custom-hover-effect transition-all duration-300"
        >
          <Icon size={20} className="hover:text-[#00BFFF] hover:scale-110 transition-all duration-300" />
          <span className="hover:text-[#00BFFF] transition-all duration-300">{name}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Sidebar;
