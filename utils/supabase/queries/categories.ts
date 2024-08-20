import { createClient } from "@/utils/supabase/server";
import { cache } from 'react';

export const getAllCategories = cache(async () => {
  const supabase = createClient();
    try {
        const categories = await supabase
        .from('categories')
        .select("id, name, slug");
         return categories.data
    } catch (error:any) {
        console.error(error);
        return error.message;
    }
});