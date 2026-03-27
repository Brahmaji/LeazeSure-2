import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ytfwsekbjerrimukrwxe.supabase.co';
const supabaseKey = 'sb_publishable_tdLU3MGux4NOgwbl66sWvg_LEsspcdo';

export const supabase = createClient(supabaseUrl, supabaseKey);
