"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScanMode } from "./ScanMode";
import { ManualMode } from "./ManualMode";

const HarianSiswaClient = ({ dataSiswa, dataKelas }) => {
  return (
    <Tabs defaultValue="scan" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="scan">Scan Barcode</TabsTrigger>
        <TabsTrigger value="manual">Input Manual</TabsTrigger>
      </TabsList>

      {/* scan mode */}
      <TabsContent value="scan" className="mt-4">
        <ScanMode />
      </TabsContent>

      {/* Input Manual */}
      <TabsContent value="manual" className="mt-4">
        <ManualMode dataSiswa={dataSiswa} dataKelas={dataKelas} />
      </TabsContent>
    </Tabs>
  );
};

export default HarianSiswaClient;
