import { pickDefined } from "@/graphql/shared";
import { supabase } from "@/lib/supabase";

type SubmissionStatus = "in_progress" | "submitted" | "reviewed";

type CreateSubmissionArgs = {
  student_id: string;
  exam_id: string;
  started_at: string;
  submitted_at?: string;
  status?: SubmissionStatus;
  attempt_number?: number;
  score_auto?: number;
  score_manual?: number;
  final_score?: number;
};

function isValidTransition(
  from: SubmissionStatus | null,
  to: SubmissionStatus,
): boolean {
  if (from === to) return true;
  if (from === "in_progress" && to === "submitted") return true;
  if (from === "submitted" && to === "reviewed") return true;
  return false;
}

export const submissionMutations = {
  createSubmission: async (_: unknown, args: CreateSubmissionArgs) => {
    const payload = {
      ...args,
      status: args.status ?? "in_progress",
      attempt_number: args.attempt_number ?? 1,
    };

    const { data, error } = await supabase
      .from("submissions")
      .insert([payload])
      .select()
      .single();

    if (error) throw new Error(error.message);
    return data;
  },

  updateSubmission: async (
    _: unknown,
    args: {
      id: string;
      student_id?: string;
      exam_id?: string;
      started_at?: string;
      submitted_at?: string;
      status?: SubmissionStatus;
      attempt_number?: number;
      score_auto?: number;
      score_manual?: number;
      final_score?: number;
    },
  ) => {
    const { data: current, error: currentErr } = await supabase
      .from("submissions")
      .select("status")
      .eq("id", args.id)
      .maybeSingle();

    if (currentErr) throw new Error(currentErr.message);
    if (!current) throw new Error("Submission not found");

    if (args.status) {
      const from = (current.status ?? null) as SubmissionStatus | null;
      const to = args.status;

      if (!isValidTransition(from, to)) {
        throw new Error(`Invalid status transition: ${from} -> ${to}`);
      }
    }

    const payload = pickDefined({
      student_id: args.student_id,
      exam_id: args.exam_id,
      started_at: args.started_at,
      submitted_at:
        args.status === "submitted" && !args.submitted_at
          ? new Date().toISOString()
          : args.submitted_at,
      status: args.status,
      attempt_number: args.attempt_number,
      score_auto: args.score_auto,
      score_manual: args.score_manual,
      final_score: args.final_score,
    });

    const { data, error } = await supabase
      .from("submissions")
      .update(payload)
      .eq("id", args.id)
      .select()
      .single();

    if (error) throw new Error(error.message);
    return data;
  },
};
