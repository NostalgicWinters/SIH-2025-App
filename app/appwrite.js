import { Account, Client, Databases, Storage } from "appwrite";

const client = new Client()
    .setEndpoint("https://fra.cloud.appwrite.io/v1") // Your Appwrite endpoint
    .setProject("68cac7a4001901e6f61f"); // Your project ID

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
