import { TabsList, TabsTrigger } from "@/components/ui/tabs";

export const TabsTriggers = () => {
  return (
    <TabsList className="mb-2 w-full bg-gray-300">
      <TabsTrigger className="flex-1 cursor-pointer" value="all">
        All
      </TabsTrigger>
      <TabsTrigger className="flex-1 cursor-pointer" value="completed">
        Completed
      </TabsTrigger>
      <TabsTrigger className="flex-1 cursor-pointer" value="uncompleted">
        Uncompleted
      </TabsTrigger>
    </TabsList>
  );
};
