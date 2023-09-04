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
interface IUserParams {
  userId: string
  username: string
  name: string
  bio: string
  image: string
  path: string
}


// Application Backend || Define Functions
// =================================================================================================
// =================================================================================================
export async function updateUser({ userId, username, name, bio, image, path }: IUserParams): Promise<void> {

  try {
    connectToDatabase()

    await User.findOneAndUpdate(
      { id: userId },
      {
        userName: username.toLowerCase(),
        name,
        bio,
        image,
        path,
      },
      { upsert: true } // database operation that will update an existing row if a specified value already exists in a table or insert a new row if the specified value does not exist
    )

    if (path === "/profile/edit") {
      revalidatePath(path) // allows you to revalidate data associated with a specific path. Useful for scenarios where you want to update your cached data without waiting for a revalidation period to expire.
    }
  } catch (error: any) {
    throw new Error(`Failed to create/update user: ${error.message}`)
  }
}

export async function fetchUser(userId: string) {
  try {
    connectToDatabase()

    return await User
      .findOne({ id: userId })
    // .populate({
    //   path: "communities",
    //   model: Community
    // })
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`)
  }
}
