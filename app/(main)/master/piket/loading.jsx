import { Skeleton } from "@/components/ui/skeleton";

export default function SiswaLoading() {
  return (
    <div className="flex flex-col space-y-6">
      {/* Skeleton untuk Breadcrumb */}
      <Skeleton className="h-6 w-1/3 rounded-sm" />

      {/*  Skeleton untuk tombol tambah dan pencarian */}
      <div className="flex gap-2 justify-between">
        <Skeleton className="h-10 w-full rounded-xl" />
        <Skeleton className="h-10 w-full rounded-xl" />
      </div>

      {/*  Skeleton untuk Tabel */}
      <div className="mt-4">
        <Skeleton className="h-72 w-full rounded-xl" />
      </div>
    </div>
  );
}
