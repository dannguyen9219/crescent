import { ClerkProvider } from "@clerk/nextjs"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'



// Application Client || Define Imports
// =================================================================================================
// =================================================================================================
import '../globals.css'
import { BottomBar } from "@/components/shared/BottomBar"
import { LeftSideBar } from "@/components/shared/LeftSideBar"
import { RightSideBar } from "@/components/shared/RightSideBar"
import { TopBar } from "@/components/shared/TopBar"


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Crescent',
  description: 'A Next.js Social Media Application',
}


// Application Authentication || Define Exports
// =================================================================================================
// =================================================================================================
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <TopBar />
          <main className="flex flex-row">
            <LeftSideBar />

            <section className="main-container">
              <div className="w-full max-w-4x1">
                {children}
              </div>
            </section>
            <RightSideBar />
          </main>
          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  )
}
