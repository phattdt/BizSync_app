import CheckboxLabels from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progressCard";
import './style.css';
const OrdersCard = () => {
  return (
    <div className="container">
    <h2 className="font-bold">Recent Orders</h2>
    <p>Order ID: 12345 | Status: Pending</p>
  </div>
  );
};

export default OrdersCard;