// app/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HomePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleStartExam() {
    setLoading(true);
    setError("");

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
        audio: false,
      });

      // permission авсан эсэхээ шалгаад шууд stop хийнэ
      stream.getTracks().forEach((track) => track.stop());

      router.push("/exam");
    } catch (err) {
      setError("Камерын permission зөвшөөрөх хэрэгтэй.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold">Online Exam</h1>

        <button
          onClick={handleStartExam}
          disabled={loading}
          className="px-6 py-3 rounded-xl bg-indigo-600 text-white disabled:opacity-50"
        >
          {loading ? "Шалгаж байна..." : "Start Exam"}
        </button>

        {error ? <p className="text-red-500">{error}</p> : null}
      </div>
    </main>
  );
}
