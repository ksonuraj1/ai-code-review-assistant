import { dashboardStats } from "@/src/constants/dashboard";
import Card from "../Card/Card";

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-2 gap-8 p-1">
      {dashboardStats.map((stat) => (
        <Card key={stat.title}>
          <h3 className="text-sm text-gray-500">{stat.title}</h3>

          <p className="mt-2 text-3xl font-bold">{stat.value}</p>
        </Card>
      ))}
    </div>
  );
}
