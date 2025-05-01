import localFont from "next/font/local";
import "./globals.css";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export const metadata = {
  title: "Hamza | Full-Stack Developer",
  icons: {
    icon: "/logo.png", // path inside /public
  },
  description: "Welcome to Hamza's portfolio. Discover my web development projects, skills, and contact info.",
  keywords: ["Hamza", "portfolio", "web developer", "full-stack", "Next.js", "Django", "JavaScript"],
  authors: [{ name: "Hamza" }],
  openGraph: {
    title: "Hamza | Full-Stack Developer",
    description: "Explore projects and skills in web development built using Django and Next.js.",
    url: "https://portfolio-frontend-brown-nu.vercel.app", // Replace with your real domain
    siteName: "Hamza Portfolio",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg", // Replace with your image
        width: 1200,
        height: 630,
        alt: "Preview image of Hamza's portfolio",
      },
    ],
    locale: "en_MA",
    type: "website",
  },
 
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        {children}
      </body>
    </html>
  );
}
