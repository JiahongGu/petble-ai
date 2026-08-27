import { IntelligenceMap } from "@/components/ecosystem/IntelligenceMap";
import { CatHighlight } from "@/components/home/CatHighlight";
import { ScenarioReel } from "@/components/home/ScenarioReel";
import { DeviceMatrix } from "@/components/ecosystem/DeviceMatrix";
import { WhyTogether } from "@/components/ecosystem/WhyTogether";
import { InsightLoop } from "@/components/ecosystem/InsightLoop";
import { FitFinder } from "@/components/ecosystem/FitFinder";

export function EcosystemZone() {
  return (
    <div id="ecosystem" className="scroll-mt-24">
      <IntelligenceMap />
      <CatHighlight />
      <ScenarioReel />
      <DeviceMatrix />
      <WhyTogether />
      <InsightLoop />
      <FitFinder />
    </div>
  );
}
