"use client";

import { Users, FileText } from "lucide-react";

interface CourseCardProps {
  id: string;
  title: string;
  subtitle: string;
  students: number;
  progress: number;
  total: number;
  pending?: number;
  active?: boolean;
  onClick: (id: string) => void;
}

const CourseCard = ({
  id,
  title,
  subtitle,
  students,
  progress,
  total,
  pending,
  active,
  onClick,
}: CourseCardProps) => {
  return (
    <div
      onClick={() => onClick(id)}
      className={`cursor-pointer rounded-2xl border p-5 transition-all bg-white
      ${
        active
          ? "border-blue-500 shadow-md"
          : "border-gray-200 hover:shadow-sm"
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <div className="font-semibold text-gray-900">{title}</div>
            <div className="text-sm text-gray-500">{subtitle}</div>
          </div>
        </div>

        {pending && (
          <span className="text-xs bg-red-100 text-red-500 px-2 py-1 rounded-full">
            {pending} хүлээгдэж байна
          </span>
        )}
      </div>

      <div className="mb-2 text-sm text-gray-600 flex justify-between">
        <span>Дүгнэлтийн явц</span>
        <span>
          {progress}/{total}
        </span>
      </div>

      <div className="h-2 bg-gray-100 rounded-full mb-3">
        <div
          className="h-full bg-blue-500 rounded-full"
          style={{ width: `${(progress / total) * 100}%` }}
        />
      </div>

      <div className="flex items-center gap-1 text-sm text-gray-500">
        <Users className="w-4 h-4" />
        {students} оюутан
      </div>
    </div>
  );
};

export default CourseCard;