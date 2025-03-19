import {User2Icon, ArrowDown } from "lucide-react";
import {
    PieChart,
    Pie,
    Cell,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    LineChart,
  } from "recharts";
import './style.css';
const InventoryCard = () => {
    const inventoryData = [
        { name: "Jan", stock: 120 },
        { name: "Feb", stock: 150 },
        { name: "Mar", stock: 90 },
        { name: "Mar", stock: 90 },
        { name: "Mar", stock: 200 },
      ];
  return (
    <div className="container">
    <h2 className="font-bold">Inventory Overview</h2>
    <p>Total Items: 1,234</p>
    <ResponsiveContainer width="100%" height={100}>
      <BarChart data={inventoryData}>
        <XAxis dataKey="name" stroke="#ffffff" />
        <YAxis stroke="#ffffff" />
        <Tooltip />
        <Bar dataKey="stock" fill="#00BFFF" />
      </BarChart>
    </ResponsiveContainer>
  </div>
  );
};

export default InventoryCard;