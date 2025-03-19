  import './style.css';
  const SalesOverviewCard = () => {
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
        <div className="container">
        <h2 className="font-bold">Sales Overview</h2>
        {/* <LineChart width={400} height={200} data={salesData}>
        Add LineChart Components
      </LineChart> */}
      </div>
    );
  };
  
  export default SalesOverviewCard;