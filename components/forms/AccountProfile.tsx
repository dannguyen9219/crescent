"use client"

interface AccountProfileProps {
  user: {
    id: string
    objectId: string
    username: string
    name: string
    bio: string
    image: string
  }
  btnTitle: string
}


// Application Components || Define Exports
// =================================================================================================
// =================================================================================================
export const AccountProfile = ({ user, btnTitle }: AccountProfileProps) => {

  return (
    <div>
      Account Profile
    </div>
  )
}
