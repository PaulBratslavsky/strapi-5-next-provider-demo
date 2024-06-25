import { LogoutButton } from "@/components/Logout";
import React from "react";

export default function Dashboard() {
  return <div className="container mx-auto flex justify-between items-center my-4">
    <h2 className="text-xl">Dashboard</h2>
    <LogoutButton />
  </div>;
}
