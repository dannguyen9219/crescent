import { currentUser } from "@clerk/nextjs"
import { redirect } from "next/navigation"


// Application Components || Define Imports
// =================================================================================================
// =================================================================================================
import { fetchUser } from "@/lib/actions/user.actions"


// Application Components || Define Exports
// =================================================================================================
// =================================================================================================
async function Page() {
  const user = await currentUser()

  if (!user) {
    return null
  }

  const userInfo = await fetchUser(user.id)

  // if (!userInfo?.onboarded) {
  //   redirect("/onboarding")
  // }

  return (
    <>
      <h1 className="head-text">
        Create Post
      </h1>
    </>
  )
}

export default Page
