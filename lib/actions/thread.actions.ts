"use server"
import { revalidatePath } from "next/cache"


// Application Backend || Define Imports
// =================================================================================================
// =================================================================================================
import User from "../models/user.model"
import Thread from "../models/thread.model"
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

  try {
    connectToDatabase()

    const createdThread = await Thread.create({
      text,
      author,
      community: null,
    })

    // Update user model
    await User.findByIdAndUpdate(author, {
      $push: { threads: createdThread._id },
    })

    revalidatePath(path)
  } catch (error: any) {
    throw new Error(`Failed to create thread: ${error.message}`)
  }
}
