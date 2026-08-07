import Card from "@/src/components/CoreComponent/Card";
import LoginHeader from "./LoginHeader";
import LoginForm from "./LoginForm";

export default function LoginCard() {
  return (
    <Card className="w-full max-w-md rounded-2xl border border-slate-800 p-8">
      <LoginHeader />
      <LoginForm />
    </Card>
  );
}
