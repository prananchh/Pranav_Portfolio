import "./globals.css"

export const metadata = {
  title: "Pranav Chopra - AI/ML Engineer & Full Stack Developer",
  description:
    "Portfolio of Pranav Chopra - AI/ML Engineer and Full Stack Developer pursuing Software Engineering Co-op at Western University",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">{children}</body>
    </html>
  )
}
