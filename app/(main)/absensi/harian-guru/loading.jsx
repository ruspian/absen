"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Loading() {
  return (
    <div>
      <Breadcrumb />
      <div className="flex-1 space-y-4 p-8 pt-6">
        {/* Ini adalah skeleton yang niru 'HarianSiswaClient' */}
        <Tabs defaultValue="scan" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="scan">
              <Skeleton className="h-5 w-3/4" />
            </TabsTrigger>
            <TabsTrigger value="manual">
              <Skeleton className="h-5 w-3/4" />
            </TabsTrigger>
          </TabsList>

          {/* Skeleton untuk Tab 1 (Scan) */}
          <TabsContent value="scan" className="mt-4">
            <div className="flex flex-col gap-4">
              <Skeleton className="h-8 w-1/2 self-center" />
              <Skeleton className="h-12 w-full" />
              <div className="p-4 border rounded-md h-96 overflow-y-auto">
                <Skeleton className="h-5 w-1/3 mb-4" />
                <Skeleton className="h-10 w-full mb-2" />
                <Skeleton className="h-10 w-full mb-2" />
                <Skeleton className="h-10 w-full mb-2" />
              </div>
            </div>
          </TabsContent>

          {/* Skeleton untuk Tab 2 (Manual) */}
          <TabsContent value="manual" className="mt-4">
            <div className="flex flex-col gap-4">
              {/* Skeleton Filter */}
              <div className="flex gap-4">
                <Skeleton className="h-10 w-[180px]" />
                <Skeleton className="h-10 w-[180px]" />
              </div>
              {/* Skeleton Tabel */}
              <div className="rounded-md border h-96 overflow-y-auto">
                <div className="flex flex-col">
                  <Skeleton className="h-16 w-full border-b" />
                  <Skeleton className="h-16 w-full border-b" />
                  <Skeleton className="h-16 w-full border-b" />
                  <Skeleton className="h-16 w-full border-b" />
                  <Skeleton className="h-16 w-full border-b" />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
