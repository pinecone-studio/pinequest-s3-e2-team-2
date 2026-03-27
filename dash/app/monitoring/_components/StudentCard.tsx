import { AlertTriangle, CheckCircle2, Wifi, WifiOff } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

import { getInitials, getStatusLabel } from "../_lib/helpers";
import type { Student } from "../_lib/types";

type Props = {
  student: Student;
};

export function StudentCard({ student }: Props) {
  const progressPercent =
    (student.currentQuestion / student.totalQuestions) * 100;

  const hasAlert = student.tabSwitches > 0;

  const statusIcon =
    student.status === "online" ? (
      <Wifi className="h-4 w-4 text-green-600" />
    ) : student.status === "offline" ? (
      <WifiOff className="h-4 w-4 text-gray-500" />
    ) : (
      <CheckCircle2 className="h-4 w-4 text-blue-600" />
    );

  const statusTextClassName =
    student.status === "online"
      ? "text-green-600"
      : student.status === "offline"
        ? "text-gray-500"
        : "text-blue-600";

  return (
    <Card
      className={`rounded-2xl bg-white shadow-sm transition ${
        hasAlert ? "border-red-300 bg-red-50/40" : ""
      }`}>
      <CardContent className="p-5">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
              {getInitials(student.name)}
            </div>

            <div>
              <h3 className="text-lg font-semibold leading-none">
                {student.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {student.email}
              </p>
            </div>
          </div>

          {hasAlert && (
            <Badge className="bg-red-600 text-white hover:bg-red-600">
              <AlertTriangle className="mr-1 h-3.5 w-3.5" />
              {student.tabSwitches} удаа
            </Badge>
          )}
        </div>

        <div className="mb-4 flex items-center gap-2 text-sm">
          {statusIcon}
          <span className={statusTextClassName}>
            {getStatusLabel(student.status)}
          </span>
        </div>

        {student.status === "submitted" ? (
          <p className="text-sm text-muted-foreground">
            Илгээсэн {student.submittedMinutesAgo} минутын өмнө
          </p>
        ) : (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Ахиц</span>
              <span className="font-medium">
                Асуулт {student.currentQuestion}/{student.totalQuestions}
              </span>
            </div>

            <Progress value={progressPercent} className="h-2" />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
