import "./globals.css"
import {Inter} from "next/font/google"
const inter=Inter({
  subsets:["latin"]
});

export const metadata={
  title:"Maushish.co", 
  description:"Made by Maushish Yadav"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-main `}>
        {children}</body>
    </html>
  )
}