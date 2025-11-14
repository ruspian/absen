"use client";

import Breadcrumb from "@/components/Breadcrumb";
import AdminDashboard from "@/components/dashboard/AdminDashboard";
import GuruDashboard from "@/components/dashboard/GuruDashboard";
import PiketDashboard from "@/components/dashboard/PiketDashboard";
import { Skeleton } from "@/components/ui/skeleton";
import { formatTanggalID } from "@/lib/formatTime";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const DashboardPage = () => {
  const { data: sessionData, status } = useSession();

  if (status === "loading") {
    return <Skeleton className="h-6 w-1/3 rounded-sm" />;
  }

  if (status === "unauthenticated") {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">AKSES DITOLAK!</h1>
        <p>
          Silahkan login terlebih dahulu <Link href="/">disini</Link>{" "}
        </p>
      </div>
    );
  }

  const { user } = sessionData;

  return (
    <div>
      <Breadcrumb />

      <div className="flex items-center justify-end gap-2 ">
        <h1 className=" border rounded-sm px-4 py-2 text-xs ml-2">
          {user?.role === "ADMIN"
            ? "ADMIN"
            : user?.role === "GURU" && user?.isPiket === false
            ? "GURU MAPEL"
            : "GURU PIKET"}
        </h1>

        <h1 className=" border rounded-sm px-4 py-2 text-xs">
          {formatTanggalID(new Date())}
        </h1>
      </div>

      {user.role === "ADMIN" && <AdminDashboard />}

      {user.role === "GURU" && user.isPiket === false && (
        <GuruDashboard session={sessionData} />
      )}

      {user.role === "GURU" && user.isPiket === true && (
        <PiketDashboard session={sessionData} />
      )}
    </div>
  );
};

export default DashboardPage;
