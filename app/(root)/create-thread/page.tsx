import { currentUser } from "@clerk/nextjs"
import { redirect } from "next/navigation"



// Application Components || Define Exports
// =================================================================================================
// =================================================================================================
async function Page() {

  return (
    <h1 className="head-text">
      Create Post
    </h1>
  )
}

export default Page
