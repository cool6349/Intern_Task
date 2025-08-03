import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/dashboard`).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {data && (
        <>
          <p><strong>Intern Name:</strong> {data.name}</p>
          <p><strong>Referral Code:</strong> {data.referralCode}</p>
          <p><strong>Total Donations:</strong> ₹{data.totalDonations}</p>
          <h3>Rewards / Unlockables</h3>
          <ul>
            <li>🌟 Bronze Badge (₹1000+)</li>
            <li>🥈 Silver Badge (₹3000+)</li>
            <li>🥇 Gold Badge (₹5000+)</li>
            <li>🎁 Custom T-shirt (₹7000+)</li>
          </ul>
        </>
      )}
    </div>
  );
};

export default Dashboard;