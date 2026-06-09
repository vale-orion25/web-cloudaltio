import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { PlatformPage } from "./pages/PlatformPage";
import { FinOpsPage } from "./pages/FinOpsPage";
import { IntegrationsPage } from "./pages/IntegrationsPage";
import { PlansPage } from "./pages/PlansPage";
import { FAQPage } from "./pages/FAQPage";
import { BlogPage } from "./pages/BlogPage";
import { BlogPostPage } from "./pages/BlogPostPage";
import { ContactPage } from "./pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/plataforma",
    Component: PlatformPage,
  },
  {
    path: "/finops",
    Component: FinOpsPage,
  },
  {
    path: "/integraciones",
    Component: IntegrationsPage,
  },
  {
    path: "/planes",
    Component: PlansPage,
  },
  {
    path: "/faq",
    Component: FAQPage,
  },
  {
    path: "/blog",
    Component: BlogPage,
  },
  {
    path: "/blog/:slug",
    Component: BlogPostPage,
  },
  {
    path: "/contacto",
    Component: ContactPage,
  },
], { basename: '/web-cloudaltio' });
