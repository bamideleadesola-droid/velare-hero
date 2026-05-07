import { AgentsPage } from "./components/AgentsPage";
import { AgentsAndPartners } from "./components/AgentsAndPartners";
import { ContactPage } from "./components/ContactPage";
import { DesignPage } from "./components/DesignPage";
import { FeaturedResidences } from "./components/FeaturedResidences";
import { PrivateInvitation } from "./components/PrivateInvitation";
import { PrivateTourPage } from "./components/PrivateTourPage";
import { PrivateViewing } from "./components/PrivateViewing";
import { ResidencePage } from "./components/ResidencePage";
import { ScrollProgress } from "./components/ScrollProgress";
import { VelareHero } from "./components/VelareHero";

function App() {
  const pathname = window.location.pathname.replace(/\/$/, "") || "/";
  const isResidencePage = pathname === "/residences";
  const isPrivateTourPage = pathname === "/private-tour";
  const isAgentsPage = pathname === "/agents";
  const isDesignPage = pathname === "/design";
  const isContactPage = pathname === "/contact";

  return (
    <>
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
      ) : (
        <>
          <VelareHero />
          <FeaturedResidences />
          <PrivateViewing />
          <AgentsAndPartners />
          <PrivateInvitation />
        </>
      )}
    </>
  );
}

export default App;
