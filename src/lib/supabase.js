import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ynpvsoxznwvjsqmjpzlv.supabase.co";
const supabaseAnonKey =
  "sb_publishable_hvwi4k2DJ3DiJgVm4OBX5w_ut4BLq0o";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
