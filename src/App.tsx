import { AgentsPage } from "./components/AgentsPage";
import { AgentsAndPartners } from "./components/AgentsAndPartners";
import { ContactPage } from "./components/ContactPage";
import { DesignPage } from "./components/DesignPage";
import { FeaturedResidences } from "./components/FeaturedResidences";
import { NotFoundPage } from "./components/NotFoundPage";
import { PrivateInvitation } from "./components/PrivateInvitation";
import { PrivateTourPage } from "./components/PrivateTourPage";
import { PrivateViewing } from "./components/PrivateViewing";
import { ResidencePage } from "./components/ResidencePage";
import { RouteMetadata, type RouteMeta } from "./components/RouteMetadata";
import { ScrollProgress } from "./components/ScrollProgress";
import { VelareHero } from "./components/VelareHero";

const routeMetaByPath: Record<string, RouteMeta> = {
  "/": {
    path: "/",
    title: "VELARÉ | Designed Living, Perfected",
    description:
      "VELARÉ curates cinematic private residences for elegant, timeless living.",
  },
  "/residences": {
    path: "/residences",
    title: "Residences | VELARÉ",
    description:
      "Explore VELARÉ private residences selected for privacy, proportion, and permanence.",
  },
  "/private-tour": {
    path: "/private-tour",
    title: "Private Tour | VELARÉ",
    description:
      "Request a private VELARÉ viewing shaped around market, timing, and discretion.",
  },
  "/agents": {
    path: "/agents",
    title: "Agents | VELARÉ",
    description:
      "Meet VELARÉ private advisors across global luxury residence markets.",
  },
  "/design": {
    path: "/design",
    title: "Design | VELARÉ",
    description:
      "Discover the VELARÉ design language of proportion, material, and quiet light.",
  },
  "/contact": {
    path: "/contact",
    title: "Contact | VELARÉ",
    description:
      "Contact the VELARÉ private office for residences, tours, partnerships, and confidential mandates.",
  },
};

const notFoundMeta: RouteMeta = {
  path: "/404",
  title: "Page Not Found | VELARÉ",
  description: "This VELARÉ private address is not available.",
  noindex: true,
};

function App() {
  const pathname = window.location.pathname.replace(/\/$/, "") || "/";
  const isResidencePage = pathname === "/residences";
  const isPrivateTourPage = pathname === "/private-tour";
  const isAgentsPage = pathname === "/agents";
  const isDesignPage = pathname === "/design";
  const isContactPage = pathname === "/contact";
  const isHomePage = pathname === "/";
  const routeMeta = routeMetaByPath[pathname] || notFoundMeta;

  return (
    <>
      <RouteMetadata meta={routeMeta} />
      <ScrollProgress />
      {isPrivateTourPage ? (
        <PrivateTourPage />
      ) : isResidencePage ? (
        <ResidencePage />
      ) : isAgentsPage ? (
        <AgentsPage />
      ) : isDesignPage ? (
        <DesignPage />
      ) : isContactPage ? (
        <ContactPage />
      ) : isHomePage ? (
        <>
          <VelareHero />
          <FeaturedResidences />
          <PrivateViewing />
          <AgentsAndPartners />
          <PrivateInvitation />
        </>
      ) : (
        <NotFoundPage />
      )}
    </>
  );
}

export default App;
