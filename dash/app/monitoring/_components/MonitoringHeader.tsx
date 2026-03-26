import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  classFilter: string;
  classOptions: string[];
  onClassChange: (value: string) => void;
};

export function MonitoringHeader({
  classFilter,
  classOptions,
  onClassChange,
}: Props) {
  const selectedClassTitle = classFilter === "all" ? "Бүх анги" : classFilter;

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
      <div>
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight">
            Шалгалтын хяналт
          </h1>

          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
            Шууд
          </Badge>
        </div>

        <p className="mt-2 text-muted-foreground">
          {selectedClassTitle} - Шууд хяналтын самбар
        </p>
      </div>

      <div className="w-full lg:w-[320px]">
        <Select value={classFilter} onValueChange={onClassChange}>
          <SelectTrigger className="bg-white">
            <SelectValue placeholder="Анги сонгох" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Бүх анги</SelectItem>
            {classOptions.map((className) => (
              <SelectItem key={className} value={className}>
                {className}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
