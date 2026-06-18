import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "Legal Ease",
  description:
    "LegalEase is a digital platform that connects legal seekers, clients, and businesses with talented lawyers. The platform allows users to browse, discover, and hire legal experts. Lawyers can offer and manage their legal services after a one-time verification payment, while an admin oversees the entire system.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className="font-serif h-full antialiased bg-[#f8f4e9] text-[#43311c]"
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
