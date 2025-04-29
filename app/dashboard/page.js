'use client';

import { motion } from 'framer-motion';
import { FiFolder, FiCode, FiMail, FiTrendingUp } from 'react-icons/fi';

export default function DashboardPage() {
  const stats = [
    { title: "Total Projects", value: "10", icon: <FiFolder className="text-2xl" />, color: "bg-blue-100 text-blue-600" },
    { title: "Total Skills", value: "25", icon: <FiCode className="text-2xl" />, color: "bg-green-100 text-green-600" },
    { title: "Unread Messages", value: "3", icon: <FiMail className="text-2xl" />, color: "bg-purple-100 text-purple-600" },
    { title: "Monthly Growth", value: "12%", icon: <FiTrendingUp className="text-2xl" />, color: "bg-orange-100 text-orange-600" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Dashboard Overview</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`${stat.color} p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow`}
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium">{stat.title}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </div>
              <div className="p-2 rounded-full bg-white bg-opacity-30">
                {stat.icon}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h3 className="font-semibold text-lg mb-4">Recent Activity</h3>
          {/* Activity items would go here */}
          <div className="text-gray-500 text-center py-8">No recent activity</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h3 className="font-semibold text-lg mb-4">Quick Actions</h3>
          {/* Quick action buttons would go here */}
          <div className="text-gray-500 text-center py-8">No quick actions available</div>
        </div>
      </div>
    </motion.div>
  );
}