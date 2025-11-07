"use client";

import Breadcrumb from "@/components/Breadcrumb";
import AdminDashboard from "@/components/dashboard/AdminDashboard";
import GuruDashboard from "@/components/dashboard/GuruDashboard";
import PiketDashboard from "@/components/dashboard/PiketDashboard";
import { formatTanggalID } from "@/lib/formatTanggalID";
import { useSession } from "next-auth/react";
import React from "react";

const DashboardPage = () => {
  const session = useSession();

  return (
    <div>
      <Breadcrumb />

      <div className="flex items-center justify-end gap-2 ">
        <h1 className=" border rounded-sm px-4 py-2 text-xs ml-2">
          {session.data.user.role === "ADMIN"
            ? "ADMIN"
            : session.data.user.role === "GURU" &&
              session.data.user.isPiket === false
            ? "GURU MAPEL"
            : "GURU PIKET"}
        </h1>

        <h1 className=" border rounded-sm px-4 py-2 text-xs">
          {formatTanggalID(new Date())}
        </h1>
      </div>

      {session.data.user.role === "ADMIN" && <AdminDashboard />}

      {session.data.user.role === "GURU" &&
        session.data.user.isPiket === false && <GuruDashboard />}

      {session.data.user.role === "GURU" &&
        session.data.user.isPiket === true && <PiketDashboard />}
    </div>
  );
};

export default DashboardPage;
