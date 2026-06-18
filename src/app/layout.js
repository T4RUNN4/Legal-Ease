import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Legal Ease",
  description:
    "LegalEase is a digital platform that connects legal seekers, clients, and businesses with talented lawyers. The platform allows users to browse, discover, and hire legal experts. Lawyers can offer and manage their legal services after a one-time verification payment, while an admin oversees the entire system.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
