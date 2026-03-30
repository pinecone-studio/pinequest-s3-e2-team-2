import { supabase } from "@/lib/supabase";

export const teacherQueries = {
  teachers: async () => {
    const { data, error } = await supabase.from("teachers").select("*");
    if (error) throw new Error(error.message);
    return data;
  },
  teacher: async (_: unknown, args: { id: string }) => {
    const { data, error } = await supabase
      .from("teachers")
      .select("*")
      .eq("id", args.id)
      .maybeSingle();
    if (error) throw new Error(error.message);
    return data;
  },
};
