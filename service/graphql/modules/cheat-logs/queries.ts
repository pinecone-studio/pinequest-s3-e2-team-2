import { supabase } from "@/lib/supabase";

function serializeCheatLog(row: Record<string, unknown>) {
  const metadata = row.metadata;
  return {
    ...row,
    metadata:
      metadata === null || metadata === undefined
        ? null
        : typeof metadata === "string"
          ? metadata
          : JSON.stringify(metadata),
  };
}

export const cheatLogQueries = {
  cheatLogs: async (
    _: unknown,
    args: { student_id?: string; exam_id?: string },
  ) => {
    let query = supabase.from("cheat_logs").select("*").order("created_at", {
      ascending: false,
    });

    if (args.student_id) {
      query = query.eq("student_id", args.student_id);
    }
    if (args.exam_id) {
      query = query.eq("exam_id", args.exam_id);
    }

    const { data, error } = await query;
    if (error) throw new Error(error.message);
    return (data ?? []).map((row) => serializeCheatLog(row));
  },

  cheatLog: async (_: unknown, args: { id: string }) => {
    const { data, error } = await supabase
      .from("cheat_logs")
      .select("*")
      .eq("id", args.id)
      .single();

    if (error) throw new Error(error.message);
    return serializeCheatLog(data);
  },
};
