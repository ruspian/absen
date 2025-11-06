"use client";

import Breadcrumb from "@/components/Breadcrumb";
import AdminDashboard from "@/components/dashboard/AdminDashboard";
import GuruDashboard from "@/components/dashboard/GuruDashboard";
import PiketDashboard from "@/components/dashboard/PiketDashboard";
import { useSession } from "next-auth/react";
import React from "react";

const DashboardPage = () => {
  const session = useSession();

  return (
    <div>
      <Breadcrumb />

      {session.data.user.role === "ADMIN" && <AdminDashboard />}

      {session.data.user.role === "GURU" &&
        session.data.user.isPiket === false && <GuruDashboard />}

      {session.data.user.role === "GURU" &&
        session.data.user.isPiket === true && <PiketDashboard />}
    </div>
  );
};

export default DashboardPage;
