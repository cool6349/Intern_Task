import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/leaderboard")
      .then((res) => res.json())
      .then(setLeaders);
  }, []);

  return (
    <div className="p-8 bg-gradient-to-r from-purple-100 to-blue-100 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-6 text-center">Leaderboard</h1>
        <ul className="space-y-3">
          {leaders.map((user, idx) => (
            <li key={idx} className="bg-gray-100 p-4 rounded shadow-sm flex justify-between items-center">
              <span className="font-semibold">{idx + 1}. {user.name}</span>
              <span className="text-blue-600 font-medium">₹{user.totalDonations}</span>
            </li>
          ))}
        </ul>
        <Link to="/dashboard" className="block mt-6 text-center text-blue-500 hover:underline">← Back to Dashboard</Link>
      </div>
    </div>
  );
}