import { RouterProvider } from "react-router";
import { router } from "./routes";
import { LanguageProvider } from "@/lib/i18n";
import "../styles/fonts.css";

export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}
