import React from 'react';
import { FaWalking, FaHeartbeat, FaBed, FaTint } from 'react-icons/fa';

const Dashboard = () => {
  const metrics = [
    {
      label: 'Steps Walked',
      value: '8,450',
      unit: 'steps',
      color: 'from-blue-400 to-blue-600',
      icon: <FaWalking size={32} />,
    },
    {
      label: 'Heart Rate',
      value: '76',
      unit: 'BPM',
      color: 'from-red-400 to-red-600',
      icon: <FaHeartbeat size={32} />,
    },
    {
      label: 'Sleep',
      value: '7.2',
      unit: 'hours',
      color: 'from-purple-400 to-purple-600',
      icon: <FaBed size={32} />,
    },
    {
      label: 'Hydration',
      value: '2.1',
      unit: 'liters',
      color: 'from-teal-400 to-teal-600',
      icon: <FaTint size={32} />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-6">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800 drop-shadow-sm">
        Your Health Dashboard
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl shadow-xl bg-gradient-to-br ${metric.color} text-white transform hover:scale-105 transition-transform duration-300`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-lg font-medium">{metric.label}</div>
              <div className="opacity-80">{metric.icon}</div>
            </div>
            <div className="text-3xl font-bold">{metric.value}</div>
            <div className="text-sm mt-1 opacity-90">{metric.unit}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;