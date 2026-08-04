import DashboardStats from "@/src/components/Dashboard/DashboardStats";
import AppLayout from "@/src/layouts/AppLayout";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <AppLayout>
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        {/* Page Heading */}
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>

          <p className="mt-2 text-gray-600">
            Review your code using AI and improve code quality.
          </p>
        </div>

        {/* Statistics */}
        <DashboardStats />

        {/* Primary Action */}
        <div>
          <Link
            href="/review"
            className="inline-flex items-center rounded-md bg-blue-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            Start New Review
          </Link>
        </div>
      </div>
    </AppLayout>
  );
}
