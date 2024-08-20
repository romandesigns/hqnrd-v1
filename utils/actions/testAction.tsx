"use server";
import { redirect } from "next/navigation";

export async function testAction(formData: FormData) {
  console.log(formData);
  const payload = {
    title: formData.get("title"),
    lang: formData.get("lang"),
  };
  if (payload.lang) {
    redirect(`/${payload.lang}/portal/habitaciones/crear?success=true`);
  }
}
