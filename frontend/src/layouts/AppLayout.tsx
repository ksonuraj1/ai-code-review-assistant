import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="h-full bg-slate-50 text-slate-900 flex flex-col">
      <Navbar />

      <div className="flex flex-1 min-h-0 overflow-hidden">
        <Sidebar />

        <main className="flex-1 min-h-0 overflow-auto py-2 sm:px-6 lg:px-10">
          {children}
        </main>
      </div>
    </div>
  );
}
