import CheckboxLabels from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progressCard";
import './style.css';
const ManagerCard = () => {
  return (
    <div className="container">
    <h2 className="font-bold">Task Management</h2>
    <ul>
      <CheckboxLabels />
    </ul>
    <Progress value={60} />
  </div>
  );
};

export default ManagerCard;