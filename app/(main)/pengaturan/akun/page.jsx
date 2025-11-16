// Paksa halaman ini jadi dinamis agar dapat data terbaru
export const dynamic = "force-dynamic";

import AkunClient from "@/components/AkunClient";
import Breadcrumb from "@/components/Breadcrumb";
import { prisma } from "@/lib/prisma";
import React from "react";

const AkunPage = async () => {
  // Ambil semua data 'User'
  const users = await prisma.user.findMany({
    include: {
      //  Ambil data guruProfil yang nempel
      guruProfil: true,
    },
    orderBy: {
      role: "asc",
    },
  });

  // Format data buat tabel
  const formattedData = users.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  }));

  return (
    <div>
      <Breadcrumb />
      <div className="flex-1 space-y-4 p-8 pt-6">
        <AkunClient data={formattedData} />
      </div>
    </div>
  );
};

export default AkunPage;
