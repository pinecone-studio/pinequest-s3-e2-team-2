"use client";

import { useProctoringMonitor } from "@/hooks/use-proctoring-monitor";

function getWarningMessage(warning: "NO_FACE" | "MULTIPLE_FACES" | null) {
  if (warning === "NO_FACE") {
    return "Таны царай камер дээр харагдахгүй байна.";
  }

  if (warning === "MULTIPLE_FACES") {
    return "Камер дээр 2 ба түүнээс олон хүн илэрлээ.";
  }

  return "";
}

export default function ExamPage() {
  const { videoRef, currentWarning, warningCount, incidents, lastCheckedAt } =
    useProctoringMonitor({
      intervalMs: 10000,
      autoStart: true,
    });

  return (
    <main className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-5xl space-y-4">
        {currentWarning ? (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-700">
            {getWarningMessage(currentWarning)}
          </div>
        ) : null}

        <div className="rounded-xl border bg-card p-4">
          <p className="text-sm text-muted-foreground">
            Last checked: {lastCheckedAt || "not yet"}
          </p>
          <p className="text-sm text-muted-foreground">
            Warning count: {warningCount}
          </p>
        </div>

        <div className="rounded-xl border bg-card p-4">
          <h2 className="mb-3 font-semibold">Incidents</h2>

          {incidents.length === 0 ? (
            <p className="text-sm text-muted-foreground">No warnings yet</p>
          ) : (
            <div className="space-y-2">
              {incidents.map((item) => (
                <div key={item.id} className="rounded-lg border p-3 text-sm">
                  <p>
                    {item.warningType === "NO_FACE"
                      ? "Face not detected"
                      : "Multiple faces detected"}
                  </p>
                  <p>Faces: {item.faceCount}</p>
                  <p>Time: {new Date(item.capturedAt).toLocaleString()}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Hidden video for monitoring only */}
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="absolute left-[-9999px] top-0 h-px w-px opacity-0 pointer-events-none"
        />
      </div>
    </main>
  );
}
