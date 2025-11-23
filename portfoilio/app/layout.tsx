// app/layout.tsx
import './globals.css'; // optional, your global styles

export const metadata = {
  title: 'Pondfoilio',
  description: 'Your site description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
