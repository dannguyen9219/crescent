// Resource: https://docs.uploadthing.com/api-reference/react#generatereacthelpers

import { generateReactHelpers } from "@uploadthing/react/hooks"

// Backend for image upload
import type { OurFileRouter } from "@/app/api/uploadthing/core"

export const { useUploadThing, uploadFiles } = generateReactHelpers<OurFileRouter>()
