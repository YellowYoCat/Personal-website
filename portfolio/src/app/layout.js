// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

//used for google fonts 
//(keep these incase you want to change fonts for your website)
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Portfolio",
  description: "A website for my Portfolio and just my own personal website! L(0w0)J",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`} //how to input the google fonts apparently
      >
        {children}
      </body>
    </html>
  );
}
