"use server"
import { revalidatePath } from "next/cache"


// Application Backend || Define Imports
// =================================================================================================
// =================================================================================================
import User from "../models/user.model"
import { connectToDatabase } from "../mongoose"


// Application Backend || Define Interfaces
// =================================================================================================
// =================================================================================================
interface IThreadParams {
  text: string
  author: string
  communityId: string | null
  path: string
}


// Application Backend || Define Functions
// =================================================================================================
// =================================================================================================
export async function createThread({ text, author, communityId, path }: IThreadParams) {
  connectToDatabase()

  const createdThread = await Thread.create()

}
