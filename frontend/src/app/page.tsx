import AnimatedBackground from "../modules/auth/componets/AnimatedBackground";
import LoginCard from "../modules/auth/componets/LoginCard";

export default function Home() {
  //add animation to the login card

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
      <LoginCard />
    </main>
  );
}
