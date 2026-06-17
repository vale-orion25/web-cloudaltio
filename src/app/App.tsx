import { RouterProvider, useLocation, Outlet } from "react-router";
import { router } from "./routes";
import { LanguageProvider } from "@/lib/i18n";
import "../styles/fonts.css";
import { useEffect } from "react";

export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return <Outlet />;
}

export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}
