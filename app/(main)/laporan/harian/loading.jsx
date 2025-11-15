import { Skeleton } from "@/components/ui/skeleton";

export default function SiswaLoading() {
  return (
    <div className="flex flex-col space-y-6">
      {/* Skeleton untuk Breadcrumb */}
      <Skeleton className="h-6 w-1/3 rounded-sm" />

      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-1/3 rounded-sm" />
        <Skeleton className="h-2 w-1/3 rounded-sm" />
      </div>

      {/*  Skeleton untuk statistik */}
      <div className="flex gap-2 justify-between">
        <Skeleton className="h-30 w-full rounded-xl" />
        <Skeleton className="h-30 w-full rounded-xl" />
      </div>

      <div className="flex gap-4 justify-between">
        <Skeleton className="h-10 w-1/3 rounded-xl" />
        <div className="flex gap-2 w-1/3">
          <Skeleton className="h-10 w-full rounded-xl" />
          <Skeleton className="h-10 w-full rounded-xl" />
        </div>
      </div>

      <Skeleton className="h-6 w-full rounded-sm" />

      {/*  Skeleton untuk Tabel */}
      <div className="mt-4">
        <Skeleton className="h-72 w-full rounded-xl" />
      </div>
    </div>
  );
}
