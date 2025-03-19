import { Card, CardContent } from "@/components/ui/card";
import CheckboxLabels from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
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
import "./style.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import StatsCard from "@/components/ui/StatsCard";
import UsersCard from "@/components/ui/UsersCard";
import ClientCard from "@/components/ui/ClientCard";
import SalesCard from "@/components/ui/SalesCard";


const Dashboard = () => {
  const inventoryData = [
    { name: "Jan", stock: 120 },
    { name: "Feb", stock: 150 },
    { name: "Mar", stock: 90 },
  ];
  const hrData = [
    { name: "Present", value: 40, color: "#00BFFF" },
    { name: "Absent", value: 10, color: "#FF4D4D" },
  ];
  const salesData = [
    { month: "Jan", sales: 30 },
    { month: "Feb", sales: 40 },
    { month: "Mar", sales: 35 },
    { month: "Apr", sales: 50 },
    { month: "May", sales: 55 },
    { month: "Jun", sales: 60 },
    { month: "Jul", sales: 45 },
    { month: "Aug", sales: 70 },
    { month: "Sep", sales: 65 },
    { month: "Oct", sales: 75 },
    { month: "Nov", sales: 80 },
    { month: "Dec", sales: 90 },
  ];

  return (
    <div className="p-6 w-full text-white bg-[#1A233A] min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid_layout grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="dashboard-item">
                <StatsCard/>
          </Card>

          <Card className="dashboard-item">
                <UsersCard/>
          </Card>

          <Card className="dashboard-item">
            <ClientCard/>
          </Card>
          <Card className="dashboard-item">
            <SalesCard/>
          </Card>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="dashboard-item">
            <CardContent>
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
            </CardContent>
          </Card>

          <Card className="dashboard-container">
            <CardContent>
              <div className="container">
                <h2 className="font-bold">Task Management</h2>
                <ul>
                  <CheckboxLabels />
                </ul>
                <Progress value={60} />
              </div>
            </CardContent>
          </Card>

          <Card className="dashboard-container">
            <CardContent>
              <div className="container">
                <h2 className="font-bold">Recent Orders</h2>
                <p>Order ID: 12345 | Status: Pending</p>
              </div>
            </CardContent>
          </Card>

          <Card className="dashboard-container">
            <CardContent>
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
            </CardContent>
          </Card>
          <Card className="dashboard-container">
            <CardContent>
              <div className="container">
                <h2 className="font-bold">Sales Overview</h2>
                {/* <LineChart width={400} height={200} data={salesData}>
                Add LineChart Components
              </LineChart> */}
              </div>
            </CardContent>
          </Card>

          <Card className="dashboard-container">
            <CardContent>
              <div className="container">
                <h2 className="font-bold">Satisfaction Rate</h2>
                {/* <CircularProgressbar
                value={95}
                text={`95%`}
                styles={buildStyles({ pathColor: "#4caf50" })}
              /> */}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
