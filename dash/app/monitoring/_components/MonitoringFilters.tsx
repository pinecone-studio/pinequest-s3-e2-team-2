import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type StudentFilter = "all" | "alert";

type Props = {
  searchTerm: string;
  studentFilter: StudentFilter;
  onSearchChange: (value: string) => void;
  onStudentFilterChange: (value: StudentFilter) => void;
};

export function MonitoringFilters({
  searchTerm,
  studentFilter,
  onSearchChange,
  onStudentFilterChange,
}: Props) {
  return (
    <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
      <div className="relative w-full sm:w-[320px]">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Сурагчийн нэрээр хайх..."
          className="bg-white pl-9"
        />
      </div>

      <Select
        value={studentFilter}
        onValueChange={(value: StudentFilter) => onStudentFilterChange(value)}>
        <SelectTrigger className="w-full bg-white sm:w-[220px]">
          <SelectValue placeholder="Шүүлтүүр" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Бүх сурагч</SelectItem>
          <SelectItem value="alert">Зөвхөн анхааруулгатай</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
