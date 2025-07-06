import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-3xl font-semibold mb-8">Welcome, User</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <MetricCard label="Steps" value="8500" icon="🚶‍♂" bg="bg-blue-100" />
        <MetricCard label="Sleep" value="7 hrs" icon="🛏" bg="bg-purple-100" />
        <MetricCard label="Hydration" value="2.5 L" icon="💧" bg="bg-blue-200" />
        <MetricCard label="Heart Rate" value="78 bpm" icon="❤" bg="bg-pink-100" />
      </div>
    </div>
  );
};

const MetricCard = ({ label, value, icon, bg }) => (
  <div className={${bg} rounded-xl p-6 shadow-md text-center}>
    <div className="text-4xl mb-2">{icon}</div>
    <h2 className="text-xl font-medium">{label}</h2>
    <p className="text-2xl font-bold mt-2">{value}</p>
  </div>
);

export default Dashboard;