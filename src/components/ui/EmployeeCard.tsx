import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import './style.css';
const EmployeeCard = () => {
  const hrData = [
    { name: "Present", value: 40, color: "#00BFFF" },
    { name: "Absent", value: 10, color: "#FF4D4D" },
    { name: "Absent", value: 50, color: "#1E90FF" },
  ];
  return (
      <div className="container">
        <h2 className="font-bold">Employee Overview</h2>
        <ResponsiveContainer width="100%" height={100}>
          <PieChart>
            <Pie
              data={hrData}
              cx="50%"
              cy="50%"
              outerRadius={40}
              dataKey="value"
            >
              {hrData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
  );
};

export default EmployeeCard;