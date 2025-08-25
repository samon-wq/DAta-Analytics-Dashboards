import { useState } from "react";
</h2>
<ul className="space-y-3">
{modules.map((mod, i) => (
<li key={i} className="flex flex-col border-b pb-2">
<div className="flex justify-between items-center">
<span>{mod.title}</span>
{mod.status === "Completed" && <CheckCircle className="text-green-500" />}
{mod.status === "In Progress" && <span className="text-yellow-500">{mod.status}</span>}
{mod.status === "Locked" && <span className="text-gray-400">{mod.status}</span>}
</div>
<span className="text-sm text-gray-500">Problem: {mod.problem}</span>
</li>
))}
</ul>
</motion.div>


{/* Main Dashboard */}
<motion.div
className="col-span-2 bg-white rounded-2xl shadow p-6"
initial={{ y: 50, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
>
<h1 className="text-2xl font-bold mb-4">Problem-Based Learning Progress</h1>
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
<li>Finish AI & Data Analytics Fraud Detection Project</li>
<li>Prepare for Job AI+Python Development</li>
<li>Study basics of Data Analytics Logs</li>
</ul>
<Button className="mt-4 w-full">Continue Learning</Button>
</CardContent>
</Card>
</div>
</motion.div>
</div>
);
}
