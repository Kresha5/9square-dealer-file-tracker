import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://ljrmcoklazxixtgeojrf.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_fz4_JNdm_q3koUlOtO_H8w_QqAHOM6G";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export { supabase };