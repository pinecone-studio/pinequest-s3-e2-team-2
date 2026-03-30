"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Code2,
  Database,
  Layout,
  BrainCircuit,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Төслийн үндсэн өнгөнүүд
const CHART_SURFACE = "#e6f4f1";
const CHART_ACCENT = "#006d77";

const COURSES = [
  {
    id: "CS301",
    name: "Өгөгдлийн бүтэц ба Алгоритм",
    progress: 89,
    icon: <Code2 className="w-5 h-5" />,
  },
  {
    id: "CS302",
    name: "Өгөгдлийн сангийн систем",
    progress: 93,
    icon: <Database className="w-5 h-5" />,
  },
  {
    id: "MATH201",
    name: "Шугамлаг Алгебр",
    progress: 91,
    icon: <Layout className="w-5 h-5" />,
  },
  {
    id: "CS401",
    name: "Machine Learning",
    progress: 88,
    icon: <BrainCircuit className="w-5 h-5" />,
  },
];

export function MyCourses() {
  return (
    <div className="mt-8 space-y-4">
      {/* Header Section */}
      <div className="flex items-center gap-4 px-1">
        <h2 className="font-bold text-[16px] text-slate-800 whitespace-nowrap">
          Миний хичээлүүд
        </h2>

        {/* Зураасны төгсгөл rounded-full */}
        <div className="h-[1.5px] flex-1 bg-slate-200 rounded-full" />

        {/* Илүү товчлуур (button) шиг харагдах See All */}
        <button
          onClick={() => console.log("Бүх хичээлийг үзэх")}
          className={cn(
            "flex items-center gap-1 px-4 py-1.5 rounded-full text-[11px] font-bold transition-all",
            "text-[#006d77] bg-[#e6f4f1]/50 hover:bg-[#e6f4f1] active:scale-95 border border-[#006d77]/10",
          )}
        >
          Бүгдийг үзэх
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Horizontal Scroll Area */}
      <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar px-1">
        {COURSES.map((course) => (
          <Card
            key={course.id}
            className="min-w-[280px] bg-white/60 backdrop-blur-md border-white/40 shadow-sm ring-1 ring-black/5 rounded-2xl hover:shadow-md transition-all group cursor-pointer"
          >
            <CardContent className="p-5">
              <div className="flex items-start justify-between mb-6">
                {/* Icon Box - CHART_SURFACE өнгөтэй */}
                <div className="p-3 rounded-xl bg-[#e6f4f1] text-[#006d77] transition-transform group-hover:scale-110 duration-300">
                  {course.icon}
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  {course.id}
                </span>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-slate-800 text-[15px] leading-tight h-10 line-clamp-2">
                  {course.name}
                </h3>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] font-medium text-slate-400">
                      Явц
                    </span>
                    <span className="text-[11px] font-bold text-[#006d77]">
                      {course.progress}%
                    </span>
                  </div>
                  {/* Progress Bar - CHART_ACCENT өнгөтэй */}
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#006d77] rounded-full transition-all duration-1000 shadow-[0_0_8px_rgba(0,109,119,0.2)]"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
