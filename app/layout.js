import "./globals.css";

export const metadata = {
  title: "WordNextin",
  description: "Created By Sumanta Das",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
