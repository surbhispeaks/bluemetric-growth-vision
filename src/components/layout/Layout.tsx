
import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash in the URL (like #section-id)
    if (hash) {
      // Wait for the content to render
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // If no hash, scroll to top with smooth animation
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow overflow-x-hidden">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
