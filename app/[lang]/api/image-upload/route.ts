// app/[lang]/api/image-upload/route.ts
import { NextResponse } from 'next/server';
import sharp from 'sharp';
import { createClient } from '@/utils/supabase/client';
import { SupabaseClient } from '@supabase/supabase-js';

export async function POST(req: Request) {
  try {
    const { path, fileBuffer, lang } = await req.json();

    // Initialize Supabase
    const supabase = createClient();

    // Optimize the image while preserving the aspect ratio and convert it to WebP
    const optimizedBuffer = await sharp(Buffer.from(fileBuffer))
      .resize({
        width: 800,
        withoutEnlargement: true,
      })
      .webp({ quality: 80 })
      .toBuffer();

    // Upload the WebP image to Supabase
    const { data, error } = await supabase.storage
      .from("hqnrd")
      .upload(path, optimizedBuffer, {
        cacheControl: "3600",
        upsert: true,
        contentType: "image/webp",
      });

    if (error) {
      throw new Error(`Failed to upload image to Supabase: ${error.message}`);
    }

    return NextResponse.json({ path: data?.path });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
