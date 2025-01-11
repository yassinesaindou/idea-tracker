"use server";

import { title } from "process";
import { databases } from "./lib/apprite";
import { redirect } from "next/navigation";
import { ID, Permission } from "appwrite";
import { revalidatePath } from "next/cache";
//Get All Ideas

export async function getAllIdeas() {
  try {
    const res = await databases.listDocuments(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_COLLECTION_ID!
    );
    return res;
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/");
}

// Get A single Idea

export async function getIdea(id: string) {
  try {
    const res = await databases.getDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_COLLECTION_ID!,
      id
    );

    return res;
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/");
}

// Update Idea

export async function updateIdea(id: string, formData: FormData) {
  try {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const priority = formData.get("priority") as string;
    let status = formData.get("status") as string;

    status = status
      .split("-")
      .join(" ")
      .replace(/^./, (char) => char.toUpperCase());

    const res = await databases.updateDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_COLLECTION_ID!,
      id,
      {
        title,
        description,
        priority,
        status,
      }
    );

    console.log(res);
    revalidatePath("/", "layout");
  } catch (error) {
    console.log(error);
  }

  return redirect("/");
}

// Create New Idea
export async function createIdea(formData: FormData) {
  try {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const priority = formData.get("priority") as string;
    let status = formData.get("status") as string;

    await databases.createDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_COLLECTION_ID!,
      ID.unique(),
      {
        title,
        description,
        priority,
        status,
        date: new Date().toDateString(),
      }
    );

    revalidatePath("/");
  } catch (error) {
    console.log("Error occurred", error);
  }

  return redirect("/");
}

export async function deleteIdea(id: string) {
  try {
    await databases.deleteDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_COLLECTION_ID!,
      id
    );

    revalidatePath("/", "layout");
  } catch (error) {
    console.log(error);
  }
  return redirect("/");
}
