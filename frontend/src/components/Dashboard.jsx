import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/dashboard")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-4 text-center">Intern Dashboard</h1>
        {data && (
          <div className="space-y-4 text-gray-800">
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Referral Code:</strong> {data.referralCode}</p>
            <p><strong>Total Donations Raised:</strong> ₹{data.totalDonations}</p>

            <div className="mt-6">
              <h2 className="text-xl font-semibold">Rewards / Unlockables</h2>
              <ul className="list-disc ml-6 mt-2 text-gray-700">
                <li>🥉 Bronze Badge (₹1000)</li>
                <li>🥈 Silver Badge (₹3000)</li>
                <li>🥇 Gold Badge (₹5000)</li>
                <li>🏆 Platinum Trophy (₹10000)</li>
                <li>🎁 Surprise Gift (₹20000)</li>
              </ul>
            </div>
          </div>
        )}
        <Link to="/leaderboard" className="block mt-6 text-center text-blue-500 hover:underline">View Leaderboard</Link>
      </div>
    </div>
  );
}