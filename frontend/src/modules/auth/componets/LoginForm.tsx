"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/src/components/CoreComponent/Button";
import Input from "@/src/components/CoreComponent/Input";
import { saveUserSession } from "@/src/utils/auth";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("Please enter email and password.");
      return;
    }
    saveUserSession({
      username: email.split("@")[0],
    });
    router.push("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setError("");
        }}
      />

      <Input
        label="Password"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setError("");
        }}
      />

      {error && <p className="text-sm text-red-500">{error}</p>}

      <Button
        type="submit"
        fullWidth
        disabled={!email || !password}
        className="mt-4"
      >
        Login
      </Button>
    </form>
  );
}
