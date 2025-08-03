import { useEffect, useState } from "react";
import axios from "axios";

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/leaderboard`).then((res) => {
      setLeaders(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Leaderboard</h1>
      <ol>
        {leaders.map((user, index) => (
          <li key={index}>
            {user.name} - ₹{user.totalDonations}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Leaderboard;
