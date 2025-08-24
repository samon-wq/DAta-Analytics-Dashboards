import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, BarChart2, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function LearningDashboard() {
  const [progress, setProgress] = useState(45);

  const data = [
    { name: "Completed", value: 45 },
    { name: "Remaining", value: 55 },
  ];

  const COLORS = ["#4ade80", "#f87171"];

  return (
    <div className="min-h-screen bg-gray-50 p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Sidebar */}
      <motion.div
        className="col-span-1 bg-white rounded-2xl shadow p-4"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="text-blue-500" /> Modules
        </h2>
        <ul className="space-y-3">
          <li className="flex justify-between items-center">
            <span>Intro to AI</span>
            <CheckCircle className="text-green-500" />
          </li>
          <li className="flex justify-between items-center">
            <span>Data Analytics</span>
            <span className="text-yellow-500">In Progress</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Web Development</span>
            <span className="text-gray-400">Locked</span>
          </li>
        </ul>
      </motion.div>

      {/* Main Dashboard */}
      <motion.div
        className="col-span-2 bg-white rounded-2xl shadow p-6"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h1 className="text-2xl font-bold mb-4">Learning Progress</h1>
        <Progress value={progress} className="mb-4" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-4">
            <CardContent>
              <h2 className="text-lg font-semibold flex items-center gap-2 mb-2">
                <BarChart2 className="text-purple-500" /> Progress Overview
              </h2>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="p-4">
            <CardContent>
              <h2 className="text-lg font-semibold mb-2">Next Steps</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Finish Data Analytics Module</li>
                <li>Attempt Practice Quiz</li>
                <li>Unlock Web Development Basics</li>
              </ul>
              <Button className="mt-4 w-full">Continue Learning</Button>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}
