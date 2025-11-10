"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ManualModeGuru from "./ManualModeGuru";
import { ScanModeGuru } from "./ScanModeGuru";

const HarianGuruClient = ({ dataGuru }) => {
  return (
    <Tabs defaultValue="scan" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="scan">Scan Barcode</TabsTrigger>
        <TabsTrigger value="manual">Input Manual</TabsTrigger>
      </TabsList>

      {/* scan mode */}
      <TabsContent value="scan" className="mt-4">
        <ScanModeGuru />
      </TabsContent>

      {/* Input Manual */}
      <TabsContent value="manual" className="mt-4">
        <ManualModeGuru dataGuru={dataGuru} />
      </TabsContent>
    </Tabs>
  );
};

export default HarianGuruClient;
