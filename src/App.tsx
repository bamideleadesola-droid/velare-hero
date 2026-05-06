import { AgentsAndPartners } from "./components/AgentsAndPartners";
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

  return (
    <>
      <ScrollProgress />
      {isPrivateTourPage ? (
        <PrivateTourPage />
      ) : isResidencePage ? (
        <ResidencePage />
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
