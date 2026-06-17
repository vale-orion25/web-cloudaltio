import { createBrowserRouter, Navigate } from "react-router";
import { HomePage } from "./pages/HomePage";
import { PlatformPage } from "./pages/PlatformPage";
import { FinOpsPage } from "./pages/FinOpsPage";
import { IntegrationsPage } from "./pages/IntegrationsPage";
import { PlansPage } from "./pages/PlansPage";
import { FAQPage } from "./pages/FAQPage";
import { BlogPage } from "./pages/BlogPage";
import { BlogPostPage } from "./pages/BlogPostPage";
import { ContactPage } from "./pages/ContactPage";
import { AdminLogin } from "../admin/pages/AdminLogin";
import { AdminLayout } from "../admin/components/AdminLayout";
import { BlogList } from "../admin/pages/blog/BlogList";
import { BlogEditor } from "../admin/pages/blog/BlogEditor";
import { NewsletterList } from "../admin/pages/newsletter/NewsletterList";
import { NewsletterEditor } from "../admin/pages/newsletter/NewsletterEditor";

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
  {
    path: "/admin/login",
    Component: AdminLogin,
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { index: true, element: <Navigate to="/admin/blog" replace /> },
      { path: "blog", Component: BlogList },
      { path: "blog/nuevo", Component: BlogEditor },
      { path: "blog/:id/editar", Component: BlogEditor },
      { path: "newsletter", Component: NewsletterList },
      { path: "newsletter/nuevo", Component: NewsletterEditor },
      { path: "newsletter/:id/editar", Component: NewsletterEditor },
    ],
  },
], { basename: '/web-cloudaltio' });
