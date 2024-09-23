import { createClient } from "@/utils/supabase/server";
import { cache } from 'react';

export const getAllRooms = cache(async () => {
  const supabase = createClient();
    try {
        const categories = await supabase
        .from('rooms')
        .select("*");
         return categories.data
    } catch (error:any) {
        console.error(error);
        return error.message;
    }
});