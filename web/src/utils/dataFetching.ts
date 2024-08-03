import { supabase } from "../supabaseClient";

export async function fetchWords(
  sourceLanguage,
  targetLanguage,
  wordCategory,
  wordDifficulty
) {
  const tableName = targetLanguage + "_" + wordCategory;
  const { data } = await supabase
    .from(`${tableName}`)
    .select()
    .eq("difficulty", wordDifficulty);
  return data;
}
