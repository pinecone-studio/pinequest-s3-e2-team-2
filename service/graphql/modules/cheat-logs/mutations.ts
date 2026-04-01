import { pickDefined } from "@/graphql/shared";
import { supabase } from "@/lib/supabase";

function parseMetadataJson(value: string | null | undefined): unknown {
  if (value === null || value === undefined || value === "") return null;
  try {
    return JSON.parse(value);
  } catch {
    throw new Error("metadata must be valid JSON");
  }
}

export const cheatLogMutations = {
  createCheatLog: async (
    _: unknown,
    args: {
      student_id: string;
      exam_id: string;
      type: string;
      event: string;
      severity: number;
      metadata?: string | null;
    },
  ) => {
    const payload: Record<string, unknown> = {
      student_id: args.student_id,
      exam_id: args.exam_id,
      type: args.type,
      event: args.event,
      severity: args.severity,
    };

    if (args.metadata !== undefined && args.metadata !== null) {
      payload.metadata = parseMetadataJson(args.metadata);
    }

    const { data, error } = await supabase
      .from("cheat_logs")
      .insert([payload])
      .select()
      .single();

    if (error) throw new Error(error.message);

    const metadata = data.metadata;
    return {
      ...data,
      metadata:
        metadata === null || metadata === undefined
          ? null
          : typeof metadata === "string"
            ? metadata
            : JSON.stringify(metadata),
    };
  },

  updateCheatLog: async (
    _: unknown,
    args: {
      id: string;
      type?: string;
      event?: string;
      severity?: number;
      metadata?: string | null;
    },
  ) => {
    const payload = pickDefined({
      type: args.type,
      event: args.event,
      severity: args.severity,
      metadata:
        args.metadata === undefined
          ? undefined
          : parseMetadataJson(args.metadata),
    });

    const { data, error } = await supabase
      .from("cheat_logs")
      .update(payload)
      .eq("id", args.id)
      .select()
      .single();

    if (error) throw new Error(error.message);

    const metadata = data.metadata;
    return {
      ...data,
      metadata:
        metadata === null || metadata === undefined
          ? null
          : typeof metadata === "string"
            ? metadata
            : JSON.stringify(metadata),
    };
  },

  deleteCheatLog: async (_: unknown, args: { id: string }) => {
    const { error } = await supabase
      .from("cheat_logs")
      .delete()
      .eq("id", args.id);

    if (error) throw new Error(error.message);
    return true;
  },
};
