import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from 'next/font/google'


// Application Client || Define Imports
// =================================================================================================
// =================================================================================================
import "../globals.css"


export const metadata = {
  title: 'Crescent',
  description: 'A Next.js Social Media Application',
}


const inter = Inter({ subsets: ['latin'] })

// Application Authentication || Define Exports
// =================================================================================================
// =================================================================================================
export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
