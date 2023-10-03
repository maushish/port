export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <div className="bg-black h-[100px] w-full">
          <h1>Maushish.co</h1>
          <a>Blogs</a>
          <a>Hire me</a>    
          </div>
        </nav>

        {children}
      </body>
    </html>
  )
}