"use client"
import React from "react"
import { ChangeEvent } from "react"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"


// Application Components || Define Imports
// =================================================================================================
// =================================================================================================
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
// import { updateUser } from "@/lib/actions/user.actions"
// import { UserValidation } from "@/lib/validations/user"



// Application Components || Define Exports
// =================================================================================================
// =================================================================================================
export const PostThread = ({ userId }: { userId: string }) => {
  const router = useRouter()
  const pathname = usePathname()

  const form = useForm({
    resolver: zodResolver(),
    defaultValues: {
      thread: "",
      accountId: userId,
    },
  })

  return (
    <h1>
      Post Thread Form
    </h1>
  )
}
