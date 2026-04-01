"use client";

import { useProctorMonitor } from "@/hooks/use-proctoring-monitor";
import { useEffect, useMemo, useRef } from "react";
import { toast } from "sonner";
import {
  EXAM_WARNING_CODES,
  useExamWarningTracker,
} from "../_hooks/use-exam-warning-tracker";

export function ProctoringGuard() {
  const { videoRef, isReady, error, state } = useProctorMonitor();
  const { recordWarning } = useExamWarningTracker();

  const flags = useMemo(() => {
    const next: string[] = [];

    if (state.peopleCount > 1) next.push("Олон хүн илэрсэн");
    if (state.peopleCount === 0 || state.headPose === "no-face") {
      next.push("Царай харагдахгүй байна");
    }
    if (state.headPose === "down") next.push("Доош харж байна");
    if (state.phoneVisible) next.push("Утас харагдаж байна");

    return next;
  }, [state.peopleCount, state.headPose, state.phoneVisible]);

  const lastToastRef = useRef<string>("");
  const lastToastTimeRef = useRef(0);

  useEffect(() => {
    if (!isReady || error) return;
    if (flags.length === 0) return;

    const now = Date.now();
    const signature = flags.join("|");

    // same warning давтаж битгий spam хий
    if (
      signature === lastToastRef.current &&
      now - lastToastTimeRef.current < 4000
    ) {
      return;
    }

    lastToastRef.current = signature;
    lastToastTimeRef.current = now;

    if (flags.includes("Олон хүн илэрсэн")) {
      recordWarning(EXAM_WARNING_CODES.proctorMultiplePeople);
    }
    if (flags.includes("Царай харагдахгүй байна")) {
      recordWarning(EXAM_WARNING_CODES.proctorFaceMissing);
    }
    if (flags.includes("Доош харж байна")) {
      recordWarning(EXAM_WARNING_CODES.proctorLookingDown);
    }
    if (flags.includes("Утас харагдаж байна")) {
      recordWarning(EXAM_WARNING_CODES.proctorPhoneVisible);
    }

    const severe =
      flags.includes("Олон хүн илэрсэн") ||
      flags.includes("Царай харагдахгүй байна");

    const title = severe ? "Сэжигтэй үйлдэл илэрсэн" : "Анхааруулга";
    const description = flags.join(", ");

    if (severe) {
      toast.error(title, {
        description,
        duration: 3000,
      });
    } else {
      toast.warning(title, {
        description,
        duration: 2500,
      });
    }
  }, [error, flags, isReady, recordWarning]);

  useEffect(() => {
    if (!error) return;

    recordWarning(EXAM_WARNING_CODES.proctorUnavailable);

    toast.error("Proctoring unavailable", {
      description: error,
      duration: 3000,
    });
  }, [error, recordWarning]);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      playsInline
      className="absolute -left-[9999px] top-0 h-px w-px opacity-0 pointer-events-none"
    />
  );
}
