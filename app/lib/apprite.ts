import { Account, Client, Databases } from "appwrite";

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT!) // Your Appwrite Endpoint
  .setProject(process.env.NEXT_PUBLIC_PROJECT_ID!);

// export const account = new Account(client);
export const databases = new Databases(client);
