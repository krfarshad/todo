"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface TodoSearchProps {
  onSearch: (query: string) => void;
}

export default function TodoSearch(props: TodoSearchProps) {
  const { onSearch } = props;
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="relative mb-4">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
      <Input
        value={query}
        onChange={handleChange}
        placeholder="Search todos..."
        className="pl-10 pr-4 py-2 rounded-sm border focus:shadow-none focus:ring-transparent!"
      />
    </div>
  );
}
