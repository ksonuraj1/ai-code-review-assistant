export default function Sidebar() {
  const menuItems = [
    {
      label: "Dashboard",
    },
    {
      label: "Review",
    },
    {
      label: "History",
    },
  ];
  return (
    <aside className="w-72 border-r p-4">
      <ul>
        {menuItems.map((item) => (
          <li key={item.label}>{item.label}</li>
        ))}
      </ul>
    </aside>
  );
}
