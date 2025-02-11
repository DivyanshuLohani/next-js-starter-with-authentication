import { authOptions } from "@/lib/auth/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import WrapperSignup from "./components/Wrapper";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (session && session.user) {
    redirect("/dashboard");
  }

  return <WrapperSignup>{children}</WrapperSignup>;
}
