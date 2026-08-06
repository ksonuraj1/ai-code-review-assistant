import { ReactNode } from "react";

import Navbar from "@/src/components/Navbar/Navbar";
import Sidebar from "@/src/components/Sidebar/Sidebar";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="h-screen overflow-hidden bg-slate-950 text-slate-100">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Sidebar + Content */}
      <div className="flex h-[calc(100vh-64px)]">
        {/* Fixed Sidebar */}
        <Sidebar />

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
