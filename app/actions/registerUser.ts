"use server";

import { db } from "@/configs/db";
import { Users } from "@/configs/schema";
import { eq } from "drizzle-orm";

export async function registerUser(userData: {
  name: string | null;
  email: string | null;
  imageUrl: string | null;
}) {
  if (!userData.email) return;

  const result = await db
    .select()
    .from(Users)
    .where(eq(Users.email, userData.email));

  if (!result.length) {
    await db.insert(Users).values({
      name: userData.name ?? "", 
      email: userData.email,
      imageUrl: userData.imageUrl ?? "", 

    });
  }
}
