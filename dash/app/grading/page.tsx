"use client";
import { mockClasses } from "./mockData";
import { ExamCard } from "./_components/ExamCard";

const GradingPage = () => {
  const totalPending = mockClasses.reduce((sum, c) => sum + c.pending, 0);
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Дүн Үнэлгээ</h1>
        <p className="text-sm text-gray-500 mt-1">
          Дүгнэх хичээлээ сонгоно уу. Нийт {totalPending} хүлээгдэж байна.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {mockClasses.map((course) => (
          <ExamCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default GradingPage;
