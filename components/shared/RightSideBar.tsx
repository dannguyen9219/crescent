"use client"
import Link from 'next/link'
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { SignedIn, SignOutButton } from '@clerk/nextjs'


// Application Imports || Define Imports
// =================================================================================================
// =================================================================================================
import { sidebarLinks } from '@/constants/index'


// Application Components || Define Exports
// =================================================================================================
// =================================================================================================
export const RightSideBar = () => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <section className="custom-scrollbar rightsidebar">
      <div className="flex flex-1 flex-col justify-start">
        <h3 className="text-heading4-medium text-light-1">
          Suggested Communities
        </h3>
      </div>
      <div className="flex flex-1 flex-col justify-start">
        <h3 className="text-heading4-medium text-light-1">
          Suggested Users
        </h3>
      </div>
    </section>
  )
}
