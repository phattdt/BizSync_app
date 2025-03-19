import { Card} from "@/components/ui/card";
import "./style.css";
import "react-circular-progressbar/dist/styles.css";
import StatsCard from "@/components/ui/StatsCard";
import UsersCard from "@/components/ui/UsersCard";
import ClientCard from "@/components/ui/ClientCard";
import SalesCard from "@/components/ui/SalesCard";
import InventoryCard from "@/components/ui/InventoryCard";
import EmployeeCard from "@/components/ui/EmployeeCard";
import OrdersCard from "@/components/ui/OrdersCard";
import ManagerCard from "@/components/ui/ManageCard";
import SalesOverviewCard from "@/components/ui/SalesOverviewCard";
import SatisfactionCard from "@/components/ui/SatisfactionCard";


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
          <Card className="dashboard-container">
            <InventoryCard/>
          </Card>

          <Card className="dashboard-container">
            <ManagerCard/>
          </Card>

          <Card className="dashboard-container">
            <OrdersCard/>
          </Card>

          <Card className="dashboard-container">
            <EmployeeCard/>
          </Card>
          <Card className="dashboard-container">
            <SalesOverviewCard/>
          </Card>

          <Card className="dashboard-container">
            <SatisfactionCard/>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
