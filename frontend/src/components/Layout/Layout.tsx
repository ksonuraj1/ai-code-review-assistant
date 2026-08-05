import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />

      <div>
        <Sidebar />

        <main className="flex-1 p-4">{children}</main>
      </div>
    </>
  );
}
