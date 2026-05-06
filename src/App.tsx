import { AgentsAndPartners } from "./components/AgentsAndPartners";
import { FeaturedResidences } from "./components/FeaturedResidences";
import { PrivateInvitation } from "./components/PrivateInvitation";
import { PrivateViewing } from "./components/PrivateViewing";
import { ScrollProgress } from "./components/ScrollProgress";
import { VelareHero } from "./components/VelareHero";

function App() {
  return (
    <>
      <ScrollProgress />
      <VelareHero />
      <FeaturedResidences />
      <PrivateViewing />
      <AgentsAndPartners />
      <PrivateInvitation />
    </>
  );
}

export default App;
