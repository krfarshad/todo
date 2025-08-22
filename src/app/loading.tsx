import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center">
      <Skeleton className="h-full" />
    </div>
  );
}
